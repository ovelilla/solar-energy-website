import styled from "@emotion/styled";

import { gray } from "@shared/styles/colors";
import { breakpoints, media } from "@shared/styles/sizes";

export const ProgressStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${media(breakpoints.md)} {
        gap: 8px;
    }
`;

export const Line = styled.div`
    width: 100%;
    height: 2px;
    background-color: ${gray[200]};
`;

export const Step = styled.div`
    display: flex;
    align-items: center;
    flex-shrink: 0;
    gap: 8px;
`;

export const Number = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    width: 40px;
    height: 40px;
    background-color: ${gray[200]};
    border-radius: 50%;
    border: 1px solid ${gray[200]};
    color: ${gray[500]};
    font-size: 14px;
    font-weight: 500;

    ${(p) => {
        if (p.isActive) {
            return `
                color: #fff;
                background-color: #28365e;
                border-color: #28365e;
            `;
        }
        if (p.isCompleted) {
            return `
                color: #fff;
                background-color: #28365e;
                border-color: #28365e;
            `;
        }
    }}
`;

export const Text = styled.div`
    letter-spacing: -0.4px;
    color: ${gray[400]};

    ${(p) => {
        if (p.isActive) {
            return `
                color: #28365e;
            `;
        }
        if (p.isCompleted) {
            return `
                color: #28365e;
            `;
        }
    }}
`;
