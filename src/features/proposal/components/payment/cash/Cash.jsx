import { Summary, Header, Body, Item, ColumnLeft, ColumnRight, Icon } from "./styles";

import Financing from "@features/proposal/components/payment/financing";
import Crown from "@shared/icons/Crown";
import Shield from "@shared/icons/Shield";
import Chart from "@shared/icons/Chart";

const Payment = () => {
    return (
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

            <Financing title="¿Financiación?" />
        </Summary>
    );
};

export default Payment;
