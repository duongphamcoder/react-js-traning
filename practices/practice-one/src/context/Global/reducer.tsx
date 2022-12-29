import { StateParam } from "./initState";
import { ContextAction } from "constants/contextAction";

export type BlogPayload = {
  image: string;
  title: string;
  category: string;
};

export type ActionParam = {
  type: string;
  payload: BlogPayload | string;
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
    default:
  }
  return state;
};

export default reducer;
