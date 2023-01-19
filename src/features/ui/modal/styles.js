import styled from "@emotion/styled";
import { white, gray, slate } from "@shared/styles/colors";
import { shadows } from "@shared/styles/shadows";
import { breakpoints, media, section } from "@shared/styles/sizes";

export const ModalStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 800;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 16px;
    background-color: rgba(64, 77, 105, 0.25);
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    position: relative;
    width: 100%;
    max-width: 640px;
    max-height: 100%;
    margin: auto;
    padding: 32px;
    background-color: ${white};
    border-radius: 8px;
    box-shadow: ${shadows.md};
`;

export const Close = styled.div`
    position: absolute;
    top: 8px;
    right: 8px;

    svg {
        color: ${slate[400]};
        width: 24px;
        height: 24px;
    }
`;
