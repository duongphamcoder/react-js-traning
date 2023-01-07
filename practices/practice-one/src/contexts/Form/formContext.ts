import { BlogPayload } from 'contexts/App/reducer';
import { createContext, useReducer } from 'react';

export type DefaultState = {
    isShow: boolean;
    data: BlogPayload;
    id: string;
    status: boolean;
}

export const initState: DefaultState = {
    isShow: false,
    id: '',
    data: {
        image: '',
        title: '',
        category: '',
    },
    status: true
};

const defaultDispath = () => { return; };


const FormContext = createContext<ReturnType<typeof useReducer>>([initState, defaultDispath]);

export default FormContext;
