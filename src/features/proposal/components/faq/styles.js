import styled from "@emotion/styled";

import { gray, slate, white } from "@shared/styles/colors";
import { breakpoints, media, section, container } from "@shared/styles/sizes";

export const FaqStyled = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    ${section}
    background-color: rgb(250, 250, 255);
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 100%;
    max-width: ${breakpoints.xl}px;
    ${container}
 

    ${media(breakpoints.md)} {
        gap: 40px;
    }

    ${media(breakpoints.xl)} {
        gap: 48px;
    }

    h2 {
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
    }

    p {
        color: ${gray[500]};
    }
`;

export const Questions = styled.div`
    display: flex;
    flex-direction: column;
`;

export const QuestionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px 0;

    p {
        color: ${slate[700]};
    }
`;
