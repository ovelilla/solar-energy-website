import styled from "@emotion/styled";
import { slate } from "@shared/styles/colors";
import { shadows } from "@shared/styles/shadows";
import { breakpoints, media, section, topHeader } from "@shared/styles/sizes";

export const SummaryStyled = styled.div`
    display: flex;
    flex-direction: column;

    position: sticky;
    ${topHeader}
`;

export const Container = styled.div`
    margin-top: 48px;
    padding: 24px;
    /* box-shadow: ${shadows.md}; */
    box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;
    /* box-shadow: 0px 2px 4px rgb(1 11 25 20%)*/
    border-radius: 16px;
`;
