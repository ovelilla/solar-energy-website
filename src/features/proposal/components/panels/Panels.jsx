import { useState } from "react";
import { PanelsStyled, Container, Text, InputNumber, Range, InputRange, AxisTitle } from "./styles";

const Panels = () => {
    const [panels, setPanels] = useState(10);

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
            </Container>
        </PanelsStyled>
    );
};

export default Panels;
