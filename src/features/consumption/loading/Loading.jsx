import { Loading, Container, Icon } from "./styles";

import Spinner from "@features/ui/spinner";

const Footer = () => {
    return (
        <Loading>
            <Container>
                <Icon>
                    <Spinner color="#28365e" width="2" />
                </Icon>

                <p>Buscando tu dirección...</p>
            </Container>
        </Loading>
    );
};

export default Footer;
