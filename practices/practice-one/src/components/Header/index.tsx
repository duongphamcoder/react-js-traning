import { FormEvent, useState, MouseEvent, ChangeEvent, useRef } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import useStore from 'hooks/useStore';
import { navLinks } from 'constants/navLinks';
import { firebaseService, cloudinaryUpload } from 'services';
import { setBlog, setLoading } from 'reduxs/actions';
import {
    getSearchParams,
    validation,
    clearMessage,
    showMessage,
    handleChangeValueForm,
} from 'helpers';
import { Collection } from 'constants/firebase';
import { SearchParams } from 'constants/searchParams';
import useDebounce from 'hooks/useDebounce';
import useNotification from 'hooks/useNotification';
import { show } from 'reduxs/notificationAction';
import { NotificationMessage } from 'constants/notification';
import { Message, showNotification } from 'helpers/notification';
import Overlay from 'components/Overlay';
import Form from 'components/Form';
import Button from 'components/Button';
import Heading from 'components/Heading';
import Paragraph from 'components/Paragraph';
import Input from 'components/Input';
import cinndy from 'assets/images/cinndy.jpg';
import cector from 'assets/icons/vector.svg';
import './header.css';

const Header = () => {
    const [state, dispatch] = useStore();
    const [notify, dispatchNotify] = useNotification();
    const [searchParams, setSearchparams] = useSearchParams();
    const redirect = useNavigate();
    const [isShowForm, setIsShowForm] = useState(false);
    const image = useRef<File>(new File([], ''));
    const { blog, uid } = state;
    const currentCategory = searchParams.get(SearchParams.Category) || '';

    /**
     * - Add a blog
     * @param event Form event
     * @returns
     */
    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        try {
            const { dataFields, error } = validation(blog);
            clearMessage();
            if (error) {
                showMessage(dataFields);
                return;
            }
            dispatch(setLoading(true));
            const { data } = await cloudinaryUpload(image.current);
            const payload = {
                ...blog,
                image: data.url,
                uid: state.uid,
                createdAt: Date.now(),
            };
            await firebaseService(Collection.BLOG).addData(payload);
            dispatchNotify(
                show({
                    message: NotificationMessage.ADD_BLOG_SUCCESS,
                    variant: 'success',
                })
            );
            dispatch(setLoading(false));
            dispatch(
                setBlog({
                    image: '',
                    title: '',
                    category: '',
                })
            );
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
     * - Close the form
     * @param event MouseEvent
     */
    const closeForm = (event: MouseEvent) => {
        setIsShowForm(false);
        dispatch(
            setBlog({
                image: '',
                title: '',
                category: '',
            })
        );
    };

    /**
     * - Handling data changes in forms
     * @param event ChangeEvent
     */
    const handleSetValueBlog = (event: ChangeEvent) => {
        handleChangeValueForm(event, image, (key, value) => {
            dispatch(
                setBlog({
                    ...blog,
                    [key]: value,
                })
            );
        });
    };

    /**
     * - Processing blog search
     */
    const debounce = useDebounce((value) => {
        let search = getSearchParams(searchParams);
        search['title'] = value;
        if (!value) {
            const { title, ...rest } = search;
            search = rest;
        }
        setSearchparams(search);
    });

    return (
        <header className="container">
            <section className="header-logo">
                <Link to="/" className="header-logo-link">
                    <img src={cector} alt="Logo website" />
                    <img src={cinndy} alt="Logo website" />
                </Link>
            </section>
            <section className="header-heading">
                <section className="header-heading-item">
                    <Heading tag="h1" title="Blog" />
                    <Paragraph content="Stay up to date with our portfolio" />
                </section>
                <section className="header-heading-item">
                    <Button
                        variant="primary"
                        title="New blog"
                        size="md"
                        onClick={(event: MouseEvent) => {
                            if (uid) {
                                setIsShowForm(true);
                                return;
                            }
                            redirect('/login');
                        }}
                    />
                </section>
            </section>
            <section className="header-filter">
                <nav className="header-navigation">
                    {navLinks.map(({ title, path }, index) => {
                        const category = path ? `/blog?category=${path}` : '';
                        const active = path.trim() === currentCategory.trim();

                        return (
                            <Button
                                tag="a"
                                title={title}
                                path={category}
                                key={index}
                                active={active}
                            />
                        );
                    })}
                </nav>
                <section className="header-filter-search">
                    <Input
                        type="text"
                        name="filter"
                        placeholder="Give me a keyword..."
                        onChange={debounce}
                    />
                </section>
            </section>
            {isShowForm && (
                <Overlay onClick={closeForm}>
                    <Form
                        data={blog}
                        onSubmit={handleSubmit}
                        onChange={handleSetValueBlog}
                    />
                </Overlay>
            )}
        </header>
    );
};

export default Header;
