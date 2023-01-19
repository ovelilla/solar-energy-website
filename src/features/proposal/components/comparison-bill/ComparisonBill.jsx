import { useState, useEffect, useRef } from "react";
import { ComparisonBillStyled, Title, TextContainer, Subtitle, Text, Chart, Column, Bar } from "./styles";
import useScrollPosition from "@hooks/useScrollPosition";

const ComparisonBill = () => {
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
        <ComparisonBillStyled ref={helpsRef}>
            <Title>Comparativa de factura</Title>

            <Chart>
                <Column>
                    <p>Factura mensual actual</p>
                    <Bar index={1} isVisible={isVisible}>
                        <span>110 €</span>
                    </Bar>
                </Column>

                <Column>
                    <p>actura con autoconsumo</p>
                    <Bar index={2} isVisible={isVisible}>
                        <span>30 €</span>
                    </Bar>
                </Column>
            </Chart>
        </ComparisonBillStyled>
    );
};

export default ComparisonBill;
