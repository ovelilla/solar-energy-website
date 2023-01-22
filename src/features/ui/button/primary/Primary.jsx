import { Children } from "react";
import { Button } from "./styles";

const Pulse = ({ type = "button", ariaLabel = "", disabled = false, onClick, children }) => {
    const count = Children.count(children);

    return (
        <Button
            count={count}
            type={type}
            aria-label={ariaLabel}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </Button>
    );
};

export default Pulse;
