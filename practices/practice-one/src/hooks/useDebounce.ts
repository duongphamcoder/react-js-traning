import { useRef, ChangeEvent } from 'react';

type DebounceProps = (value: string) => void;

/**
 * - This is a custom hook that listens for user input
 * @param callback 
 * @returns 
 */
const useDebounce = (callback: DebounceProps) => {
    const refTime = useRef<ReturnType<typeof setTimeout>>();
    const debounce = (event: ChangeEvent) => {
        const element = event.target as HTMLInputElement;
        const value = element.value;
        if (refTime.current) clearTimeout(refTime.current);
        refTime.current = setTimeout(() => {
            callback(value);
        }, 600);
    };
    return debounce;
};

export default useDebounce;
