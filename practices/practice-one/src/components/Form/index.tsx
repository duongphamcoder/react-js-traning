import Button from "components/Button";
import Heading from "components/Heading";
import Input from "components/Input";
import { BlogPayload } from "contexts/App/reducer";
import { ReactNode, FormEvent, ChangeEvent, MouseEvent } from "react";
import "./form.css";
type FormProps = {
  data: BlogPayload;
  action?: string;
  method?: "GET" | "POST";
  onChange?: (event: ChangeEvent) => void;
  onSubmit: (event: FormEvent) => void;
};

// this is sample data, will be deleted after merge
const categorys = [
  {
    id: "js",
    name: "Javascript",
  },
  {
    id: "ts",
    name: "TypeScript",
  },
  {
    id: "java",
    name: "Java",
  },
];

const Form = (props: FormProps) => {
  const { data, onChange, ...rest } = props;
  return (
    <form
      {...rest}
      className="form"
      onClick={(event: MouseEvent) => {
        event.stopPropagation();
      }}>
      <div className="form-item">
        <label htmlFor="title">title</label>
        <Input
          name="title"
          type="text"
          id="title"
          value={data.title}
          placeholder="Enter title..."
          onChange={onChange}
        />
      </div>
      <div className="form-item">
        <label htmlFor="category">category</label>
        <select name="category" id="category" value={data.category} onChange={onChange}>
          <option value="">--- Select caregory ---</option>
          {categorys.map(({ id, name }) => (
            <option value={id} key={id}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <div className="form-item">
        <label
          htmlFor="image"
          style={{
            backgroundImage: `url(${data.image})`,
          }}>
          {!data.image && "select image"}
        </label>
        <Input name="image" type="file" id="image" onChange={onChange} hidden />
      </div>
      <div className="form-item">
        <Button type="submit" title="submit" variant="primary" />
      </div>
    </form>
  );
};

export default Form;
