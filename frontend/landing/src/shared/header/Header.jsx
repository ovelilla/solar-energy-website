import { Link } from "react-router-dom";
import { HeaderStyled, Container, Logo, Button, Hamburguer } from "./styles";

import useScrollPosition from "@hooks/useScrollPosition";
import useWindowSize from "@hooks/useWindowSize";

import Navbar from "@shared/navbar";
import { breakpoints } from "@shared/styles/sizes";

const Header = ({ sidebar, setSidebar }) => {
    const scrollPosition = useScrollPosition();
    const { width } = useWindowSize();

    const handleClick = () => {
        if (sidebar.isAnimated) {
            return;
        }

        if (sidebar.isOpen) {
            setSidebar({
                ...sidebar,
                isClosing: true,
                isAnimated: true,
            });
        } else {
            setSidebar({
                ...sidebar,
                isOpen: true,
                isAnimated: true,
            });
        }
    };

    return (
        <HeaderStyled isScroll={scrollPosition > 0} sidebar={sidebar}>
            <Container>
                <Link to="/">
                    <Logo src="/img/libergy-logo.svg" alt="Logo Libergy" />
                </Link>

                {width > breakpoints.lg && (
                    <>
                        <Navbar isScroll={scrollPosition > 0} />
                        <Button>Obten tu valoración</Button>
                    </>
                )}

                {width <= breakpoints.lg && (
                    <>
                        <Hamburguer sidebar={sidebar} onClick={handleClick}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </Hamburguer>
                    </>
                )}
            </Container>
        </HeaderStyled>
    );
};

export default Header;
