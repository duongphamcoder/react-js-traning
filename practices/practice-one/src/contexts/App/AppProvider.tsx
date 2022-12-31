import { ReactNode, useReducer } from 'react';
import { AppContext } from './appContext';
import { initState } from './appContext';
import reducer from './reducer';

type AppProviderProps = {
    children?: ReactNode;
};

const AppProvider = (props: AppProviderProps) => {
    const [state, dispatch] = useReducer(reducer, initState);

    const { children } = props;
    return (
        <AppContext.Provider value={[state, dispatch]}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
