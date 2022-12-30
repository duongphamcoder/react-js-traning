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
import { FormEvent, useState, MouseEvent } from "react";
import Overlay from "components/Overlay/Overlay";
function Header() {
  const [isShowForm, setIsShowForm] = useState(false);

  const handleSubmit = (event: FormEvent) => {};
  const closeForm = (event: MouseEvent) => {
    setIsShowForm(false);
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
          <Form onSubmit={handleSubmit} />
        </Overlay>
      )}
    </header>
  );
}

export default Header;
