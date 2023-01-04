import { ProgressStyled, Step, Line, Number, Text } from "./styles";

import useProposal from "@hooks/useProposal";
import useWindowSize from "@hooks/useWindowSize";

import { breakpoints } from "@shared/styles/sizes";

const Progress = () => {
    const { step } = useProposal();
    const { width } = useWindowSize();

    return (
        <ProgressStyled>
            <Step>
                <Number isActive={step === 1} isCompleted={step > 1}>
                    1
                </Number>
                {width > breakpoints.md && (
                    <Text isActive={step === 1} isCompleted={step > 1}>
                        Ubica tu tejado
                    </Text>
                )}
            </Step>

            <Line isActive={step === 1} />

            <Step>
                <Number isActive={step === 2} isCompleted={step > 2}>
                    2
                </Number>
                {width > breakpoints.md && (
                    <Text isActive={step === 2} isCompleted={step > 2}>
                        Define tu consumo
                    </Text>
                )}
            </Step>

            <Line isActive={step === 2} />

            <Step>
                <Number isActive={step === 3} isCompleted={step > 3}>
                    3
                </Number>
                {width > breakpoints.md && (
                    <Text isActive={step === 3} isCompleted={step > 3}>
                        Obtén tu propuesta
                    </Text>
                )}
            </Step>
        </ProgressStyled>
    );
};

export default Progress;
