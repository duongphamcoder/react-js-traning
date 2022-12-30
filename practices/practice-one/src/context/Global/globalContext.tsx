import { createContext, useReducer } from "react";

export const GlobalContext = createContext<ReturnType<typeof useReducer> | []>([]);
