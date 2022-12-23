import Card from "components/Card/Card";
import "./new-blog.css";
import { CardProps } from "components/Card/Card";

type NewBlogProps = {
  data: CardProps;
};
function NewBlog(props: NewBlogProps) {
  return (
    <section className="new-blog">
      <Card {...props.data} />
    </section>
  );
}

export default NewBlog;
