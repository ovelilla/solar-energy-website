import { TitleStyled, Container } from "./styles";

import useProposal from "@hooks/useProposal";

const Title = () => {
    const { proposal } = useProposal();

    return (
        <TitleStyled>
            <Container>
                <h1>Aquí está tu propuesta de autoconsumo</h1>
                <p>Esta es una estimación para la dirección {proposal.address}</p>
            </Container>
        </TitleStyled>
    );
};

export default Title;
