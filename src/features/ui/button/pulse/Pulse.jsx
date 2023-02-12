import { Children, useState, useRef, useEffect } from "react";
import { Button } from "./styles";
import Spinner from "@features/ui/spinner";

const Pulse = ({
    type = "button",
    ariaLabel = "",
    disabled = false,
    loading = false,
    onClick,
    children,
}) => {
    const [width, setWidth] = useState(0);

    const count = Children.count(children);
    const buttonRef = useRef();

    const handleButtonWidth = () => {
        const rect = buttonRef.current.getBoundingClientRect();
        setWidth(rect.width);
    };

    useEffect(() => {
        handleButtonWidth();
    }, []);

    return (
        <Button
            ref={buttonRef}
            count={count}
            type={type}
            aria-label={ariaLabel}
            disabled={disabled || loading}
            onClick={onClick}
            width={width}
            loading={loading ? 1 : 0}
        >
            {loading ? <Spinner color="#fff" width="2" /> : children}
        </Button>
    );
};

export default Pulse;
