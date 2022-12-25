import { ReactNode, FormEvent } from "react";
type FormProps = {
  children?: ReactNode;
  action?: string;
  method?: "GET" | "POST";
  onSubmit: (event: FormEvent) => void;
};

function Form(props: FormProps) {
  const { children, ...rest } = props;
  return <form {...rest}>{children}</form>;
}

export default Form;
