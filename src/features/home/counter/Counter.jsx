import { useState, useEffect, useRef } from "react";
import { CounterStyled, Container, Grid, Column, StyledCountUp, Text } from "./styles";

import useScrollPosition from "@hooks/useScrollPosition";

const Counter = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollPosition = useScrollPosition();
    const counterRef = useRef(null);

    useEffect(() => {
        const counter = counterRef.current;
        const rect = counter.getBoundingClientRect();

        if (rect.top < window.innerHeight && rect.bottom > 0 && !isVisible) {
            setIsVisible(true);
        }
    }, [scrollPosition]);

    return (
        <CounterStyled ref={counterRef}>
            <Container>
                <Grid>
                    <Column>
                        {isVisible && <StyledCountUp duration={3} end={10} />}
                        <Text>Años de experiencia</Text>
                    </Column>

                    <Column>
                        {isVisible && <StyledCountUp duration={3} end={1250} />}
                        <Text>Clientes satisfechos</Text>
                    </Column>

                    <Column>
                        {isVisible && <StyledCountUp duration={3} end={850} />}
                        <Text>Proyectos realizados</Text>
                    </Column>
                </Grid>
            </Container>
        </CounterStyled>
    );
};

export default Counter;
