import { useState } from "react";
import { NumberStyled, Container, Text, Summary, Line, Range, InputRange, AxisTitle } from "./styles";

const Number = () => {
    const [number, setNumber] = useState(10);

    const handleChange = (e) => {
        setNumber(e.target.value);
    };

    // una barra lateral al esilo airbnb con los datos del summary (sticky)

    return (
        <NumberStyled>
            <Container>
                <Text>
                    <h2>Número de paneles</h2>
                    <p>Añade o quita paneles para ajustar tu propuesta</p>
                </Text>

                <Summary>
                    <div>
                        <span>Paneles solares</span>
                        <span>{number}</span>
                    </div>

                    <Line />

                    <div>
                        <span>Precio instalación</span>
                        <span>6.430 €</span>
                    </div>

                    <Line />

                    <div>
                        <span>Ahorros estimados</span>
                        <span>34.000 €</span>
                    </div>

                    <Line />

                    <div>
                        <span>Produccion anual</span>
                        <span>7.400 kWh</span>
                    </div>
                </Summary>

                <Range>
                    <InputRange
                        type="range"
                        min={1}
                        max={20}
                        step={1}
                        value={number}
                        onChange={handleChange}
                    />
                    <AxisTitle>
                        <span>1 panel</span>
                        <span>20 paneles</span>
                    </AxisTitle>
                </Range>
            </Container>
        </NumberStyled>
    );
};

export default Number;
