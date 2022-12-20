import { useState, useEffect, useRef } from "react";

import useDebounce from "@hooks/useDebounce";
import usePredictions from "@hooks/usePredictions";
import useProposal from "@hooks/useProposal";

import PredictionsList from "@features/predictions-list";
import Spinner from "@features/ui/spinner";

import { Form, Field, Container, StyledMapPinIcon, Input, Button, StyledArrowRightIcon } from "./styles";
import { white } from "@shared/styles/colors";

const PredictionsSearch = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const { predictions, setPredictions, fetchPredictions } = usePredictions();
    const debouncedInputValue = useDebounce(inputValue, 500);
    const { proposal, setProposal, resetProposal } = useProposal();
    const formRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
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
        <Form ref={formRef} onSubmit={handleSubmit}>
            <Field predictions={predictions}>
                <Container predictions={predictions}>
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
                </Container>
            </Field>

            {predictions.length > 0 && (
                <PredictionsList
                    predictions={predictions}
                    setPredictions={setPredictions}
                    setInputValue={setInputValue}
                    selectedIndex={selectedIndex}
                    setSelectedIndex={setSelectedIndex}
                />
            )}
        </Form>
    );
};

export default PredictionsSearch;
