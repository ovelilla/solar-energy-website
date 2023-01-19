import { useState, useRef } from "react";
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

const Battery = ({ title }) => {
    const [open, setOpen] = useState(false);
    const [height, setHeight] = useState(0);
    const [selected, setSelected] = useState(1);

    const ref = useRef(null);

    return (
        <BatteryStyled>
            <Button
                onClick={() => {
                    setOpen(!open);
                    setHeight(open ? 0 : ref.current.scrollHeight);
                }}
                open={open}
            >
                <ButtonContainer>
                    <Switch checked={open} />
                    <span>{title}</span>
                </ButtonContainer>

                <ArrowDown />
            </Button>

            <Collapse ref={ref} collapseHeight={height}>
                <Container>
                    <Grid>
                        <Item selected={selected === 1} onClick={() => setSelected(1)}>
                            <Content>
                                <BatteryIcon />
                                <Type selected={selected === 1}>HUAWEI Luna de 5kW</Type>
                            </Content>
                        </Item>

                        <Item selected={selected === 2} onClick={() => setSelected(2)}>
                            <Content>
                                <BatteryIcon />
                                <Type selected={selected === 2}>HUAWEI Luna de 10kW</Type>
                            </Content>
                        </Item>

                        <Item selected={selected === 3} onClick={() => setSelected(3)}>
                            <Content>
                                <BatteryIcon />
                                <Type selected={selected === 3}>HUAWEI Luna de 15kW</Type>
                            </Content>
                        </Item>
                    </Grid>
                </Container>
            </Collapse>
        </BatteryStyled>
    );
};

export default Battery;
