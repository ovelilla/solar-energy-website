import { useState } from "react";
import {
    Summary,
    Header,
    Body,
    Item,
    ColumnLeft,
    ColumnRight,
    Icon,
    Footer,
    InfoButton,
} from "./styles";

import Checkbox from "@features/proposal/components/payment/checkbox";
import Financing from "@features/proposal/components/payment/financing";
import Crown from "@shared/icons/Crown";
import Shield from "@shared/icons/Shield";
import Chart from "@shared/icons/Chart";
import Info from "@shared/icons/Info";

const Payment = () => {
    const [financing, setFinancing] = useState(false);
    const [openModalFinancing, setOpenModalFinancing] = useState(false);

    return (
        <>
            {openModalFinancing && (
                <Financing open={openModalFinancing} onClose={() => setOpenModalFinancing(false)} />
            )}

            <Summary>
                <Header>
                    <p>Estimación precio de instalación</p>
                    <p>6.430 €</p>
                </Header>

                <Body>
                    <Item>
                        <ColumnLeft>
                            <Icon>
                                <Chart />
                            </Icon>
                        </ColumnLeft>

                        <ColumnRight>
                            <h3>Rápido retorno de la inversión</h3>
                            <p>Comprando el sistema, no tendrás que abonar ningún coste más.</p>
                        </ColumnRight>
                    </Item>

                    <Item>
                        <ColumnLeft>
                            <Icon>
                                <Crown />
                            </Icon>
                        </ColumnLeft>

                        <ColumnRight>
                            <h3>Control de tu instalación</h3>
                            <p>Es tu instalación, disfrútala como quieras.</p>
                        </ColumnRight>
                    </Item>

                    <Item>
                        <ColumnLeft>
                            <Icon>
                                <Shield />
                            </Icon>
                        </ColumnLeft>

                        <ColumnRight>
                            <h3>Hasta 25 años de garatía</h3>
                            <p>Comprando el sistema, no tendrás que abonar ningún coste más.</p>
                        </ColumnRight>
                    </Item>
                </Body>

                <Footer>
                    <Checkbox
                        label="Necesito financiación"
                        checked={financing}
                        onChange={() => setFinancing(!financing)}
                    />
                    <InfoButton onClick={() => setOpenModalFinancing(true)}>
                        <Info />
                    </InfoButton>
                </Footer>
            </Summary>
        </>
    );
};

export default Payment;
