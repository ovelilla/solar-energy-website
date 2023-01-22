import { Main, Loading, Container, Icon } from "./styles";

import Spinner from "@features/ui/spinner";

const Footer = () => {
    return (
        <Main>
            <Loading>
                <Container>
                    <Icon>
                        <Spinner color="#28365e" width="2" />
                    </Icon>

                    <p>Buscando tu dirección...</p>
                </Container>
            </Loading>
        </Main>
    );
};

export default Footer;
