import styled from "@emotion/styled";
import { slate } from "@shared/styles/colors";

const IconButton = ({
    type = "button",
    ariaLabel = "",
    disabled = false,
    size = "md",
    onClick,
    children,
}) => {
    const sizes = {
        xs: 36,
        sm: 42,
        md: 48,
        lg: 54,
    };

    const IconButtonStyled = styled.button`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        width: ${sizes[size]}px;
        height: ${sizes[size]}px;
        color: ${slate[700]};
        border-radius: 50%;
        transition: background-color 0.2s ease;

        &:hover {
            background-color: ${slate[100]};
        }

        &:active {
            background-color: ${slate[200]};
        }

        &:disabled {
            background-color: transparent;
            opacity: 0.5;
            cursor: default;
        }

        svg {
            width: 24px;
            height: 24px;
        }
    `;

    return (
        <IconButtonStyled
            type={type}
            aria-label={ariaLabel}
            disabled={disabled}
            onClick={(e) => {
                e.stopPropagation();
                onClick();
            }}
            onMouseDown={(e) => {
                e.stopPropagation();
            }}
            onTouchStart={(e) => {
                e.stopPropagation();
            }}
        >
            {children}
        </IconButtonStyled>
    );
};

export default IconButton;
