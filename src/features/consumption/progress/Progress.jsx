import { useEffect } from "react";
import { ProgressStyled, Step, Line, Number, Text } from "./styles";

import useProposal from "@hooks/useProposal";
import useWindowSize from "@hooks/useWindowSize";

import { breakpoints } from "@shared/styles/sizes";

const Progress = () => {
    const { step, setStep } = useProposal();
    const { width } = useWindowSize();

    useEffect(() => {
        console.log("Progress.jsx: useEffect()");
        setStep(2);
    }, []);

    return (
        <ProgressStyled>
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
                {width >= breakpoints.md && (
                    <Text isActive={step === 1} isCompleted={step > 1}>
                        Ubica tu tejado
                    </Text>
                )}
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
                {width >= breakpoints.md && (
                    <Text isActive={step === 2} isCompleted={step > 2}>
                        Define tu consumo
                    </Text>
                )}
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
                {width >= breakpoints.md && (
                    <Text isActive={step === 3} isCompleted={step > 3}>
                        Obtén tu propuesta
                    </Text>
                )}
            </Step>
        </ProgressStyled>
    );
};

export default Progress;
