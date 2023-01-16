import styled from "@emotion/styled";

import { white, slate } from "@shared/styles/colors";

export const Svg = styled.svg`
    position: relative;
    height: 100%;
    width: 100%;
    animation: rotate 2s linear infinite;

    @keyframes rotate {
        100% {
            transform: rotate(360deg);
        }
    }
`;

export const Circle = styled.circle`
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    animation: dash 1.5s ease-in-out infinite;
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
