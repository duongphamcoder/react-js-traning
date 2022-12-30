import { Link } from "react-router-dom";
import cinndy from "assets/images/Cinndy.jpg";
import cector from "assets/icons/Vector.svg";
import Heading from "components/Heading/Heading";
import Button from "components/Button/Button";
import Paragraph from "components/Paragraph/Paragraph";
import Input from "components/Input/Input";
import { navLinks } from "constants/navLinks";
import Form from "components/Form/Form";
import "./header.css";
import { FormEvent, useState, MouseEvent, ChangeEvent } from "react";
import Overlay from "components/Overlay/Overlay";
import useStore from "hooks/useStore";
import { ContextAction } from "constants/contextAction";
import validation from "helpers/validation/empty";

function Header() {
  const [isShowForm, setIsShowForm] = useState(false);
  const [state, dispatch] = useStore();
  const { blog } = state;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const { dataFields, error } = validation(blog);
    if (error) {
      // TODO: I will add the error message later
      alert("Error");
      return;
    }
  };

  const closeForm = (event: MouseEvent) => {
    setIsShowForm(false);
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
    dispatch({
      type: ContextAction.SET_BLOG,
      payload: {
        ...blog,
        [key]: value,
      },
    });
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
    </header>
  );
}

export default Header;
