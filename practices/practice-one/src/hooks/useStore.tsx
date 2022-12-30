import { AppContext } from "contexts/App/appContext";
import { useContext } from "react";

const useStore = () => {
  const [state, dispatch] = useContext(AppContext);
  return [state, dispatch];
};

export default useStore;
