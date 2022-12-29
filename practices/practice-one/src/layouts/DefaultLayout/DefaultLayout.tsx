import { CardProps } from "components/Card/Card";
import Header from "components/Header/Header";
import NewBlog from "components/NewBlog/NewBlog";
import Blogs from "components/Blogs/Blogs";
import { ReactNode, useContext } from "react";
import { useParams } from "react-router-dom";
import "./default-layout.css";

type DefaultLayoutProps = {
  children?: ReactNode;
};

function DefaultLayout(props: DefaultLayoutProps) {
  return (
    <>
      <Header />
      <main>
        <section className="container">{props.children}</section>
      </main>
    </>
  );
}

export default DefaultLayout;
