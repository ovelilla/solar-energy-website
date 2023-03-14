import { useState } from "react";
import {
    PanelsStyled,
    Container,
    Text,
    Inputs,
    NumberContainer,
    InputNumber,
    Number,
    Range,
    InputRange,
    AxisTitle,
    Type,
    TypeButton,
    TypeButtonIcon,
    InfoButton,
    InfoIcon,
} from "./styles";
import CustomOffer from "@features/proposal/components/custom-offer";
import Information from "@features/proposal/components/panels/information";
import Battery from "@features/proposal/components/panels/battery";
import Check from "@shared/icons/Check";
import Info from "@shared/icons/Info";
import QuestionLg from "@shared/icons/QuestionLg";
import useProposal from "@hooks/useProposal";
import useCalculator from "@hooks/useCalculator";

const Panels = () => {
    const [openModalCustomOffer, setOpenModalCustomOffer] = useState(false);
    const [openModalInformation, setOpenModalInformation] = useState(false);

    const { proposal, setProposal } = useProposal();
    const { change, setChange, setUpdate } = useCalculator();

    const handleChange = (e) => {
        if (e.target.value < 5) {
            return;
        }

        if (e.target.value > 30) {
            setOpenModalCustomOffer(true);
            return;
        }

        setChange(!change);
        setProposal({
            ...proposal,
            installation: {
                ...proposal.installation,
                numberPanels: parseInt(e.target.value),
            },
        });
    };

    const handleClick = (type) => {
        setChange(!change);
        setProposal({
            ...proposal,
            installation: {
                ...proposal.installation,
                installationType: type,
            },
        });
        setUpdate(true);
    };

    return (
        <>
            <CustomOffer
                open={openModalCustomOffer}
                onClose={() => setOpenModalCustomOffer(false)}
            />

            <Information
                open={openModalInformation}
                onClose={() => setOpenModalInformation(false)}
            />

            <PanelsStyled id="panels">
                <Container>
                    <Text>
                        <h2>Número de paneles</h2>
                        <p>
                            Paneles recomendados: {proposal.installation.estimatedModules}. Añade o
                            quita paneles para ajustar tu propuesta
                        </p>
                    </Text>

                    <Inputs>
                        <NumberContainer>
                            <InputNumber
                                type="number"
                                min={1}
                                max={300}
                                step={1}
                                value={proposal.installation.numberPanels}
                                onChange={(e) => {
                                    handleChange(e);
                                    setUpdate(true);
                                }}
                            />

                            <Number>
                                {proposal.installation.numberPanels}{" "}
                                <span>
                                    {proposal.installation.numberPanels > 1 ? "paneles" : "panel"}
                                </span>
                            </Number>
                        </NumberContainer>

                        <Range>
                            <InputRange
                                type="range"
                                min={5}
                                max={30}
                                step={1}
                                value={proposal.installation.numberPanels}
                                onChange={handleChange}
                                onMouseUp={() => setUpdate(true)}
                                onTouchEnd={() => setUpdate(true)}
                            />
                            <AxisTitle>
                                <span>5 paneles</span>
                                <span>30 paneles</span>
                            </AxisTitle>
                        </Range>
                    </Inputs>

                    <Type>
                        <TypeButton
                            onClick={() => handleClick("String")}
                            active={proposal.installation.installationType === "String"}
                        >
                            <div>
                                <span>Premium</span>
                                <span>Producción 415 W</span>
                            </div>

                            <TypeButtonIcon
                                active={proposal.installation.installationType === "String"}
                            >
                                {proposal.installation.installationType === "String" && <Check />}
                            </TypeButtonIcon>
                        </TypeButton>

                        <TypeButton
                            onClick={() => handleClick("Microinversor")}
                            active={proposal.installation.installationType === "Microinversor"}
                        >
                            <div>
                                <span>Microinversores</span>
                                <span>Producción 415 W</span>
                            </div>

                            <TypeButtonIcon
                                active={proposal.installation.installationType === "Microinversor"}
                            >
                                {proposal.installation.installationType === "Microinversor" && (
                                    <Check />
                                )}
                            </TypeButtonIcon>
                        </TypeButton>
                    </Type>

                    <InfoButton onClick={() => setOpenModalInformation(true)}>
                        <InfoIcon>
                            <QuestionLg />
                        </InfoIcon>
                        {/* <span>¿Que tipo de instalación necesito?</span> */}
                    </InfoButton>
                </Container>

                <Battery title="¿Necesitas baterías?" />
            </PanelsStyled>
        </>
    );
};

export default Panels;
