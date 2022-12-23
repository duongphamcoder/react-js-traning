import { CardProps } from "components/Card/Card";
import Header from "components/Header/Header";
import NewBlog from "components/NewBlog/NewBlog";
import Blogs from "components/Blogs/Blogs";
import { useParams } from "react-router-dom";
import "./default-layout.css";

// sample data
const data: CardProps = {
  image: "https://www.datocms-assets.com/48401/1627664298-javascript.png?fit=max&w=900",
  path: "/",
  timeStamp: "8:31 PM • September 21, 2022",
  title: "A ‘Stripe for phone plans’: Gigs raises $20M to help any company be an MVNO",
};

const blogs: CardProps[] = [
  {
    image: "https://www.datocms-assets.com/48401/1627664298-javascript.png?fit=max&w=900",
    path: "/",
    timeStamp: "8:31 PM • September 21, 2022",
    title: "A ‘Stripe for phone plans’: Gigs raises $20M to help any company be an MVNO",
    category: "Javascript",
  },
  {
    image: "https://www.datocms-assets.com/48401/1627664298-javascript.png?fit=max&w=900",
    path: "/",
    timeStamp: "8:31 PM • September 21, 2022",
    title: "A ‘Stripe for phone plans’: Gigs raises $20M to help any company be an MVNO",
    category: "Javascript",
    isUser: true,
  },
  {
    image: "https://www.datocms-assets.com/48401/1627664298-javascript.png?fit=max&w=900",
    path: "/",
    timeStamp: "8:31 PM • September 21, 2022",
    title: "A ‘Stripe for phone plans’: Gigs raises $20M to help any company be an MVNO",
    category: "Javascript",
  },
  {
    image: "https://www.datocms-assets.com/48401/1627664298-javascript.png?fit=max&w=900",
    path: "/",
    timeStamp: "8:31 PM • September 21, 2022",
    title: "A ‘Stripe for phone plans’: Gigs raises $20M to help any company be an MVNO",
    category: "Javascript",
  },
];

function DefaultLayout() {
  return (
    <>
      <Header />
      <main>
        <section className="container">
          <NewBlog data={data} />
          <Blogs data={blogs} />
        </section>
      </main>
    </>
  );
}

export default DefaultLayout;
