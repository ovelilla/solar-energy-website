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

    p {
        font-size: 18px;
        font-weight: 500;
        color: #28365e;
        animation: in 0.5s ease-in-out;

        ${media(breakpoints.sm)} {
            font-size: 20px;
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

export const Icon = styled.div`
    width: 160px;
    height: 160px;
`;
