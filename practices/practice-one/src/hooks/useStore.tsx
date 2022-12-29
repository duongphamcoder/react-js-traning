import { GlobalContext } from "context/Global/globalContext";
import { useContext } from "react";

function useStore() {
  const [state, dispath] = useContext(GlobalContext);
  return [state, dispath];
}

export default useStore;
