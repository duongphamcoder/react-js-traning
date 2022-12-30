import { createContext, useReducer } from "react";
import { CardProps } from "components/Card/Card";
import { ActionParam } from "./reducer";

export type StateParam = {
  uid: string;
  blog: {
    image: string;
    title: string;
    category: string;
  };
  blogs: CardProps[];
  loading: boolean;
};

export const initState: StateParam = {
  uid: "",
  blog: {
    image: "",
    title: "",
    category: "",
  },
  blogs: [],
  loading: false,
};

const defaultDispath = (action: ActionParam) => { };

export const AppContext = createContext<ReturnType<typeof useReducer>>([
  initState,
  defaultDispath,
]);
