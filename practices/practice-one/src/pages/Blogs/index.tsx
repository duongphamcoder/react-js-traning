import Blogs from 'components/Blogs';
import { CardProps } from 'components/Card/Card';
import EmptyData from 'components/EmptyData';
import NewBlog from 'components/NewBlog';
import { Collection } from 'constants/firebase';
import { firestore } from 'databases/firebase-config';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
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

    /**
     * - Do get data from firebase
     * - And will make the callback when user login
     */
    useEffect(() => {
        dispatch(setLoading(true));
        const q = query(
            collection(firestore, Collection.BLOG),
            orderBy('createdAt', 'desc')
        );
        const unsub = onSnapshot(q, (doc) => {
            let firstBlog: CardProps = {} as CardProps;
            const docs = doc.docs.map((item, index) => {
                const id = item.id;
                const { title, category, image, uid, createdAt } = item.data();
                const { date, time } = convertDate(createdAt);
                const cardItem: CardProps = {
                    id,
                    title,
                    category,
                    image,
                    isUser: uid === state.uid,
                    path: `?category=${category}&blog_id=${id}`,
                    timeStamp: date,
                };
                if (index === 0) {
                    firstBlog = {
                        ...cardItem,
                        category: '',
                        timeStamp: `${time} - ${date}`,
                    };
                }
                return cardItem;
            });
            setFeature(firstBlog);
            dispatch(setBlogs(docs));
            dispatch(setLoading(false));
        });

        return unsub;
    }, [state.uid]);

    /**
     * - Filter blogs by param
     */
    useEffect(() => {
        let category: string = searchParams.get('category')?.trim() as string;
        category = category ? category.trim() : '';
        let title: string = searchParams.get('title')?.trim() as string;
        title = title ? title.trim() : '';
        let newBlogs: CardProps[] = blogs;
        newBlogs = newBlogs.filter((blog) => {
            return (
                blog.category?.includes(category) && blog.title?.includes(title)
            );
        });
        setDataBlogs(newBlogs);
    }, [searchParams, blogs]);

    return (
        <DefaultLayout>
            {feature && <NewBlog data={feature as CardProps} />}
            {dataBlogs.length ? <Blogs data={dataBlogs} /> : <EmptyData />}
        </DefaultLayout>
    );
};

export default BlogsPage;
