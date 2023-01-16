import { useEffect } from "react";
import { ProgressStyled, Container, Steps, Step, Line, Number, Text } from "./styles";

import useProposal from "@hooks/useProposal";
import useWindowSize from "@hooks/useWindowSize";

import { breakpoints } from "@shared/styles/sizes";

const Progress = () => {
    const { step, setStep } = useProposal();
    const { width } = useWindowSize();

    useEffect(() => {
        setStep(1);
    }, []);

    return (
        <ProgressStyled>
            <Container>
                <h2>¿Cómo funciona?</h2>

                <Steps>
                    <Step>
                        <Number isActive={step === 1} isCompleted={step > 1}>
                            {step > 1 ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                </svg>
                            ) : (
                                1
                            )}
                        </Number>

                        <Text isActive={step === 1} isCompleted={step > 1}>
                            Configura tu propuesta
                        </Text>
                    </Step>

                    <Line isActive={step === 1} />

                    <Step>
                        <Number isActive={step === 2} isCompleted={step > 2}>
                            {step > 2 ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                </svg>
                            ) : (
                                2
                            )}
                        </Number>

                        <Text isActive={step === 2} isCompleted={step > 2}>
                            Deja tus datos de contacto
                        </Text>
                    </Step>

                    <Line isActive={step === 2} />

                    <Step>
                        <Number isActive={step === 3} isCompleted={step > 3}>
                            {step > 3 ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                </svg>
                            ) : (
                                3
                            )}
                        </Number>

                        <Text isActive={step === 3} isCompleted={step > 3}>
                            Solicita una oferta
                        </Text>
                    </Step>
                </Steps>
            </Container>
        </ProgressStyled>
    );
};

export default Progress;
