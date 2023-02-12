import styled from "@emotion/styled";
import { white, gray, slate } from "@shared/styles/colors";
import { shadows } from "@shared/styles/shadows";
import { breakpoints, media, section } from "@shared/styles/sizes";

export const ComparisonBillStyled = styled.div`
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
    gap: 8px;
`;

export const Subtitle = styled.p`
    font-weight: 600;
    ${media(breakpoints.md)} {
        font-size: 18px;
    }
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
    margin-top: 16px;

    ${media(breakpoints.md)} {
        margin-top: 24px;
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const Bar = styled.div`
    display: flex;
    align-items: center;
    overflow: hidden;
    min-width: 0;
    height: 48px;
    border-radius: 8px;
    transition: width 3s ease-in-out;
    font-size: 18px;
    font-weight: 600;

    ${(p) => {
        if (p.index === 1) {
            return `
                width: ${p.isVisible ? "100%" : "0"};
                background-color: #f0f3fd;
            `;
        } else if (p.index === 2) {
            return `
                width: ${p.isVisible ? p.percentage + "%" : "0"};
                background-color: #d1dbf9;
            `;
        }
    }}

    span {
        padding: 0 16px;
        white-space: nowrap;
    }
`;
