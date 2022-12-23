import Blogs from "components/Blogs/Blogs";
import { CardProps } from "components/Card/Card";
import NewBlog from "components/NewBlog/NewBlog";
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

function BlogsPage() {
  return (
    <>
      <NewBlog data={data} />
      <Blogs data={blogs} />
    </>
  );
}

export default BlogsPage;
