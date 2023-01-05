import { useEffect, useRef } from "react";
import { MapContainer, Marker } from "./styles";

import useProposal from "@hooks/useProposal";

const Map = () => {
    const mapRef = useRef();

    const { proposal, setProposal } = useProposal();

    useEffect(() => {
        const map = new google.maps.Map(mapRef.current, {
            center: { lat: 40.41695, lng: -3.7035 },
            zoom: 18,
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
        <>
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
        </>
    );
};

export default Map;
