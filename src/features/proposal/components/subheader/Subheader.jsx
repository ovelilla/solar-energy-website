import { SubheaderStyled, Container, Info, Line, Action, Button } from "./styles";
import useWindowSize from "@hooks/useWindowSize";
import { breakpoints } from "@shared/styles/sizes";
import useProposal from "@hooks/useProposal";
import currencyFormat from "@utils/currencyFormat";

const Subheader = () => {
    const { width } = useWindowSize();
    const { proposal } = useProposal();

    return (
        <SubheaderStyled>
            <Container>
                <Info>
                    <div>
                        <span>PVP, IVA incluido</span>
                        <span>{currencyFormat(proposal.summary.economic.total, 0)}</span>
                    </div>

                    {width >= breakpoints.md && (
                        <>
                            <Line />

                            <div>
                                <span>Ahorro estimado</span>
                                <span>{currencyFormat(proposal.summary.savings.yearly25, 0)}</span>
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
