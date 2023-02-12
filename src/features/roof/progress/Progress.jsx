import { useEffect } from "react";
import { ProgressStyled, Step, Line, Number, Text } from "./styles";

import useProposal from "@hooks/useProposal";
import useWindowSize from "@hooks/useWindowSize";
import Check from "@shared/icons/Check";
import { breakpoints } from "@shared/styles/sizes";

const Progress = () => {
    const { step, setStep } = useProposal();
    const { width } = useWindowSize();

    useEffect(() => {
        setStep(1);
    }, []);

    return (
        <ProgressStyled>
            <Step>
                <Number isActive={step === 1} isCompleted={step > 1}>
                    {step > 1 ? <Check /> : 1}
                </Number>
                {width >= breakpoints.sm && (
                    <Text isActive={step === 1} isCompleted={step > 1}>
                        Ubica tu tejado
                    </Text>
                )}
            </Step>

            <Line isActive={step === 1} />

            <Step>
                <Number isActive={step === 2} isCompleted={step > 2}>
                    {step > 2 ? <Check /> : 2}
                </Number>
                {width >= breakpoints.sm && (
                    <Text isActive={step === 2} isCompleted={step > 2}>
                        Obtén tu propuesta
                    </Text>
                )}
            </Step>
        </ProgressStyled>
    );
};

export default Progress;
