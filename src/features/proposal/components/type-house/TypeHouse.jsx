import { useState } from "react";
import { TypeHouseStyled, Text, Title, Subtitle, Grid, Card, Content, Type } from "./styles";
import House from "@shared/icons/House";
import Building from "@shared/icons/Building";
import Industry from "@shared/icons/Industry";
import useWindowSize from "@hooks/useWindowSize";
import CustomOffer from "@features/proposal/components/custom-offer";

const TypeHouse = () => {
    const [openModal, setOpenModal] = useState(false);
    const [selected, setSelected] = useState(1);
    const { width } = useWindowSize();

    const handleSelect = (option) => {
        setSelected(option);

        if (option !== 1) {
            setOpenModal(true);
        }
    };

    return (
        <>
            {openModal && <CustomOffer open={openModal} onClose={() => setOpenModal(false)} />}

            <TypeHouseStyled>
                <Text>
                    <Title>¿Qué tipo de vivienda tienes?</Title>
                    <Subtitle>Selecciona el tipo de vivienda que tienes</Subtitle>
                </Text>

                <Grid>
                    <Card selected={selected === 1} onClick={() => handleSelect(1)}>
                        <Content>
                            <House />
                            {width >= 768 && <Type selected={selected === 1}>Unifamiliar</Type>}
                        </Content>
                    </Card>

                    <Card selected={selected === 2} onClick={() => handleSelect(2)}>
                        <Content>
                            <Building />
                            {width >= 768 && <Type selected={selected === 2}>Residencial</Type>}
                        </Content>
                    </Card>

                    <Card selected={selected === 3} onClick={() => handleSelect(3)}>
                        <Content>
                            <Industry />
                            {width >= 768 && <Type selected={selected === 3}>Comercial</Type>}
                        </Content>
                    </Card>
                </Grid>
            </TypeHouseStyled>
        </>
    );
};

export default TypeHouse;
