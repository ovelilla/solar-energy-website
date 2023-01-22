import styled from "@emotion/styled";

import { white, slate } from "@shared/styles/colors";
import { breakpoints, media, section, container } from "@shared/styles/sizes";

export const StepsStyled = styled.section`
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    ${section}
    background-color: #f8f9ff;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: ${breakpoints.xl}px;
    ${container}
`;
