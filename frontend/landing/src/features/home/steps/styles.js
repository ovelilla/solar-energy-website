import styled from "@emotion/styled";

import { white, slate } from "@shared/styles/colors";
import { breakpoints, media } from "@shared/styles/sizes";

export const StepsStyled = styled.section`
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    background-color: #f8f9ff;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: ${breakpoints.xl}px;
    padding: 24px 16px;

    ${media(breakpoints.sm)} {
        padding: 48px 24px;
    }

    ${media(breakpoints.md)} {
        padding: 72px 32px;
    }

    ${media(breakpoints.lg)} {
        padding: 96px 32px;
    }

    ${media(breakpoints.xl)} {
        padding: 120px 32px;
    }
`;
