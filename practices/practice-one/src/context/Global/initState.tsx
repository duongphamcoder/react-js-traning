export type StateParam = {
  uid: string;
  blog: {
    image: string;
    title: string;
    category: string;
  };
};

export const initState: StateParam = {
  uid: "",
  blog: {
    image: "",
    title: "",
    category: "",
  },
};

export default initState;
