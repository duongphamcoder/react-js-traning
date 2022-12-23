import "./blogs.css";

import Card, { CardProps } from "components/Card/Card";
import Grid from "components/Grid/Grid";

type BlogsProps = {
  data: CardProps[];
};

function Blogs(props: BlogsProps) {
  const { data } = props;
  return (
    <section className="list-blog">
      <Grid col={4}>
        {data.map((blog, index) => (
          <section>
            <Card {...blog} key={index} />
          </section>
        ))}
      </Grid>
    </section>
  );
}

export default Blogs;
