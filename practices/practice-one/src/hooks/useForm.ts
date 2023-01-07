import FormContext from 'contexts/Form/formContext';
import { useContext, createContext } from 'react';

const useForm = () => {
    const [state, dispatch] = useContext(FormContext);

    return [state, dispatch];
};

export default useForm;
