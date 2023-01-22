import { useState } from "react";

const usePredictions = () => {
    const [predictions, setPredictions] = useState([]);

    const fetchPredictions = (inputValue) => {
        if (!inputValue) {
            setPredictions([]);
            return;
        }

        const options = {
            input: inputValue,
            types: ["address"],
            componentRestrictions: { country: "es" },
        };

        const autocompleteService = new google.maps.places.AutocompleteService();

        autocompleteService.getPlacePredictions(options, (predictions, status) => {
            if (status !== google.maps.places.PlacesServiceStatus.OK) {
                setPredictions([]);
                return;
            }

            setPredictions(predictions);
        });
    };

    return { predictions, setPredictions, fetchPredictions };
};

export default usePredictions;
