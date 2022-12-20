import { HeaderStyled, Container, Logo, Button } from "./styles";
import useScrollPosition from "@hooks/useScrollPosition";
import Navbar from "@shared/navbar";

const Header = () => {
    const scrollPosition = useScrollPosition();

    return (
        <HeaderStyled isScroll={scrollPosition > 0}>
            <Container>
                <Logo src="/img/libergy-logo.svg" alt="Logo Libergy" />

                <Navbar isScroll={scrollPosition > 0} />

                <Button>Obten tu valoración</Button>
            </Container>
        </HeaderStyled>
    );
};

export default Header;
