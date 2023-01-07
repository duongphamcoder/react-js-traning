import { ChangeEvent } from 'react';

type SelectProps = {
    name: string;
    data: string[];
    value?: string;
    onChange: (event: ChangeEvent) => void;
};

const Select = (props: SelectProps) => {
    const { data, value = '', ...rest } = props;

    return (
        <select value={value} {...rest} className="select-option">
            {data.map((item, index) => {
                return (
                    <option value={item} key={index}>
                        {item}
                    </option>
                );
            })}
        </select>
    );
};

export default Select;
