import { PickerStyled, Grid, Column, Title, Description, Address } from "./styles";

import useProposal from "@hooks/useProposal";
import useWindowSize from "@hooks/useWindowSize";

import { Map } from "@features/roof/components";

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
                            {width > breakpoints.sm && (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                </svg>
                            )}
                            <span>{proposal.address}</span>
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
