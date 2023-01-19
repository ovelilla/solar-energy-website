import { useState } from "react";
import {
    ConsumptionStyled,
    Container,
    Text,
    Inputs,
    NumberContainer,
    InputNumber,
    Number,
    Range,
    InputRange,
    AxisTitle,
} from "./styles";
import More from "@features/proposal/components/consumption/more";

const Consumption = () => {
    const [consumption, setConsumption] = useState(140);

    const handleChange = (e) => {
        setConsumption(e.target.value);
    };

    return (
        <ConsumptionStyled id="consumption">
            <Container>
                <Text>
                    <h2>¿Cuál es tu factura mensual?</h2>
                    <p>
                        Tu factura mensual se utiliza para calcular los ahorros de manera más
                        precisa
                    </p>
                </Text>

                <Inputs>
                    <NumberContainer>
                        <InputNumber
                            type="number"
                            min={30}
                            max={240}
                            step={10}
                            value={consumption}
                            onChange={handleChange}
                        />

                        <Number>
                            {consumption} <span>€/mes</span>
                        </Number>
                    </NumberContainer>

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
                </Inputs>
            </Container>

            <More title="Ayúdanos a mejorar tu propuesta aportando información adicional" />
        </ConsumptionStyled>
    );
};

export default Consumption;
