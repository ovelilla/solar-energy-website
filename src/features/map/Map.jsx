import { useEffect, useRef } from "react";
import { MapStyled, Container, MapContainer } from "./styles";
import axios from "axios";

import useProposal from "@hooks/useProposal";

const Map = () => {
    const mapRef = useRef();
    const { proposal } = useProposal();

    useEffect(() => {
        const getCoordinates = async () => {
            const url = "https://maps.googleapis.com/maps/api/place/details/json";

            const params = {
                place_id: proposal.placeId,
                key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
            };

            const { data } = await axios.get(url, { params });
            console.log(data);
        };

        getCoordinates();
        const map = new google.maps.Map(mapRef.current, {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8,
        });
    }, []);

    return (
        <MapStyled>
            <Container>
                <MapContainer ref={mapRef} />
            </Container>
        </MapStyled>
    );
};

export default Map;
