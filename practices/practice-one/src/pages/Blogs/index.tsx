import Blogs from "components/Blogs";
import NewBlog from "components/NewBlog";
import { blogs, data } from "databases/sample-data";
import DefaultLayout from "layouts/DefaultLayout";

const BlogsPage = () => {
  return (
    <DefaultLayout>
      <NewBlog data={data} />
      <Blogs data={blogs} />
    </DefaultLayout>
  );
};

export default BlogsPage;
