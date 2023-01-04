import { ProgressStyled, Bar, Container, Step, StepContainer, Number, Text } from "./styles";

import useWindowSize from "@hooks/useWindowSize";
import { breakpoints } from "@shared/styles/sizes";

const Progress = () => {
    const { width } = useWindowSize();

    return (
        <ProgressStyled>
            <Bar />
            <Container>
                <Step>
                    {/* <StepContainer> */}
                        <Number>1</Number>
                        <Text>Ubica tu tejado</Text>
                        {/* {width > breakpoints.sm ? (
                            <Text>Ubica tu tejado</Text>
                        ) : (
                            <Text>Tejado</Text>
                        )} */}
                    {/* </StepContainer> */}
                </Step>
                <Step>
                    {/* <StepContainer> */}
                        <Number>2</Number>
                        <Text>Define tu consumo</Text>
                        {/* {width > breakpoints.sm ? (
                            <Text>Define tu consumo</Text>
                        ) : (
                            <Text>Consumo</Text>
                        )} */}
                    {/* </StepContainer> */}
                </Step>
                <Step>
                    {/* <StepContainer> */}
                        <Number>3</Number>
                        <Text>Obtén tu propuesta</Text>
                        {/* {width > breakpoints.sm ? (
                            <Text>Obtén tu propuesta</Text>
                        ) : (
                            <Text>Propuesta</Text>
                        )} */}
                    {/* </StepContainer> */}
                </Step>
            </Container>
        </ProgressStyled>
    );
};

export default Progress;
