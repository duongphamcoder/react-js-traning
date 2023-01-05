import { useState, useRef, ChangeEvent, MouseEvent, FormEvent } from 'react';
import { deleteDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import { firestore } from 'databases/firebase-config';
import { Collection } from 'constants/firebase';
import Grid from 'components/Grid';
import Card, { CardProps } from 'components/Card/Card';
import './blogs.css';
import Overlay from 'components/Overlay';
import Form from 'components/Form';
import { BlogPayload } from 'contexts/App/reducer';
import useStore from 'hooks/useStore';
import Loading from 'components/Loading';
import { setLoading } from 'reduxs/actions';
import { cloudinaryUpload } from 'services';
import { Message, showNotification } from 'helpers/notification';
import useNotification from 'hooks/useNotification';
import { show } from 'reduxs/notificationAction';
import { clearMessage, showMessage, validation } from 'helpers';
import { NotificationMessage } from 'constants/notification';

type BlogsProps = {
    data: CardProps[];
};

const Blogs = (props: BlogsProps) => {
    const defaultDataForm = {
        title: '',
        category: '',
        image: '',
    };
    const [blogId, setBlogId] = useState('');
    const [isShowForm, setIsShowForm] = useState(false);
    const [dataForm, setDataForm] = useState<BlogPayload>(defaultDataForm);
    const [state, dispatch] = useStore();
    const [notify, dispatchNotify] = useNotification();
    const image = useRef<File>(new File([], ''));
    const { data } = props;
    const { loading } = state;

    const handleDeleteBlog = async (blog_id: string) => {
        const value = confirm('Are you sure, you want to delete');
        if (value) {
            await deleteDoc(doc(firestore, Collection.BLOG, blog_id));
        }
    };

    const closeForm = () => {
        setBlogId('');
        setDataForm(defaultDataForm);
        setIsShowForm(false);
    };

    const openForm = async (blog_id: string) => {
        const blog = data.find((data) => data.id === blog_id);
        const dataTemp = {
            title: blog?.title,
            image: blog?.image,
            category: blog?.category,
        };
        setDataForm(dataTemp as BlogPayload);
        setBlogId(blog_id);
        setIsShowForm(true);
    };

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        try {
            const fileName = image.current.name;
            let payload = {
                ...dataForm,
            };
            const { dataFields, error } = validation(payload);
            clearMessage();
            if (error) {
                showMessage(dataFields);
                return;
            }
            dispatch(setLoading(true));
            if (fileName) {
                const { data } = await cloudinaryUpload(image.current);
                payload = {
                    ...payload,
                    image: data.url as string,
                };
            }
            await updateDoc(doc(firestore, Collection.BLOG, blogId), {
                ...payload,
                createdAt: Date.now(),
            });
            dispatch(setLoading(false));
            dispatchNotify(
                show({
                    message: NotificationMessage.UPDATE_BLOG_SUCCESS,
                    variant: 'success',
                })
            );
            closeForm();
        } catch (error) {
            showNotification(error as Message, (message) => {
                dispatchNotify(
                    show({
                        message,
                        variant: 'error',
                    })
                );
            });
        }
    };

    const handleSetValueBlog = (event: ChangeEvent) => {
        type InputType = HTMLInputElement | HTMLSelectElement;
        const element: InputType = event.target as InputType;
        const key: string = element.name;
        let value: string = element.value;
        if (element.type === 'file') {
            const fileElement: HTMLInputElement = element as HTMLInputElement;
            const file = fileElement.files
                ? fileElement.files[0]
                : new File([], 'default.jpg');
            value = URL.createObjectURL(file);
            image.current = file;
        }
        setDataForm((prev) => {
            return {
                ...prev,
                [key]: value,
            };
        });
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
                        onEdit={(event: MouseEvent) => {
                            event.preventDefault();
                            openForm(blog.id);
                        }}
                    />
                ))}
            </Grid>
            {isShowForm && (
                <Overlay onClick={closeForm}>
                    <Form
                        data={dataForm}
                        onSubmit={handleSubmit}
                        onChange={handleSetValueBlog}
                    />
                </Overlay>
            )}
            {loading && <Loading />}
        </section>
    );
};

export default Blogs;
