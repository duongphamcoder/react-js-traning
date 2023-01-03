import { MouseEvent } from 'react';
import { deleteDoc, doc } from 'firebase/firestore';
import { firestore } from 'databases/firebase-config';
import { Collection } from 'constants/firebase';
import Grid from 'components/Grid';
import Card, { CardProps } from 'components/Card/Card';
import './blogs.css';

type BlogsProps = {
    data: CardProps[];
};

const Blogs = (props: BlogsProps) => {
    const { data } = props;

    const handleDeleteBlog = async (blog_id: string) => {
        const value = confirm('Are you sure, you want to delete');
        if (value) {
            await deleteDoc(doc(firestore, Collection.BLOG, blog_id));
        }
    };

    return (
        <section className="list-blog">
            <Grid col={4}>
                {data.map((blog, index) => (
                    <Card
                        {...blog}
                        key={blog.id}
                        onDelete={(event: MouseEvent) => {
                            event.preventDefault();
                            handleDeleteBlog(blog.id);
                        }}
                    />
                ))}
            </Grid>
        </section>
    );
};

export default Blogs;
