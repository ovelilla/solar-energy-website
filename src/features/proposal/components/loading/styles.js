import styled from "@emotion/styled";
import { breakpoints, media } from "@shared/styles/sizes";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    gap: 48px;
    padding-bottom: 72px;

    p {
        font-size: 16px;
        font-weight: 500;
        color: #1e3a8a;
        animation: in 1s ease-in-out 0.5s backwards;

        ${media(breakpoints.sm)} {
            font-size: 18px;
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
    }
`;

export const LoaderContainer = styled.div`
    position: relative;
    height: 160px;
    width: 160px;
`;

export const SpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 160px;
    height: 160px;
    animation: scale-spinner 2s ease-in-out 0.1s infinite;

    @keyframes scale-spinner {
        0% {
            transform: scale(1);
        }

        50% {
            transform: scale(1.4);
        }

        100% {
            transform: scale(1);
        }
    }
`;

export const RingSvg = styled.svg`
    position: absolute;
    top: 0;
    left: 0;
`;

export const RingCircle = styled.circle`
    position: absolute;
    top: 0;
    left: 0;
    stroke: #d1d7f0;
`;

export const SpinnerSvg = styled.svg`
    position: absolute;
    top: 0;
    left: 0;
    animation: rotate 3s linear infinite;

    @keyframes rotate {
        100% {
            transform: rotate(360deg);
        }
    }
`;

export const SpinnerCircle = styled.circle`
    stroke: #1e3a8a;
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    animation: dash 2s ease-in-out infinite;
    stroke-linecap: round;

    @keyframes dash {
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
        }

        50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35;
        }

        100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124;
        }
    }
`;

export const CircleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 160px;
    height: 160px;
`;

export const Circle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background-color: #1e3a8a;
    animation: scale-circle 2s ease-in-out infinite;

    @keyframes scale-circle {
        0% {
            transform: scale(1);
        }

        50% {
            transform: scale(1.4);
        }

        100% {
            transform: scale(1);
        }
    }
`;

export const Bars = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 4px;
    height: 32px;
`;

export const Bar1 = styled.div`
    width: 8px;
    height: calc(32px * 2 / 4);
    background-color: #fff;
    border-radius: 2px;
    animation: scale-bar1 1.2s ease-in-out infinite;

    @keyframes scale-bar1 {
        0% {
            height: calc(32px * 2 / 4);
        }

        50% {
            height: 4px;
        }

        100% {
            height: calc(32px * 2 / 4);
        }
    }
`;

export const Bar2 = styled.div`
    width: 8px;
    height: 32px;
    background-color: #fff;
    border-radius: 2px;
    animation: scale-bar2 1.2s ease-in-out 0.5s infinite;
    @keyframes scale-bar2 {
        0% {
            height: 32px;
        }

        50% {
            height: 4px;
        }

        100% {
            height: 32px;
        }
    }
`;

export const Bar3 = styled.div`
    width: 8px;
    height: calc(32px * 3 / 4);
    background-color: #fff;
    border-radius: 2px;
    animation: scale-bar3 1.2s ease-in-out 0.75s infinite;

    @keyframes scale-bar3 {
        0% {
            height: calc(32px * 3 / 4);
        }

        50% {
            height: 4px;
        }

        100% {
            height: calc(32px * 3 / 4);
        }
    }
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
