
type ValidationProps = {
    [key: string]: string
}

type RegexProps = {
    [key: string]: {
        check: RegExp
        message: string
    }
}

type ValidateReturn = {
    dataFields: ValidationProps,
    error: boolean
}

/**
 * - Used to check the values ​​according to the condition.
 * @param object Contains keys as fields to be checked, values ​​as data to be checked
 * @param regex Contains regular expressions, with the key being the corresponding data field to be checked
   the value will contain the regular expression and the message when there is an error
 * @returns 
 */
const validation = (object: ValidationProps, regex?: RegexProps): ValidateReturn => {
    let dataFields = {}
    let error = false
    Object.entries(object).forEach(([key, value]) => {
        if (value && regex) {
            const matches = value.match(regex[key].check)
            if (!matches) {
                dataFields = {
                    ...dataFields,
                    [key]: regex[key].message
                }
                error = true
            }
        }
        else if (!value) {
            error = true
            dataFields = {
                ...dataFields,
                [key]: "Enter this field..."
            }
        }
    })
    return {
        dataFields,
        error
    }
}


export default validation
