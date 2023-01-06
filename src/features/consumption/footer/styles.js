import styled from "@emotion/styled";
import { white, slate, gray } from "@shared/styles/colors";
import { breakpoints, media, section } from "@shared/styles/sizes";

export const FooterStyled = styled.footer`
    display: flex;
    justify-content: center;
    z-index: 600;
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    ${section}

    ${media(breakpoints.sm)} {
        border-top: 1px solid ${slate[100]};
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 24px 0;
    max-width: ${breakpoints.xl}px;
`;

export const NextButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    /* flex-grow: 1; */
    gap: 8px;
    position: relative;
    height: 48px;
    padding: 0 16px 0 24px;
    background-color: #28365e;
    font-weight: 500;
    color: ${white};
    letter-spacing: -0.8px;
    border-radius: 48px;

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

export const PrevButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    position: relative;
    height: 48px;
    padding: 0 24px 0 16px;
    background-color: transparent;
    font-weight: 500;
    color: ${slate[400]};
    letter-spacing: -0.8px;
    border: 2px solid ${slate[300]};
    border-radius: 48px;

    ${media(breakpoints.sm)} {
        flex-grow: 0;
    }

    svg {
        width: 32px;
        height: 32px;
    }
`;
