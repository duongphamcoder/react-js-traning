import Blogs from "components/Blogs/Blogs";
import { CardProps } from "components/Card/Card";
import NewBlog from "components/NewBlog/NewBlog";
import { blogs, data } from "constants/sample-data";
import DefaultLayout from "layouts/DefaultLayout/DefaultLayout";

function BlogsPage() {
  return (
    <DefaultLayout>
      <NewBlog data={data} />
      <Blogs data={blogs} />
    </DefaultLayout>
  );
}

export default BlogsPage;
