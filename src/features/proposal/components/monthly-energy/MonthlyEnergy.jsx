import { useState, useEffect, useRef } from "react";
import {
    MonthlyEnergyStyled,
    Title,
    Container,
    Chart,
    Column,
    Lines,
    Line,
    AxisX,
    AxisY,
} from "./styles";
import useScrollPosition from "@hooks/useScrollPosition";
import useProposal from "@hooks/useProposal";

const MonthlyEnergy = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollPosition = useScrollPosition();
    const helpsRef = useRef(null);

    const { proposal } = useProposal();

    const highestEm = proposal.pvgis.monthly.reduce((acc, curr) => {
        return acc.E_m > curr.E_m ? acc : curr;
    }).E_m;

    useEffect(() => {
        const counter = helpsRef.current;
        const rect = counter.getBoundingClientRect();

        if (rect.top < window.innerHeight && rect.bottom > 0 && !isVisible) {
            setIsVisible(true);
        }
    }, [scrollPosition]);

    return (
        <MonthlyEnergyStyled ref={helpsRef}>
            <Title>Energía mensual (kWh)</Title>

            <Container>
                <AxisX>
                    <span>
                        E<span>ne</span>
                    </span>
                    <span>
                        F<span>eb</span>
                    </span>
                    <span>
                        M<span>ar</span>
                    </span>
                    <span>
                        A<span>br</span>
                    </span>
                    <span>
                        M<span>ay</span>
                    </span>
                    <span>
                        J<span>un</span>
                    </span>
                    <span>
                        J<span>ul</span>
                    </span>
                    <span>
                        A<span>go</span>
                    </span>
                    <span>
                        S<span>ep</span>
                    </span>
                    <span>
                        O<span>ct</span>
                    </span>
                    <span>
                        N<span>ov</span>
                    </span>
                    <span>
                        D<span>ic</span>
                    </span>
                </AxisX>
                <Chart>
                    {proposal.pvgis.monthly.map((item, index) => (
                        <Column
                            key={index}
                            isVisible={isVisible}
                            height={(item.E_m / highestEm) * 100}
                        />
                    ))}
                    <Lines>
                        <Line />
                        <Line />
                        <Line />
                        <Line />
                        <Line />
                        <Line />
                        <Line />
                        <Line />
                        <Line />
                    </Lines>
                </Chart>
                <AxisY>
                    <span>200</span>
                    <span>175</span>
                    <span>150</span>
                    <span>125</span>
                    <span>100</span>
                    <span>75</span>
                    <span>50</span>
                    <span>25</span>
                    <span>0</span>
                </AxisY>
            </Container>
        </MonthlyEnergyStyled>
    );
};

export default MonthlyEnergy;
