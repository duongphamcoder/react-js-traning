import { createContext, useReducer } from "react";
import { StateParam, initState } from "./initState";
import { ActionParam } from "./reducer";

const defaultDispath = (action: ActionParam) => {};

export const GlobalContext = createContext<ReturnType<typeof useReducer>>([
  initState,
  defaultDispath,
]);
