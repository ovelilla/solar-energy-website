import { useState, useEffect } from "react";

const useThousandSeparator = (number) => {
    const [thousandSeparator, setThousandSeparator] = useState("");

    useEffect(() => {
        const handleThousandSeparator = () => {
            setThousandSeparator(number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."));
        };

        handleThousandSeparator();
    }, [number]);

    return thousandSeparator;
};

export default useThousandSeparator;
