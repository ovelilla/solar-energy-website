import styled from "@emotion/styled";
import { white, slate } from "@shared/styles/colors";
import { breakpoints, media } from "@shared/styles/sizes";

export const MapStyled = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: ${slate[50]};
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    max-width: ${breakpoints.xl}px;
    padding: 96px 16px;
    padding-top: 120px;

    ${media(breakpoints.sm)} {
        padding: 120px 24px;
        padding-top: 144px;
    }

    ${media(breakpoints.md)} {
        gap: 48x;
        padding: 144px 32px;
        padding-top: 168px;
    }

    ${media(breakpoints.lg)} {
        gap: 56px;
        padding: 168px 32px;
        padding-top: 192px;
    }

    ${media(breakpoints.xl)} {
        padding: 192px 32px;
        padding-top: 216px;
    }
`;

export const MapContainer = styled.div`
/* position: relative; */
    width: 400px;
    height: 300px;
`;
