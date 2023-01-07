import { useState, useRef, ChangeEvent, FormEvent, MouseEvent } from 'react';
import useStore from 'hooks/useStore';
import useNotification from 'hooks/useNotification';
import { firestore } from 'databases/firebase-config';
import { Collection } from 'constants/firebase';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { show } from 'reduxs/notificationAction';
import { NotificationMessage } from 'constants/notification';
import { Message, showNotification } from 'helpers/notification';
import {
    clearMessage,
    handleChangeValueForm,
    showMessage,
    validation,
} from 'helpers';
import { setLoading } from 'reduxs/actions';
import { cloudinaryUpload } from 'services';
import './new-blog.css';
import { CardProps } from 'components/Card/Card';
import { BlogPayload } from 'contexts/App/reducer';
import Overlay from 'components/Overlay';
import Card from 'components/Card/Card';
import Form from 'components/Form';
import useForm from 'hooks/useForm';

type NewBlogProps = {
    data: CardProps;
};

const NewBlog = (props: NewBlogProps) => {
    const defaultDataForm = {
        title: '',
        category: '',
        image: '',
    };
    const { data } = props;
    const [blogId, setBlogId] = useState('');
    const [isShowForm, setIsShowForm] = useState(false);
    const [dataForm, setDataForm] = useState<BlogPayload>(defaultDataForm);
    const [state, dispatch] = useStore();
    const [notify, dispatchNotify] = useNotification();
    const image = useRef<File>(new File([], ''));
    const { blogs } = state;

    /**
     * - Process of deleting blogs
     * @param blog_id id of blog to delete
     */
    const handleDeleteBlog = async (blog_id: string) => {
        const value = confirm('Are you sure, you want to delete');
        try {
            if (value) {
                await deleteDoc(doc(firestore, Collection.BLOG, blog_id));
                dispatchNotify(
                    show({
                        message: NotificationMessage.DELETE_BLOG_SUCCESS,
                        variant: 'success',
                    })
                );
            }
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

    const closeForm = () => {
        setBlogId('');
        setDataForm(defaultDataForm);
        setIsShowForm(false);
    };

    const openForm = async (blog_id: string) => {
        const blog = (blogs as CardProps[]).find((b) => b.id === blog_id);
        const dataTemp = {
            title: blog?.title,
            image: blog?.image,
            category: blog?.category,
        };
        setDataForm(dataTemp as BlogPayload);
        setBlogId(blog_id);
        setIsShowForm(true);
    };

    /**
     * - Handle update form submission
     * @param event FormEvent
     * @returns
     */
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

    /**
     * - Handling data changes in forms
     * @param event ChangeEvent
     */
    const handleSetValueBlog = (event: ChangeEvent) => {
        handleChangeValueForm(event, image, (key, value) => {
            setDataForm((prev) => {
                return {
                    ...prev,
                    [key]: value,
                };
            });
        });
    };

    return (
        <section className="new-blog">
            <Card
                {...props.data}
                onDelete={(event: MouseEvent) => {
                    event.preventDefault();
                    handleDeleteBlog(data.id);
                }}
                onEdit={(event: MouseEvent) => {
                    event.preventDefault();
                    openForm(data.id);
                }}
            />
            {isShowForm && (
                <Overlay onClick={closeForm}>
                    <Form
                        data={dataForm}
                        onSubmit={handleSubmit}
                        onChange={handleSetValueBlog}
                    />
                </Overlay>
            )}
        </section>
    );
};

export default NewBlog;
