import { useEffect, useRef } from "react";
import { MapStyled, Container, Grid, Column, MapContainer, Marker } from "./styles";

import useWindowSize from "@hooks/useWindowSize";
import useProposal from "@hooks/useProposal";
import { breakpoints } from "@shared/styles/sizes";

const Map = () => {
    const mapRef = useRef();
    const { width } = useWindowSize();
    const { proposal, setProposal } = useProposal();

    useEffect(() => {
        const map = new google.maps.Map(mapRef.current, {
            center: { lat: 40.41695, lng: -3.7035 },
            zoom: 19,
            mapTypeId: "satellite",
            tilt: 0,
            disableDefaultUI: true,
            styles: [
                {
                    featureType: "poi",
                    stylers: [{ visibility: "off" }],
                },
            ],
            minZoom: 14,
        });

        const service = new google.maps.places.PlacesService(map);

        const request = {
            placeId: proposal.placeId,
            fields: ["name", "geometry"],
        };

        service.getDetails(request, (place, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                const latitude = place.geometry.location.lat();
                const longitude = place.geometry.location.lng();

                map.setCenter({ lat: latitude, lng: longitude });
            } else {
                console.log("Error: ", status);
            }
        });

        map.addListener("dragend", () => {
            const center = map.getCenter();

            const latitude = center.lat();
            const longitude = center.lng();

            const geocoder = new google.maps.Geocoder();
            const latlng = new google.maps.LatLng(latitude, longitude);

            geocoder.geocode({ location: latlng }, (results, status) => {
                if (status === "OK") {
                    if (results[0]) {
                        const placeId = results[0].place_id;
                        const address = results[0].formatted_address;

                        setProposal({ placeId, address, latitude, longitude });
                    } else {
                        console.log("No results found");
                    }
                } else {
                    console.log("Geocoder failed due to: ", status);
                }
            });
        });
    }, []);

    return (
        <MapStyled>
            <Container>
                <Grid>
                    <Column>
                        <h1>Ubica tu tejado</h1>

                        {width > breakpoints.sm ? (
                            <p>
                                Para poder calcular el precio de tu instalación, necesitamos que nos
                                indiques dónde está tu tejado.
                            </p>
                        ) : (
                            <p>
                                Desplaza el mapa para ubicar tu tejado y ofrecerte el mejor precio.
                            </p>
                        )}

                        {proposal.address && (
                            <>
                                <p>
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
                                    <span>{proposal.address}</span>
                                </p>
                            </>
                        )}
                    </Column>

                    <Column>
                        <MapContainer ref={mapRef} />
                        <Marker>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                            </svg>
                        </Marker>
                    </Column>
                </Grid>
            </Container>
        </MapStyled>
    );
};

export default Map;
