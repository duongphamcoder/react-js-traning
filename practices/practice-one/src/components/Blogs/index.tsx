import "./blogs.css";

import Card, { CardProps } from "components/Card/Card";
import Grid from "components/Grid";

type BlogsProps = {
  data: CardProps[];
};

const Blogs = (props: BlogsProps) => {
  const { data } = props;

  return (
    <section className="list-blog">
      <Grid col={4}>
        {data.map((blog, index) => (
          <Card {...blog} key={blog.id} />
        ))}
      </Grid>
    </section>
  );
};

export default Blogs;
