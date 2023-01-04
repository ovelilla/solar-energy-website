import { ProgressStyled, Bar, Container, Step, Number, Text } from "./styles";

const Progress = () => {
    return (
        <ProgressStyled>
            <Bar />
            <Container>
                <Step>
                    <Number>1</Number>
                    <Text>Ubica tu tejado</Text>
                </Step>
                <Step>
                    <Number>2</Number>
                    <Text>Define tu consumo</Text>
                </Step>
                <Step>
                    <Number>3</Number>
                    <Text>Obten tu propuesta</Text>
                </Step>
            </Container>
        </ProgressStyled>
    );
};

export default Progress;
