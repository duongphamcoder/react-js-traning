import Blogs from "components/Blogs/Blogs";
import NewBlog from "components/NewBlog/NewBlog";
import { blogs, data } from "constants/sample-data";
import DefaultLayout from "layouts/DefaultLayout/DefaultLayout";
import { useContext } from "react";
import { GlobalContext } from "context/Global/globalContext";

function BlogsPage() {
  const [state, dispath] = useContext(GlobalContext);
  return (
    <DefaultLayout>
      <NewBlog data={data} />
      <Blogs data={blogs} />
    </DefaultLayout>
  );
}

export default BlogsPage;
