import { ContextAction } from 'constants/contextAction';
import { DefaultState } from './formContext';

type FormReducer = (state: DefaultState, action: FormAction) => DefaultState;

export type FormAction = {
    type: string,
    payload: DefaultState
}

// Add to late
const reducer: FormReducer = (state: DefaultState, action: FormAction): DefaultState => {
    switch (action.type) {
        case ContextAction.SHOW_FORM: {
            return {
                ...(action.payload as DefaultState)
            };
        }
        case ContextAction.HIDE_FORM: {
            return {
                ...(action.payload as DefaultState)
            };
        }
        case ContextAction.UPDATE_BLOG: {
            return {
                ...(action.payload as DefaultState)
            };
        }
        default:
            return state;

    }
};

export default reducer;
