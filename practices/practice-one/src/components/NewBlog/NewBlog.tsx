import Card from "components/Card/Card";
import "./new-blog.css";
import { CardProps } from "components/Card/Card";

type NewBlogProps = {
  data: CardProps;
};
function NewBlog(props: NewBlogProps) {
  return (
    <section className="new-blog">
      <Card
        path=""
        image="https://www.datocms-assets.com/48401/1627664298-javascript.png?fit=max&w=900"
        timeStamp="8:31 PM • September 21, 2022"
        title="A ‘Stripe for phone plans’: Gigs raises $20M to help any company be an MVNO"
        isUser
      />
    </section>
  );
}

export default NewBlog;
