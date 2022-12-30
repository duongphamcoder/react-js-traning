import { GlobalContext } from "context/Global/globalContext";
import { useContext } from "react";

function useStore() {
  const [state, dispatch] = useContext(GlobalContext);
  return [state, dispatch];
}

export default useStore;
