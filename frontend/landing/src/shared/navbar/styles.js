import styled from "@emotion/styled";
import { slate } from "@shared/styles/colors";

export const NavbarStyled = styled.nav`
    margin-left: auto;

    ul {
        display: flex;
        gap: 32px;
        padding: 0;
        list-style: none;
    }

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        height: 48px;
        font-weight: 500;
        color: #13192e;
        letter-spacing: -0.8px;

        &::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 0;
            height: 2px;
            max-width: 100%;
            background: #13192e;
            transition: 0.33s all ease;

            &:hover {
                left: 0;
                width: 100%;
            }
        }

        &:hover::after {
            left: 0;
            width: 100%;
        }
    }
`;
