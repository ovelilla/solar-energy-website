import styled from "@emotion/styled";

import { gray, slate, white } from "@shared/styles/colors";
import { breakpoints, media, section } from "@shared/styles/sizes";

export const TitleStyled = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    ${section}
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    max-width: ${breakpoints.xl}px;

    h1 {
        font-size: 24px;
        font-weight: 600;
        letter-spacing: -0.8px;
        line-height: 1.2;

        ${media(breakpoints.md)} {
            font-size: 32px;
            letter-spacing: -1.6px;
        }

        ${media(breakpoints.xl)} {
            font-size: 40px;
            letter-spacing: -2px;
        }
    }

    p {
        color: ${gray[500]};
    }
`;
