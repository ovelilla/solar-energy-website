import { Container, ListStyled, Item } from "./styles";
import useProposal from "@hooks/useProposal";

const List = ({ setInputValue, selectedIndex, setSelectedIndex }) => {
    const { predictions, setPredictions, proposal, setProposal } = useProposal();

    const handleClick = (prediction) => {
        setPredictions([]);
        setInputValue(prediction.description);
        setSelectedIndex(-1);
        setProposal({
            ...proposal,
            placeId: prediction.place_id,
            address: prediction.description,
        });
    };

    return (
        <Container>
            {predictions.length > 0 && (
                <ListStyled>
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
                </ListStyled>
            )}
        </Container>
    );
};

export default List;
