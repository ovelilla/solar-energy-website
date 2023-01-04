import styled from "@emotion/styled";

import { shadows } from "@shared/styles/shadows";
import { breakpoints, header, logo, section } from "@shared/styles/sizes";

export const HederStyled = styled.header`
    display: flex;
    justify-content: center;
    z-index: 600;
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    ${section}
    box-shadow: ${shadows.md};
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
