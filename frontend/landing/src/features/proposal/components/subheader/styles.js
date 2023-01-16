import styled from "@emotion/styled";

import { gray, slate, white } from "@shared/styles/colors";
import { breakpoints, media, header, section } from "@shared/styles/sizes";

export const SubheaderStyled = styled.div`
    display: flex;
    justify-content: center;
    z-index: 600;
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    ${section}
    background-color: #1e2946;

    ${media(breakpoints.sm)} {
        border-bottom: 1px solid ${slate[200]};
    }
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: ${breakpoints.xl}px;

    ${header}
`;

export const Info = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;

    ${media(breakpoints.md)} {
        gap: 32px;
    }

    div {
        display: flex;
        flex-direction: column;
    }

    span:first-of-type {
        color: ${gray[200]};
        font-size: 14px;
        font-weight: 300;
        letter-spacing: -0.4px;

        ${media(breakpoints.md)} {
            font-size: 16px;
        }
    }

    span:last-of-type {
        color: ${white};
        font-weight: 600;
        letter-spacing: -0.4px;

        ${media(breakpoints.md)} {
            font-size: 24px;
        }
    }
`;

export const Line = styled.div`
    width: 1px;
    height: 40px;
    background-color: ${gray[600]};

    ${media(breakpoints.md)} {
        height: 48px;
    }
`;

export const Action = styled.div``;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    position: relative;
    height: 48px;
    padding: 0 16px 0 16px;
    background-color: transparent;
    font-weight: 500;
    color: ${white};
    letter-spacing: -0.8px;
    border: 2px solid ${white};
    border-radius: 48px;

    ${media(breakpoints.md)} {
        padding: 0 24px 0 24px;
    }
`;
