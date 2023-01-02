import Blogs from 'components/Blogs';
import { CardProps } from 'components/Card/Card';
import EmptyData from 'components/EmptyData';
import NewBlog from 'components/NewBlog';
import Paragraph from 'components/Paragraph';
import { Collection } from 'constants/firebase';
import { firestore } from 'databases/firebase-config';
import { data } from 'databases/sample-data';
import { collection, onSnapshot } from 'firebase/firestore';
import { convertDate } from 'helpers';
import useStore from 'hooks/useStore';
import DefaultLayout from 'layouts/DefaultLayout';
import { useEffect } from 'react';
import { setBlogs, setLoading } from 'reduxs/actions';

const BlogsPage = () => {
    const [state, dispatch] = useStore();
    const { blogs } = state;

    useEffect(() => {
        dispatch(setLoading(true));
        const unsub = onSnapshot(
            collection(firestore, Collection.BLOG),
            (doc) => {
                const docs = doc.docs.map((item) => {
                    const id = item.id;
                    const { title, category, image, uid, createdAt } =
                        item.data();
                    const { date } = convertDate(createdAt);
                    const cardItem: CardProps = {
                        id,
                        title,
                        category,
                        image: `${process.env.REACT_APP_CLOUD_SECURE_URL}/${image}`,
                        isUser: uid === state.uid,
                        path: `?category=${category}&blog_id=${id}`,
                        timeStamp: date,
                    };
                    return cardItem;
                });
                dispatch(setBlogs(docs));
                dispatch(setLoading(false));
            }
        );
        return unsub;
    }, []);

    return (
        <DefaultLayout>
            {blogs.length ? (
                <>
                    <NewBlog data={data} />
                    <Blogs data={blogs} />
                </>
            ) : (
                <EmptyData />
            )}
        </DefaultLayout>
    );
};

export default BlogsPage;
