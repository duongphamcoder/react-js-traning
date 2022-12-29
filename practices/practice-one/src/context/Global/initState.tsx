import { CardProps } from "components/Card/Card";

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

export default initState;
