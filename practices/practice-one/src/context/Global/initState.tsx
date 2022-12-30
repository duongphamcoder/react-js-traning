export type StateParam = {
  uid: string;
  blog: {
    image: string;
    name: string;
    category: string;
  };
};

export const initState: StateParam = {
  uid: "",
  blog: {
    image: "",
    name: "",
    category: "",
  },
};

export default initState;
