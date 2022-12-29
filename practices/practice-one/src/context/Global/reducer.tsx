import { StateParam } from "./initState";
import { ContextAction } from "constants/contextAction";
import { CardProps } from "components/Card/Card";

export type BlogPayload = {
  image: string;
  title: string;
  category: string;
};

export type ActionParam = {
  type: string;
  payload: BlogPayload | string | boolean | CardProps;
};

export type ReducerProps = (state: StateParam, action: ActionParam) => StateParam;

// Add to late
const reducer: ReducerProps = (state: StateParam, action: ActionParam) => {
  switch (action.type) {
    case ContextAction.SET_BLOG: {
      return {
        ...state,
        blog: action.payload as BlogPayload,
      };
    }
    case ContextAction.SET_USER: {
      return state;
    }
    case ContextAction.SET_LOADING: {
      return {
        ...state,
        loading: action.payload as boolean,
      };
    }
    case ContextAction.ADD_BLOG: {
      return {
        ...state,
        blogs: [...state.blogs, action.payload as CardProps],
      };
    }
    default:
  }
  return state;
};

export default reducer;
