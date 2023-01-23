import { useEffect } from "react";

import useDebounce from "@hooks/useDebounce";
import useProposal from "@hooks/useProposal";

import Spinner from "@features/ui/spinner";

import { FormStyled, Field, StyledMapPinIcon, Input, Button, StyledArrowRightIcon } from "./styles";
import { white } from "@shared/styles/colors";

const Form = ({ inputValue, setInputValue, selectedIndex, setSelectedIndex }) => {
    
    const debouncedInputValue = useDebounce(inputValue, 500);
    const {
        isPredictionLoading,
        setIsPredictionLoading,
        predictions,
        setPredictions,
        fetchPredictions,
        proposal,
        setProposal,
        createProposal,
        resetProposal,
    } = useProposal();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await createProposal();
    };

    const handleInput = async (e) => {
        setInputValue(e.target.value);
        setIsPredictionLoading(true);
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
                ...proposal,
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
        setIsPredictionLoading(false);
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
                    {isPredictionLoading ? (
                        <Spinner color={white} width={4} />
                    ) : (
                        <StyledArrowRightIcon />
                    )}
                </Button>
            </Field>
        </FormStyled>
    );
};

export default Form;
