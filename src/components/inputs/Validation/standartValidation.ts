import { requiredField } from "./required";

export const standartValidation = {
    required: requiredField,
    validate: (value: string) => {
        if (value.length <= 128) {
            return true;
        }
        else {
            return 'Too long'
        }
    }
};