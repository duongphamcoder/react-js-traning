/* eslint-disable no-irregular-whitespace */
type ValidationProps = {
    [key: string]: string
};

type RegexProps = {
    [key: string]: {
        check: RegExp
        message: string
    }
};

type ValidateReturn = {
    dataFields: ValidationProps,
    error: boolean
};

/**
 * - Used to check the values ​according to the condition.
 // eslint-disable-next-line no-irregular-whitespace
 * @param object Contains keys as fields to be checked, values ​as data to be checked
 * @param regex Contains regular expressions, with the key being the corresponding data field to be checked
   the value will contain the regular expression and the message when there is an error
 * @returns 
 */
export const validation = (object: ValidationProps, regex?: RegexProps): ValidateReturn => {
    let dataFields = {};
    let error = false;
    Object.entries(object).forEach(([key, value]) => {
        const newValue = value.trim();
        if (newValue && regex) {
            const matches = newValue.match(regex[key].check);
            if (!matches) {
                dataFields = {
                    ...dataFields,
                    [key]: regex[key].message
                };
                error = true;
            }
        }
        else if (!newValue) {
            error = true;
            dataFields = {
                ...dataFields,
                [key]: 'Enter this field...',
            };
        }
    });
    return {
        dataFields,
        error
    };
};

/**
 * - Display an error message when the user enters it incorrectly
 * @param object 
 */
export const showMessage = (object: ValidationProps) => {
    Object.entries(object).forEach(([key, value]) => {
        const formItem: HTMLDivElement = document.querySelector(
            `[name=${key}]`
        )?.parentElement as HTMLDivElement;
        formItem?.classList.add('error');
        formItem.setAttribute('data-error', value);
    });
};

/**
 * - Remove error messages after user has updated
 */
export const clearMessage = () => {
    const errors = document.querySelectorAll('.form-item.error');
    errors.forEach(el => el.classList.remove('error'));
};
