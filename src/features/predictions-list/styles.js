import styled from "@emotion/styled";

import { white, slate } from "@shared/styles/colors";
import { breakpoints, media } from "@shared/styles/sizes";

import { MapPinIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export const Container = styled.div`
    position: relative;
`;

export const List = styled.ul`
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 8px 0;
    background-color: ${white};
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    box-shadow: 0px 16px 80px rgb(0 0 0 / 15%);
`;

export const Item = styled.li`
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px 24px;
    color: ${slate[700]};
    cursor: pointer;
    ${(p) => p.selected && `background-color: ${slate[50]};`}

    ${media(breakpoints.sm)} {
        padding-left: 72px;
        font-size: 18px;
    }

    &:hover {
        background-color: ${slate[50]};
    }
`;
