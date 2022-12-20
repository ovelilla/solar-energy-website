import { useState, useEffect, useRef } from "react";
import { CounterStyled, Container, Grid, Column, Number, Text } from "./styles";

import useScrollPosition from "@hooks/useScrollPosition";

const Counter = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [number3, setNumber3] = useState(0);

    const scrollPosition = useScrollPosition();
    const counterRef = useRef(null);

    const animateCounter = (setCounter, target, delay) => {
        let current = 0;

        const interval = setInterval(() => {
            setCounter(current);
            current += 1;

            if (current > target) {
                clearInterval(interval);
            }
        }, delay);
    };

    useEffect(() => {
        const counter = counterRef.current;
        const rect = counter.getBoundingClientRect();

        if (rect.top < window.innerHeight && rect.bottom > 0 && !isVisible) {
            setIsVisible(true);
            animateCounter(setNumber1, 8, 100);
            animateCounter(setNumber2, 850, 5);
            animateCounter(setNumber3, 300, 20);
        }
    }, [scrollPosition]);

    return (
        <CounterStyled ref={counterRef}>
            <Container>
                <Grid>
                    <Column>
                        <Number>{number1}</Number>
                        <Text>Años de experiencia</Text>
                    </Column>

                    <Column>
                        <Number>{number2}</Number>
                        <Text>Clientes satisfechos</Text>
                    </Column>

                    <Column>
                        <Number>{number3}</Number>
                        <Text>Proyectos realizados</Text>
                    </Column>
                </Grid>
            </Container>
        </CounterStyled>
    );
};

export default Counter;
