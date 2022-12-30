import Header from "components/Header";
import { ReactNode } from "react";
import "./default-layout.css";

type DefaultLayoutProps = {
  children?: ReactNode;
};

const DefaultLayout = (props: DefaultLayoutProps) => {
  return (
    <>
      <Header />
      <main>
        <section className="container">{props.children}</section>
      </main>
    </>
  );
};

export default DefaultLayout;
