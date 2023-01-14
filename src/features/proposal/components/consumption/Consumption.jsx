import { useState } from "react";
import {
    ConsumptionStyled,
    Container,
    Text,
    InputNumber,
    Range,
    InputRange,
    AxisTitle,
} from "./styles";

const Consumption = () => {
    const [consumption, setConsumption] = useState(140);

    const handleChange = (e) => {
        setConsumption(e.target.value);
    };

    return (
        <ConsumptionStyled>
            <Container>
                <Text>
                    <h2>¿Cuál es tu factura mensual?</h2>
                    <p>
                        Tu factura mensual se utiliza para calcular los ahorros de manera más
                        precisa
                    </p>
                </Text>

                <InputNumber
                    type="number"
                    min={30}
                    max={240}
                    step={10}
                    value={consumption}
                    onChange={handleChange}
                />

                <Range>
                    <InputRange
                        type="range"
                        min={30}
                        max={240}
                        step={10}
                        value={consumption}
                        onChange={handleChange}
                    />
                    <AxisTitle>
                        <span>30 €</span>
                        <span>240 €</span>
                    </AxisTitle>
                </Range>
            </Container>
        </ConsumptionStyled>
    );
};

export default Consumption;
