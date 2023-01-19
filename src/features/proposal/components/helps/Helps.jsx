import { useState, useEffect, useRef } from "react";
import { HelpsStyled, Title, TextContainer, Subtitle, Text, Chart, Column, Bar } from "./styles";
import useScrollPosition from "@hooks/useScrollPosition";

const Helps = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollPosition = useScrollPosition();
    const helpsRef = useRef(null);

    useEffect(() => {
        const counter = helpsRef.current;
        const rect = counter.getBoundingClientRect();

        if (rect.top < window.innerHeight && rect.bottom > 0 && !isVisible) {
            setIsVisible(true);
        }
    }, [scrollPosition]);

    return (
        <HelpsStyled ref={helpsRef}>
            <Title>Ayudas europeas por autoconsumo</Title>

            <TextContainer>
                <Subtitle>Bonificaciones</Subtitle>
                <Text>
                    Accedes a las bonificaciones de tipo IBI de tu Comunidad Autónoma con una
                    cantidad bonificada de hasta 50 €/año durante 3 años.
                </Text>
            </TextContainer>

            <TextContainer>
                <Subtitle>Subvenciones</Subtitle>
                <Text>
                    Con las subvenciones europeas, Next Generation, puedes recibir hasta un 40% de
                    ayuda para paneles y hasta un 70% de ayuda para baterías.
                </Text>
            </TextContainer>

            <Chart>
                <Column>
                    <p>Precio total de la instalación</p>
                    <Bar index={1} isVisible={isVisible}>
                        <span>6.430 €</span>
                    </Bar>
                </Column>

                <Column>
                    <p>Cantidad subvencionada</p>
                    <Bar index={2} isVisible={isVisible}>
                        <span>1.170 €</span>
                    </Bar>
                </Column>
            </Chart>
        </HelpsStyled>
    );
};

export default Helps;
