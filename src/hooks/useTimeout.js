import { useState, useEffect } from "react";

const useTimeout = (ms) => {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsReady(true);
        }, ms);

        return () => clearTimeout(timeout);
    }, [ms]);

    return isReady;
};

export default useTimeout;
