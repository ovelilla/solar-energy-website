import styled from "@emotion/styled";

export const CollapseStyled = styled.div`
    overflow: hidden;
    height: ${(p) => p.height};
    transition: height 4s ease-in-out;
`;
