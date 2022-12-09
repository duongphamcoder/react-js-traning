import { ChangeEvent, useState } from 'react';
import { TForm } from 'types';
import Input from './Input';
const NameForm: React.FC<TForm> = (props) => {
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent) => {
    const value = (event.target as HTMLInputElement).value;
    setValue(value);
  };

  return (
    <form action="" {...props}>
      <Input
        name="username"
        value={value}
        type="text"
        onChange={handleChange}
      />
      <Input name="submit" value={'Submit'} type="submit" />
    </form>
  );
};

export default NameForm;
