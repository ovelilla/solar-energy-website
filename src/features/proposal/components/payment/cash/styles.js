import styled from "@emotion/styled";
import { white, gray, slate } from "@shared/styles/colors";
import { shadows } from "@shared/styles/shadows";
import { breakpoints, media, section } from "@shared/styles/sizes";

export const Summary = styled.div`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background-color: rgb(250, 250, 255);
    border-radius: 16px;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px;
    padding-bottom: 16px;
    border-bottom: 1px solid ${slate[200]};

    ${media(breakpoints.md)} {
        padding: 32px;
        padding-bottom: 16px;
    }

    ${media(breakpoints.xl)} {
        padding: 40px;
        padding-bottom: 24px;
    }

    p:first-of-type {
        text-transform: uppercase;
        color: ${gray[500]};
    }

    p:last-of-type {
        font-size: 40px;
        font-weight: 600;
        letter-spacing: -0.4px;
    }
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    background-color: rgb(250, 250, 255);

    padding: 24px;
    ${media(breakpoints.md)} {
        padding: 32px;
    }

    ${media(breakpoints.xl)} {
        padding: 40px;
    }

    ${media(breakpoints.sm)} {
        gap: 40px;
    }
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    ${media(breakpoints.sm)} {
        flex-direction: row;
        gap: 16px;
    }
`;

export const ColumnLeft = styled.div`
    display: flex;
    flex: 0 1 auto;
`;

export const ColumnRight = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    gap: 8px;

    h3 {
        font-size: 18px;
        letter-spacing: -0.4px;
        font-weight: 600;

        ${media(breakpoints.sm)} {
            font-size: 18px;
        }
    }

    p {
        font-weight: 300;
        color: ${gray[500]};

        ${media(breakpoints.sm)} {
            font-weight: 400;
        }
    }
`;

export const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: #e0e7fb;

    svg {
        width: 24px;
        height: 24px;
    }
`;

export const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    padding: 16px 24px;
    background-color: rgb(245, 246, 255);

    ${media(breakpoints.md)} {
        padding: 24px 32px;
    }

    ${media(breakpoints.xl)} {
        padding: 24px 40px;
    }
`;

export const InfoButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: #e0e7fb;

    svg {
        width: 24px;
        height: 24px;
    }
`;
