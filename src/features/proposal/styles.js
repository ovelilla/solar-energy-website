import styled from "@emotion/styled";
import { breakpoints, media, section } from "@shared/styles/sizes";

export const ProposalStyled = styled.section`
    display: flex;
    flex-direction: column;
    gap: 32px;

    ${media(breakpoints.md)} {
        gap: 48px;
    }
`;
