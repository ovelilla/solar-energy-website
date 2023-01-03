import { Link, Outlet } from "react-router-dom";

import styled from "@emotion/styled";

import { white } from "@shared/styles/colors";
import { shadows } from "@shared/styles/shadows";
import { breakpoints, media } from "@shared/styles/sizes";

export const Header = styled.header`
    display: flex;
    justify-content: center;
    z-index: 600;
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    background-color: ${white};
    box-shadow: ${shadows.md};
    transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 56px;
    width: 100%;
    max-width: ${breakpoints.xl}px;
    height: 72px;
    padding: 0 16px;

    ${media(breakpoints.sm)} {
        height: 80px;
        padding: 0 24px;
    }

    ${media(breakpoints.md)} {
        height: 88px;
        padding: 0 32px;
    }

    ${media(breakpoints.lg)} {
        height: 96px;
    }

    ${media(breakpoints.xl)} {
        height: 104px;
    }
`;

export const Logo = styled.img`
    width: 152px;

    ${media(breakpoints.sm)} {
        width: 160px;
    }

    ${media(breakpoints.md)} {
        width: 168px;
    }

    ${media(breakpoints.lg)} {
        width: 176px;
    }

    ${media(breakpoints.xl)} {
        width: 184px;
    }
`;

const ProposalLayout = () => {
    return (
        <>
            <Header>
                <Container>
                    <Link to="/">
                        <Logo src="/img/libergy-logo.svg" alt="Logo Libergy" />
                    </Link>
                </Container>
            </Header>

            <Outlet />
        </>
    );
};

export default ProposalLayout;
