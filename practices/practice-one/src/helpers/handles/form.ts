import { ChangeEvent, useRef } from 'react';

type RefFile = ReturnType<typeof useRef<File>>;
type CallbackChange = (key: string, value: string) => void;
type InputType = HTMLInputElement | HTMLSelectElement;

/**
 * - Handling data changes in forms
 * @param event ChangeEvent
 * @param refFile RefFile
 * @param callback CallbackChange
 */
export const handleChangeValueForm = (event: ChangeEvent, refFile: RefFile, callback: CallbackChange) => {
    const element: InputType = event.target as InputType;
    const key: string = element.name.trim();
    let value: string = element.value;
    if (element.type === 'file') {
        const fileElement: HTMLInputElement = element as HTMLInputElement;
        const file = fileElement.files
            ? fileElement.files[0]
            : new File([], 'default.jpg');
        value = URL.createObjectURL(file);
        refFile.current = file;
    }
    callback(key, value);
};
