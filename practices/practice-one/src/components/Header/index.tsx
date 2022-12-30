import { FormEvent, useState, MouseEvent, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import useStore from "hooks/useStore";
import Overlay from "components/Overlay";
import Form from "components/Form";
import Button from "components/Button";
import Heading from "components/Heading";
import Paragraph from "components/Paragraph";
import cector from "assets/icons/vector.svg";
import Input from "components/Input";
import { navLinks } from "constants/navLinks";
import firebaseService from "services/firebase";
import { setBlog, setLoading } from "reduxs/actions";
import { serverTimestamp } from "firebase/firestore";
import cinndy from "assets/images/cinndy.jpg";
import { validation } from "helpers/";
import "./header.css";

const Header = () => {
  const [state, dispatch] = useStore();
  const [isShowForm, setIsShowForm] = useState(false);

  const { blog, loading } = state;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const { dataFields, error } = validation(blog);
    if (error) {
      // TODO: I will add the error message later
      alert("Error");
      return;
    }
    dispatch(setLoading(true));
    firebaseService("blogs")
      .addData({
        ...blog,
        uid: 123, // TODO:Update to late
        createAt: serverTimestamp(),
      })
      .then((res) => {
        dispatch(setLoading(false));
        dispatch(
          setBlog({
            image: "",
            title: "",
            category: "",
          })
        );
      });
  };

  const closeForm = (event: MouseEvent) => {
    setIsShowForm(false);
    dispatch(
      setBlog({
        image: "",
        title: "",
        category: "",
      })
    );
  };

  const handleSetValueBlog = (event: ChangeEvent) => {
    type InputType = HTMLInputElement | HTMLSelectElement;
    const element: InputType = event.target as InputType;
    const key: string = element.name;
    let value: string = element.value;
    if (element.type === "file") {
      const fileElement: HTMLInputElement = element as HTMLInputElement;
      const file = fileElement.files ? fileElement.files[0] : new File([], "default.jpg");
      value = URL.createObjectURL(file);
    }
    dispatch(
      setBlog({
        ...blog,
        [key]: value,
      })
    );
  };

  return (
    <header className="container">
      <section className="header-logo">
        <Link to="/" className="header-logo-link">
          <img src={cector} alt="Logo website" />
          <img src={cinndy} alt="Logo website" />
        </Link>
      </section>
      <section className="header-heading">
        <section className="header-heading-item">
          <Heading tag="h1" title="Blog" />
          <Paragraph content="Stay up to date with our portfolio" />
        </section>
        <section className="header-heading-item">
          <Button
            variant="primary"
            title="New blog"
            size="md"
            onClick={(event: MouseEvent) => {
              setIsShowForm(true);
            }}
          />
        </section>
      </section>
      <section className="header-filter">
        <nav className="header-navigation">
          {navLinks.map(({ title, path }, index) => (
            <Button tag="a" title={title} path={path} key={index} />
          ))}
        </nav>
        <section className="header-filter-search">
          <Input type="text" name="filter" placeholder="Give me a keyword..." />
        </section>
      </section>
      {isShowForm && (
        <Overlay onClick={closeForm}>
          <Form data={blog} onSubmit={handleSubmit} onChange={handleSetValueBlog} />
        </Overlay>
      )}

      {
        // TODO: update to late
        loading && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              fontSize: "30px",
              zIndex: "10000",
            }}>
            Loading.....
          </div>
        )
      }
    </header>
  );
};

export default Header;
