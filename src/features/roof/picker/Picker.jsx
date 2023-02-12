import { PickerStyled, Grid, Column, Title, Description, Address } from "./styles";

import useProposal from "@hooks/useProposal";
import useWindowSize from "@hooks/useWindowSize";

import Map from "@features/roof/map";
import Tag from "@shared/icons/MapTag";
import { breakpoints } from "@shared/styles/sizes";

const Picker = () => {
    const { proposal } = useProposal();
    const { width } = useWindowSize();

    return (
        <PickerStyled>
            <Grid>
                <Column>
                    <Title>Ubica tu tejado</Title>

                    {width > breakpoints.sm ? (
                        <Description>
                            Para poder calcular el precio de tu instalación, necesitamos que nos
                            indiques dónde está tu tejado.
                        </Description>
                    ) : (
                        <Description>
                            Desplaza el mapa para ubicar tu tejado y ofrecerte el mejor precio.
                        </Description>
                    )}

                    {proposal.address && (
                        <Address>
                            {width > breakpoints.sm && <Tag />}
                            <span>{proposal.address.formattedAddress}</span>
                        </Address>
                    )}
                </Column>

                <Column>
                    <Map />
                </Column>
            </Grid>
        </PickerStyled>
    );
};

export default Picker;
