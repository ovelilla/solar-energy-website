import styled from "@emotion/styled";
import { white, slate } from "@shared/styles/colors";
import { shadows } from "@shared/styles/shadows";
import { breakpoints, media } from "@shared/styles/sizes";

export const FooterStyled = styled.footer`
    display: flex;
    justify-content: center;
    z-index: 600;
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    background-color: ${white};
    border-top: 1px solid ${slate[100]};
    transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
`;

export const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 56px;
    width: 100%;
    max-width: ${breakpoints.xl}px;
    height: 72px;
    padding: 0 16px;

    ${media(breakpoints.sm)} {
        height: 80px;
        padding: 0 24px;
    }

    ${media(breakpoints.md)} {
        height: 88px;
        padding: 0 32px;
    }

    ${media(breakpoints.lg)} {
        height: 96px;
    }

    ${media(breakpoints.xl)} {
        height: 104px;
    }
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    position: relative;
    height: 48px;
    padding: 0 16px 0 24px;
    background-color: #28365e;
    font-weight: 500;
    color: ${white};
    letter-spacing: -0.8px;
    border-radius: 48px;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-shadow: 0 0 0 rgb(0 0 0 / 0%);
        border-radius: 48px;
        animation: pulse 4s cubic-bezier(0.66, 0, 0, 1) 2s infinite;
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
