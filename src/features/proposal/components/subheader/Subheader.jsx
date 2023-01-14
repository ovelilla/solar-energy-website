import { SubheaderStyled, Container, Info, Line, Action, Button } from "./styles";

import useWindowSize from "@hooks/useWindowSize";
import { breakpoints } from "@shared/styles/sizes";

const Subheader = () => {
    const { width } = useWindowSize();

    return (
        <SubheaderStyled>
            <Container>
                <Info>
                    <div>
                        <span>PVP, IVA incluido</span>
                        <span>6.430 €</span>
                    </div>

                    {width >= breakpoints.md && (
                        <>
                            <Line />

                            <div>
                                <span>Ahorro estimado</span>
                                <span>34.000 €</span>
                            </div>
                        </>
                    )}
                </Info>

                <Action>
                    <Button type="button" onClick={() => {}}>
                        <span>Obtener propuesta</span>
                    </Button>
                </Action>
            </Container>
        </SubheaderStyled>
    );
};

export default Subheader;
