import { Link } from "react-router-dom";
import cinndy from "assets/images/Cinndy.jpg";
import cector from "assets/icons/Vector.svg";
import Heading from "components/Heading/Heading";
import Button from "components/Button/Button";
import Paragraph from "components/Paragraph/Paragraph";
import Input from "components/Input/Input";
function Header() {
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
          <Button variant="primary" title="New blog" size="md" />
        </section>
      </section>
      <section className="header-filter">
        <nav className="header-navigation">
          <Button tag="a" title="All topic" path="/" />
          <Button tag="a" title="HTML/CSS" path="html-css" />
          <Button tag="a" title="JavaScript" path="javascript" />
          <Button tag="a" title="NodeJS" path="nodejs" />
          <Button tag="a" title="AI" path="ai" />
          <Button tag="a" title="ReactJS" path="reactjs" />
          <Button tag="a" title="VueJS" path="vuejs" />
        </nav>
        <section className="header-filter-search">
          <Input type="text" name="filter" placeholder="Give me a keyword..." />
        </section>
      </section>
    </header>
  );
}

export default Header;
