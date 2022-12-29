import { createContext, useReducer } from "react";
import { StateParam } from "./initState";
import { ActionParam } from "./reducer";

const defaultState: StateParam = {
  uid: "",
  blog: {
    image: "",
    category: "",
    title: "",
  },
};

const defaultDispath = (action: ActionParam) => {};

export const GlobalContext = createContext<ReturnType<typeof useReducer>>([
  defaultState,
  defaultDispath,
]);
