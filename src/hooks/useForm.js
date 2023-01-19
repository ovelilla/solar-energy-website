import { useState } from "react";

const useForm = (state = {}) => {
    const [values, setValues] = useState(state);
    const [errors, setErrors] = useState(
        Object.keys(state).reduce((acc, key) => ({ ...acc, [key]: "" }), {})
    );

    const handleChange = ({ target }) => {
        const { name, value } = target;

        setValues({ ...values, [name]: value });
        setErrors({ ...errors, [name]: "" });
    };

    const reset = () => {
        setValues(state);
    };

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleChange,
        reset,
    };
};

export default useForm;
