import { ReactNode, useReducer } from "react";
import { GlobalContext } from "./globalContext";
import initState from "./initState";
import reducer from "./reducer";

type GlobalProviderProps = {
  children?: ReactNode;
};

function GlobalProvider(props: GlobalProviderProps) {
  const [state, dispatch] = useReducer(reducer, initState);

  const { children } = props;
  return <GlobalContext.Provider value={[state, dispatch]}>{children}</GlobalContext.Provider>;
}

export default GlobalProvider;
