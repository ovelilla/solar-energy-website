import styled from "@emotion/styled";

import { slate } from "@shared/styles/colors";
import { shadows } from "@shared/styles/shadows";
import { breakpoints, media, header, logo, section } from "@shared/styles/sizes";

export const HederStyled = styled.header`
    display: flex;
    justify-content: center;
    z-index: 600;
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    ${section}

    ${media(breakpoints.sm)} {
        border-bottom: 1px solid ${slate[100]};
    }
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: ${breakpoints.xl}px;

    ${header}
`;

export const Logo = styled.img`
    ${logo}
`;
