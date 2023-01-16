import styled from "@emotion/styled";
import { breakpoints, media, section } from "@shared/styles/sizes";

export const ProposalStyled = styled.main`
    display: flex;
    flex-direction: column;
    gap: 32px;

    ${media(breakpoints.md)} {
        gap: 48px;
    }
`;

export const Section = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    ${section}
`;

export const Container = styled.div`
    width: 100%;
    max-width: ${breakpoints.xl}px;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    flex-grow: 1;

    ${media(breakpoints.lg)} {
        grid-template-columns: 70fr 30fr;
        gap: 64px;
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    gap: 48px;
    position: relative;

    ${media(breakpoints.md)} {
        gap: 96px;
    }
`;
