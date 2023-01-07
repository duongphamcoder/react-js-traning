import { ContextAction } from 'constants/contextAction';
import { BlogPayload } from 'contexts/App/reducer';
import { FormAction } from 'contexts/Form/reducer';

export const addBlog = (param: BlogPayload, id: string): FormAction => {
    return {
        type: ContextAction.SHOW_FORM,
        payload: {
            data: param,
            id,
            isShow: true,
            status: true
        }
    };
};

export const updateBlog = (param: BlogPayload, id: string): FormAction => {
    return {
        type: ContextAction.UPDATE_BLOG,
        payload: {
            data: param,
            id,
            isShow: true,
            status: false
        }
    };
};

export const hideForm = (): FormAction => {
    return {
        type: ContextAction.HIDE_FORM,
        payload: {
            data: {
                title: '',
                image: '',
                category: ''
            },
            id: '',
            isShow: false,
            status: true
        },
    };
};
