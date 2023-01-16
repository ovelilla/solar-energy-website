import styled from "@emotion/styled";
import { breakpoints, media } from "@shared/styles/sizes";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

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
        font-size: 16px;
        font-weight: 500;
        color: #28365e;
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

export const Icon = styled.div`
    width: 120px;
    height: 120px;
`;
