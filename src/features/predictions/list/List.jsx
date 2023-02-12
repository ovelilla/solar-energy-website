import { useEffect } from "react";
import { Container, ListStyled, Item } from "./styles";
import useProposal from "@hooks/useProposal";

const List = ({ formRef, setInputValue, selectedIndex, setSelectedIndex }) => {
    const { predictions, setPredictions, handlePrediction } = useProposal();

    const handleClick = (prediction) => {
        setPredictions([]);
        setInputValue(prediction.description);
        setSelectedIndex(-1);
        handlePrediction(prediction);
    };

    const handleClickOutside = (e) => {
        if (formRef.current && !formRef.current.contains(e.target)) {
            setSelectedIndex(-1);
            setInputValue("");
            setPredictions([]);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

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
                            {prediction.description}
                        </Item>
                    ))}
                </ListStyled>
            )}
        </Container>
    );
};

export default List;
