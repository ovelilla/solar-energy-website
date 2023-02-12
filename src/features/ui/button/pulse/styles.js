import styled from "@emotion/styled";
import { white } from "@shared/styles/colors";
import { breakpoints, media } from "@shared/styles/sizes";

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1 0 auto;
    gap: 8px;
    position: relative;
    height: 48px;
    width: ${(p) => (p.width ? `${p.width}px` : "auto")};
    padding: ${(p) => {
        if (p.count > 1 && !p.loading) {
            return "0 16px 0 24px";
        } else {
            return "0 16px";
        }
    }};
    background-color: #28365e;
    font-weight: 500;
    letter-spacing: -0.8px;
    color: ${white};
    border: 2px solid #28365e;
    border-radius: 48px;

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

    ${media(breakpoints.sm)} {
        flex-grow: 0;
    }

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-shadow: 0 0 0 rgb(0 0 0 / 0%);
        border-radius: 48px;
        animation: ${(p) =>
            p.loading ? "none" : "pulse 4s cubic-bezier(0.66, 0, 0, 1) 2s infinite"};
    }

    svg {
        width: 32px;
        height: 32px;
    }

    @keyframes pulse {
        0% {
            box-shadow: 0 0 0 0 rgb(0 0 0 / 0.5);
        }

        30% {
            box-shadow: 0 0 0 20px rgb(0 0 0 / 0);
        }

        100% {
            box-shadow: 0 0 0 20px rgb(0 0 0 / 0);
        }
    }
`;
