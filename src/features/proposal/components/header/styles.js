import styled from "@emotion/styled";

import { breakpoints, header, logo, section } from "@shared/styles/sizes";

export const HederStyled = styled.header`
    display: flex;
    justify-content: center;
    width: 100%;
    ${section}
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
