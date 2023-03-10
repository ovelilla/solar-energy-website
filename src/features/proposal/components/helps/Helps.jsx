import { useState, useEffect, useRef } from "react";
import { HelpsStyled, Title, TextContainer, Subtitle, Text, Chart, Column, Bar } from "./styles";
import useScrollPosition from "@hooks/useScrollPosition";
import useProposal from "@hooks/useProposal";
import currencyFormat from "@utils/currencyFormat";

const Helps = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollPosition = useScrollPosition();
    const helpsRef = useRef(null);

    const { proposal } = useProposal();

    const percentage = proposal.summary.economic.helps / proposal.summary.economic.total * 100;

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
                        <span>{currencyFormat(proposal.summary.economic.total, 0)}</span>
                    </Bar>
                </Column>

                <Column>
                    <p>Cantidad subvencionada</p>
                    <Bar index={2} isVisible={isVisible} percentage={percentage}>
                        <span>{currencyFormat(proposal.summary.economic.helps, 0)}</span>
                    </Bar>
                </Column>
            </Chart>
        </HelpsStyled>
    );
};

export default Helps;
