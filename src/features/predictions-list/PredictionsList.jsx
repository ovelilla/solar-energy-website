import { Container, List, Item } from "./styles";

import useProposal from "@hooks/useProposal";

const PredictionsList = ({ predictions, setPredictions, setInputValue, selectedIndex, setSelectedIndex }) => {
    const { setProposal } = useProposal();

    const handleClick = (prediction) => {
        setPredictions([]);
        setInputValue(prediction.description);
        setSelectedIndex(-1);
        setProposal({
            placeId: prediction.place_id,
            address: prediction.description,
        });
    };

    return (
        <Container>
            {predictions.length > 0 && (
                <List>
                    {predictions.map((prediction, index) => (
                        <Item
                            key={prediction.place_id}
                            selected={index === selectedIndex}
                            onClick={(e) => {
                                e.stopPropagation();
                                handleClick(prediction);
                            }}
                        >
                            {prediction.terms[0].value}, {prediction.terms[1].value}
                        </Item>
                    ))}
                </List>
            )}
        </Container>
    );
};

export default PredictionsList;
