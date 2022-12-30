import { StateParam } from "./initState";

export type ActionParam = {
  type: string;
  payload: {
    key: string;
    value: string;
  };
};

export type ReducerProps = (state: StateParam, action: ActionParam) => StateParam;

// Add to late
const reducer: ReducerProps = (state: StateParam, action: ActionParam) => {
  switch (action.type) {
    default:
  }
  return state;
};

export default reducer;
