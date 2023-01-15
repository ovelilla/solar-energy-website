import { useState, useEffect, useRef } from "react";
import { HelpsStyled, Title, TextContainer, Subtitle, Text, Chart, Bar } from "./styles";
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
                    ayuda para paneles y hasta un 70% de ayuda para baterías. Válido hasta el 31 de
                    diciembre de 2023 o agotamiento de los fondos.
                </Text>
            </TextContainer>

            <Chart>
                <Bar isVisible={isVisible}>
                    <p>Precio total de la instalación</p>
                    <div>6.430 €</div>
                </Bar>

                <Bar isVisible={isVisible}>
                    <p>Cantidad subvencionada</p>
                    <div>1.170 €</div>
                </Bar>
            </Chart>
        </HelpsStyled>
    );
};

export default Helps;
