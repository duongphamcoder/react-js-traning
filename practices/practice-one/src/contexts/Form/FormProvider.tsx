import { ReactNode, useReducer } from 'react';
import FormContext, { initState } from './formContext';
import reducer from './reducer';
type FormProviderProps = {
    children?: ReactNode;
};

const FormProvider = (props: FormProviderProps) => {
    const [state, dispatch] = useReducer(reducer, initState);
    const { children } = props;

    return (
        <FormContext.Provider value={[state, dispatch]}>
            {children}
        </FormContext.Provider>
    );
};

export default FormProvider;
