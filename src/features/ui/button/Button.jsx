import styled from "@emotion/styled";

const Button = ({ type = "button", ariaLabel = "", disabled = false, size="md", onClick, children }) => {
    const height = {
        xs: 36,
        sm: 42,
        md: 48,
        lg: 54,
    };

    const ButtonStyled = styled.button`
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;
        height: ${height[size]}px;
        min-height: ${height[size]}px;
        padding: 0 32px;
        font-weight: 600;
        background-color: #28365e;
        color: #ffffff;
        border-width: 2px;
        border-style: solid;
        border-color: #28365e;
        border-radius: ${height[size]}px;
        transition: background-color, color, border, 0.2s ease;
        cursor: pointer;

        &:hover {
            background-color: #1e2946;
            color: #ffffff;
            border-color: #1e2946;
        }

        &:active {
            background-color: #1e2946;
            color: #ffffff;
            border-color: #1e2946;
        }

        &:disabled {
            background-color: #1e2946;
            color: #ffffff;
            border-color: #1e2946;
            cursor: default;
        }
    `;

    return (
        <ButtonStyled type={type} aria-label={ariaLabel} disabled={disabled} onClick={onClick}>
            {children}
        </ButtonStyled>
    );
};

export default Button;
