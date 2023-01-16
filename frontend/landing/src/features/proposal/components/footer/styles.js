import styled from "@emotion/styled";

import { gray, slate, white } from "@shared/styles/colors";
import { breakpoints, media, section, footer, logo } from "@shared/styles/sizes";

export const FooterStyled = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    ${section}
    background-color: #1e2946;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 48px;
    width: 100%;
    max-width: ${breakpoints.xl}px;
    ${footer}

    div:first-of-type {
        display: flex;
    }

    div:last-of-type {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        gap: 16px;
    }

    a {
        color: ${gray[200]};
        font-size: 14px;
        font-weight: 300;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export const Logo = styled.img`
    ${logo}
`;
