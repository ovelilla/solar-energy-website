import styled from "@emotion/styled";
import { white, slate } from "@shared/styles/colors";
import { breakpoints, media, section } from "@shared/styles/sizes";

export const FooterStyled = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    ${section}
    background-color: ${white};

    ${media(breakpoints.sm)} {
        border-top: 1px solid ${slate[100]};
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    padding: 24px 0;
    max-width: ${breakpoints.xl}px;
`;