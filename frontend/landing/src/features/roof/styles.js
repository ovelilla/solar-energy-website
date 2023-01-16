import styled from "@emotion/styled";
import { breakpoints, media, section } from "@shared/styles/sizes";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    ${media(breakpoints.sm)} {
        background-color: #fafaff;
    }
`;

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    ${section}
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    flex-grow: 1;
    width: 100%;
    max-width: ${breakpoints.xl}px;

    ${media(breakpoints.sm)} {
        gap: 24px;
        padding: 24px 0;
    }

    ${media(breakpoints.lg)} {
        gap: 32px;
        padding: 32px 0;
    }

    ${media(breakpoints.xl)} {
        gap: 48px;
        padding: 48px 0;
    }
`;
