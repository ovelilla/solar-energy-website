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

const Panels = () => {
    const [openModalCustomOffer, setOpenModalCustomOffer] = useState(false);
    const [openModalInformation, setOpenModalInformation] = useState(false);

    const [panels, setPanels] = useState(10);
    const [type, setType] = useState("standard");

    const handleChange = (e) => {
        setPanels(e.target.value);

        if (e.target.value > 30) {
            setOpenModalCustomOffer(true);
        }
    };

    return (
        <>
            {openModalCustomOffer && (
                <CustomOffer
                    open={openModalCustomOffer}
                    onClose={() => setOpenModalCustomOffer(false)}
                />
            )}

            {openModalInformation && (
                <Information
                    open={openModalInformation}
                    onClose={() => setOpenModalInformation(false)}
                />
            )}

            <PanelsStyled id="panels">
                <Container>
                    <Text>
                        <h2>Número de paneles</h2>
                        <p>Añade o quita paneles para ajustar tu propuesta</p>
                    </Text>

                    <Inputs>
                        <NumberContainer>
                            <InputNumber
                                type="number"
                                min={1}
                                max={300}
                                step={1}
                                value={panels}
                                onChange={handleChange}
                            />

                            <Number>
                                {panels} <span>{panels > 1 ? "paneles" : "panel"}</span>
                            </Number>
                        </NumberContainer>

                        <Range>
                            <InputRange
                                type="range"
                                min={5}
                                max={30}
                                step={1}
                                value={panels}
                                onChange={handleChange}
                            />
                            <AxisTitle>
                                <span>5 paneles</span>
                                <span>30 paneles</span>
                            </AxisTitle>
                        </Range>
                    </Inputs>

                    <Type>
                        <TypeButton
                            onClick={() => setType("standard")}
                            active={type === "standard"}
                        >
                            <div>
                                <span>Premium</span>
                                <span>Producción 415 W</span>
                            </div>

                            <TypeButtonIcon active={type === "standard"}>
                                {type === "standard" && <Check />}
                            </TypeButtonIcon>
                        </TypeButton>

                        <TypeButton onClick={() => setType("premium")} active={type === "premium"}>
                            <div>
                                <span>Microinversores</span>
                                <span>Producción 415 W</span>
                            </div>

                            <TypeButtonIcon active={type === "premium"}>
                                {type === "premium" && <Check />}
                            </TypeButtonIcon>
                        </TypeButton>
                    </Type>

                    <InfoButton onClick={() => setOpenModalInformation(true)}>
                        <InfoIcon>
                            <Info />
                        </InfoIcon>
                        <span>¿Que tipo de instalación necesito?</span>
                    </InfoButton>
                </Container>

                <Battery title="¿Necesitas baterías?" />
            </PanelsStyled>
        </>
    );
};

export default Panels;
