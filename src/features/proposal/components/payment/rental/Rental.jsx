import { Summary, Header, Body, Item, ColumnLeft, ColumnRight, Icon } from "./styles";

import Saving from "@shared/icons/Saving";
import Shield from "@shared/icons/Shield";
import Bag from "@shared/icons/Bag";

const Payment = () => {
    return (
        <Summary>
            <Header>
                <p>Estimación precio de instalación</p>
                <p>56 €/mes</p>
            </Header>

            <Body>
                <Item>
                    <ColumnLeft>
                        <Icon>
                            <Saving />
                        </Icon>
                    </ColumnLeft>

                    <ColumnRight>
                        <h3>Ahorro desde el primer día</h3>
                        <p>Baja tu factura de la luz y recibe una compensación por la energía que no consumas.</p>
                    </ColumnRight>
                </Item>

                <Item>
                    <ColumnLeft>
                        <Icon>
                            <Shield />
                        </Icon>
                    </ColumnLeft>

                    <ColumnRight>
                        <h3>20 años de tranquilidad</h3>
                        <p>Monitorizamos tu sistema y nos encargamos de su mantenimiento.</p>
                    </ColumnRight>
                </Item>

                <Item>
                    <ColumnLeft>
                        <Icon>
                            <Bag />
                        </Icon>
                    </ColumnLeft>

                    <ColumnRight>
                        <h3>Facilidad para la compra</h3>
                        <p>Con cada cuota, cae el precio de compra del sistema, lo que hace adquirirlo más y más accesible.</p>
                    </ColumnRight>
                </Item>
            </Body>
        </Summary>
    );
};

export default Payment;
