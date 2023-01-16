import styled from "@emotion/styled";

import { white, slate } from "@shared/styles/colors";
import { breakpoints, media } from "@shared/styles/sizes";

export const BenefitsStyled = styled.section`
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: ${breakpoints.xl}px;
    padding: 24px 16px;
    border-bottom: 2px solid ${slate[200]};

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

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 16px;

    ${media(breakpoints.md)} {
        grid-template-columns: repeat(2, 1fr);
    }

    ${media(breakpoints.lg)} {
        grid-template-columns: repeat(3, 1fr);
    }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 24px;
    border-radius: 8px;

    &:nth-of-type(2) {
        background-color: #f0f3fd;
    }

    svg {
        width: 80px;
        height: 80px;
        color: #13192e;
    }

    h2 {
        font-size: 24px;
        font-weight: 600;
        letter-spacing: -1px;
    }

    p {
        flex-grow: 1;
        color: ${slate[600]};
    }

    a {
        text-transform: uppercase;
        font-weight: 600;
    }
`;
