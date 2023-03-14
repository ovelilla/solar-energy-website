import { useState, useEffect, useRef } from "react";
import { ComparisonBillStyled, Title, Chart, Column, Bar } from "./styles";
import useScrollPosition from "@hooks/useScrollPosition";
import useProposal from "@hooks/useProposal";
import currencyFormat from "@utils/currencyFormat";

const ComparisonBill = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollPosition = useScrollPosition();
    const helpsRef = useRef(null);

    const { proposal } = useProposal();

    const lastInvoiceEnergyCost = proposal.consumption.lastInvoiceEnergyCost;
    const invoiceEnergyCostWithSolar = proposal.consumption.invoiceEnergyCostWithSolar;

    const percentage = (invoiceEnergyCostWithSolar / lastInvoiceEnergyCost) * 100;
    const resultPercentage = percentage < 0 ? 0 : percentage;

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
                        <span>{currencyFormat(lastInvoiceEnergyCost, 0)}</span>
                    </Bar>
                </Column>

                <Column>
                    <p>Factura con autoconsumo</p>
                    <Bar index={2} isVisible={isVisible} percentage={resultPercentage}>
                        <span>{currencyFormat(invoiceEnergyCostWithSolar, 0)}</span>
                    </Bar>
                </Column>
            </Chart>
        </ComparisonBillStyled>
    );
};

export default ComparisonBill;
