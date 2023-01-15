import { useState } from "react";
import {
    PanelsStyled,
    Container,
    Text,
    Inputs,
    InputNumber,
    Range,
    InputRange,
    AxisTitle,
    Type,
    TypeButton,
    TypeButtonIcon,
} from "./styles";

const Panels = () => {
    const [panels, setPanels] = useState(10);
    const [type, setType] = useState("standard");

    const handleChange = (e) => {
        setPanels(e.target.value);
    };

    return (
        <PanelsStyled>
            <Container>
                <Text>
                    <h2>Número de paneles</h2>
                    <p>Añade o quita paneles para ajustar tu propuesta</p>
                </Text>

                <Inputs>
                    <InputNumber
                        type="number"
                        min={30}
                        max={240}
                        step={10}
                        value={panels}
                        onChange={handleChange}
                    />

                    <Range>
                        <InputRange
                            type="range"
                            min={1}
                            max={20}
                            step={1}
                            value={panels}
                            onChange={handleChange}
                        />
                        <AxisTitle>
                            <span>1 panel</span>
                            <span>20 paneles</span>
                        </AxisTitle>
                    </Range>
                </Inputs>

                <Type>
                    <TypeButton onClick={() => setType("standard")} active={type === "standard"}>
                        <span>Paneles estándar</span>
                        <span>Producción 410 W</span>
                        {type === "standard" && (
                            <TypeButtonIcon>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                </svg>
                            </TypeButtonIcon>
                        )}
                    </TypeButton>
                    <TypeButton onClick={() => setType("premium")} active={type === "premium"}>
                        <span>Paneles premium</span>
                        <span>Producción 460 W</span>
                        {type === "premium" && (
                            <TypeButtonIcon>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                </svg>
                            </TypeButtonIcon>
                        )}
                    </TypeButton>
                </Type>
            </Container>
        </PanelsStyled>
    );
};

export default Panels;
