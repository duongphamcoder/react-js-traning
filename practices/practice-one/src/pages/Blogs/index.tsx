import Blogs from 'components/Blogs';
import { CardProps } from 'components/Card/Card';
import EmptyData from 'components/EmptyData';
import NewBlog from 'components/NewBlog';
import { Collection } from 'constants/firebase';
import { firestore } from 'databases/firebase-config';
import { data } from 'databases/sample-data';
import {
    collection,
    onSnapshot,
    orderBy,
    query,
    where,
} from 'firebase/firestore';
import { convertDate } from 'helpers';
import useStore from 'hooks/useStore';
import DefaultLayout from 'layouts/DefaultLayout';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { setBlogs, setLoading } from 'reduxs/actions';

const BlogsPage = () => {
    const [state, dispatch] = useStore();
    const { blogs } = state;
    const [searchParams] = useSearchParams();
    const [dataBlogs, setDataBlogs] = useState<CardProps[]>([]);
    const [feature, setFeature] = useState<CardProps>();

    useEffect(() => {
        dispatch(setLoading(true));
        const q = query(
            collection(firestore, Collection.BLOG),
            orderBy('createdAt', 'asc')
        );
        const unsub = onSnapshot(q, (doc) => {
            const docs = doc.docs.map((item) => {
                const id = item.id;
                const { title, category, image, uid, createdAt } = item.data();
                const { date } = convertDate(createdAt);
                const cardItem: CardProps = {
                    id,
                    title,
                    category,
                    image: image,
                    isUser: uid === state.uid,
                    path: `?category=${category}&blog_id=${id}`,
                    timeStamp: date,
                };
                return cardItem;
            });
            if (docs.length) {
                const firstBlog = doc.docs[0];
                const { title, image, category, uid, createdAt } =
                    firstBlog.data();
                const { date, time } = convertDate(createdAt);
                setFeature({
                    id: firstBlog.id,
                    title,
                    image,
                    path: `?category=${category}&blog_id=${firstBlog.id}`,
                    timeStamp: `${time} - ${date}`,
                    isUser: uid === state.uid,
                });
            }

            dispatch(setBlogs(docs));
            dispatch(setLoading(false));
        });
        return unsub;
    }, [state.uid]);

    useEffect(() => {
        const category = searchParams.get('category')?.trim();
        const title = searchParams.get('title')?.trim();
        let newBlogs: CardProps[] = blogs;
        if (category) {
            newBlogs = newBlogs.filter(
                (blog) => blog.category === category && blog.title.includes('')
            );
        }
        if (title) {
            newBlogs = newBlogs.filter((blog) => {
                return blog.title.toLowerCase().includes(title.toLowerCase());
            });
        }
        setDataBlogs(newBlogs);
    }, [searchParams, blogs]);

    return (
        <DefaultLayout>
            {dataBlogs.length ? (
                <>
                    <NewBlog data={feature as CardProps} />
                    <Blogs data={dataBlogs} />
                </>
            ) : (
                <EmptyData />
            )}
        </DefaultLayout>
    );
};

export default BlogsPage;
