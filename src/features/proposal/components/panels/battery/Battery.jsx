import { useState, useRef, useEffect } from "react";
import ArrowDown from "@shared/icons/ArrowDown";
import {
    BatteryStyled,
    Button,
    ButtonContainer,
    Collapse,
    Container,
    Grid,
    Item,
    Content,
    Type,
} from "./styles";
import Switch from "@features/proposal/components/panels/switch";
import BatteryIcon from "@shared/icons/Battery";
import useProposal from "@hooks/useProposal";
import useCalculator from "@hooks/useCalculator";

const capacities = [5, 10, 15];

const Battery = ({ title }) => {
    const { proposal, setProposal } = useProposal();
    const { change, setChange, setUpdate, batteries } = useCalculator();

    const battery = proposal.installation.battery || null;

    const ref = useRef(null);

    const [height, setHeight] = useState(0);
    const [selected, setSelected] = useState(battery ? capacities.indexOf(battery.capacity) : 0);

    useEffect(() => {
        setHeight(proposal.installation.hasBattery ? ref.current.scrollHeight : 0);
    }, []);
    

    const handleClickButton = () => {
        setHeight(proposal.installation.hasBattery ? 0 : ref.current.scrollHeight);

        const battery = batteries.find((b) => b.capacity === capacities[selected]);

        setChange(!change);
        setProposal({
            ...proposal,
            installation: {
                ...proposal.installation,
                hasBattery: !proposal.installation.hasBattery,
                battery: battery,
            },
        });
        setUpdate(true);
    };

    const handleClickItem = (index) => {
        setSelected(index);

        const battery = batteries.find((b) => b.capacity === capacities[index]);

        setChange(!change);
        setProposal({
            ...proposal,
            installation: {
                ...proposal.installation,
                battery: battery,
            },
        });
        setUpdate(true);
    };

    return (
        <BatteryStyled>
            <Button onClick={handleClickButton} open={proposal.installation.hasBattery}>
                <ButtonContainer>
                    <Switch checked={proposal.installation.hasBattery} />
                    <span>{title}</span>
                </ButtonContainer>

                <ArrowDown />
            </Button>

            <Collapse ref={ref} collapseHeight={height}>
                <Container>
                    <Grid>
                        <Item selected={selected === 0} onClick={() => handleClickItem(0)}>
                            <Content>
                                <BatteryIcon />
                                <Type selected={selected === 0}>HUAWEI Luna de 5kW</Type>
                            </Content>
                        </Item>

                        <Item selected={selected === 1} onClick={() => handleClickItem(1)}>
                            <Content>
                                <BatteryIcon />
                                <Type selected={selected === 1}>HUAWEI Luna de 10kW</Type>
                            </Content>
                        </Item>

                        <Item selected={selected === 2} onClick={() => handleClickItem(2)}>
                            <Content>
                                <BatteryIcon />
                                <Type selected={selected === 2}>HUAWEI Luna de 15kW</Type>
                            </Content>
                        </Item>
                    </Grid>
                </Container>
            </Collapse>
        </BatteryStyled>
    );
};

export default Battery;
