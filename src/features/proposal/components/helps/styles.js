import styled from "@emotion/styled";
import { white, gray, slate } from "@shared/styles/colors";
import { shadows } from "@shared/styles/shadows";
import { breakpoints, media, section } from "@shared/styles/sizes";

export const HelpsStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
`;

export const Title = styled.h2`
    font-size: 20px;
    font-weight: 600;
    letter-spacing: -0.4px;
    line-height: 1.2;

    ${media(breakpoints.md)} {
        font-size: 24px;
        letter-spacing: -0.8px;
    }

    ${media(breakpoints.xl)} {
        font-size: 28px;
        letter-spacing: -1.2px;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const Subtitle = styled.p`
    font-weight: 600;
`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    color: ${gray[500]};
`;

export const Chart = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    margin-top: 24px;
`;

export const Bar = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;

    div {
        display: flex;
        align-items: center;
        width: 120px;
        height: 48px;
        padding: 0 24px;
        border-radius: 8px;
        transition: width 3s ease-in-out;
        font-size: 18px;
        font-weight: 600;
    }

    &:nth-of-type(1) div {
        ${(p) => {
            if (p.isVisible) {
                return `width: calc(100%);`;
            }
        }}
        background-color: #f0f3fd;
    }

    &:nth-of-type(2) div {
        ${(p) => {
            if (p.isVisible) {
                return `width: calc(3 * 100% / 10);`;
            }
        }}
        background-color: #d1dbf9;
    }
`;
