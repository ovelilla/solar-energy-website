import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useDebounce from "@hooks/useDebounce";
import useProposal from "@hooks/useProposal";

import Spinner from "@features/ui/spinner";

import { FormStyled, Field, StyledMapPinIcon, Input, Button, StyledArrowRightIcon } from "./styles";
import { white } from "@shared/styles/colors";

const Form = ({
    predictions,
    setPredictions,
    fetchPredictions,
    inputValue,
    setInputValue,
    selectedIndex,
    setSelectedIndex,
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const debouncedInputValue = useDebounce(inputValue, 500);
    const { proposal, setProposal, resetProposal } = useProposal();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (proposal.placeId) {
            navigate("/roof");
        }
    };

    const handleInput = async (e) => {
        setInputValue(e.target.value);
        setIsLoading(true);
        setSelectedIndex(-1);
        resetProposal();
    };

    const handleKeyDown = (e) => {
        const predictionsLength = predictions.length;

        if (e.key === "ArrowDown") {
            setSelectedIndex((selectedIndex + 1) % predictionsLength);
        } else if (e.key === "ArrowUp") {
            setSelectedIndex(
                selectedIndex === -1
                    ? predictionsLength - 1
                    : (selectedIndex - 1 + predictionsLength) % predictionsLength
            );
        } else if (e.key === "Enter") {
            if (selectedIndex === -1) {
                return;
            }
            setSelectedIndex(-1);
            setInputValue(predictions[selectedIndex].description);
            setPredictions([]);
            setProposal({
                placeId: predictions[selectedIndex].place_id,
                address: predictions[selectedIndex].description,
            });
        }
    };

    useEffect(() => {
        if (proposal.placeId || inputValue !== debouncedInputValue) {
            return;
        }

        fetchPredictions(debouncedInputValue);
        setIsLoading(false);
    }, [debouncedInputValue]);

    return (
        <FormStyled predictions={predictions} onSubmit={handleSubmit}>
            <Field predictions={predictions}>
                <StyledMapPinIcon />

                <Input
                    type="text"
                    placeholder="Introduce tu dirección"
                    value={inputValue}
                    onInput={handleInput}
                    onKeyDown={handleKeyDown}
                />

                <Button type="submit" aria-label="Buscar">
                    {isLoading ? <Spinner color={white} width={4} /> : <StyledArrowRightIcon />}
                </Button>
            </Field>
        </FormStyled>
    );
};

export default Form;
