import styled from "@emotion/styled";
import { breakpoints, media } from "@shared/styles/sizes";

export const Loading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 48px;
    padding-bottom: 72px;
`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    ${media(breakpoints.sm)} {
        gap: 24px;
    }

    p {
        display: flex;
        align-items: center;
        gap: 4px;
        font-size: 16px;
        font-weight: 500;
        letter-spacing: -0.4px;
        color: #28365e;
        animation: in 1s ease-in-out backwards;

        ${media(breakpoints.sm)} {
            gap: 8px;
            font-size: 18px;
        }

        &:nth-of-type(1) {
            animation-delay: 0s;
        }

        &:nth-of-type(2) {
            animation-delay: 1s;
        }

        &:nth-of-type(3) {
            animation-delay: 2s;
        }

        @keyframes in {
            0% {
                opacity: 0;
                transform: translateY(100%);
            }

            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }

        svg {
            width: 32px;
            height: 32px;
        }
    }
`;

export const Icon = styled.div`
    width: 120px;
    height: 120px;
`;
