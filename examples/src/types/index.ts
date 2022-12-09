import { ChangeEvent, MouseEvent, ReactNode, FormEvent } from "react";

export interface Children {
    children?: ReactNode;
};

export interface THeading extends Children {
    [rest: string]: string | ReactNode;
    title?: string;
    tagName?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
}

export interface PropButton extends Children {
    variant?: 'primary' | 'secondary';
    type?: 'button' | 'submit' | 'reset';
    disable?: boolean;
    onClick?: (event: MouseEvent) => void;
}

export interface TExampleItem extends Children {
}

export interface TLists extends Children {
    list: string[] | number[];
    tagName?: 'ul' | 'ol';
    type?: '1' | 'a' | 'A' | 'i';
}

export interface TListItem extends Children {
}

export interface TForm extends Children {
    onSubmit?: (event: FormEvent) => void
}

export interface TInput {
    type: 'text' | 'checkbox' | 'file' | 'radio' | 'button' | 'email' | 'password' | 'submit';
    value: string | number;
    name: string;
    onChange?: (event: ChangeEvent) => void;
}
