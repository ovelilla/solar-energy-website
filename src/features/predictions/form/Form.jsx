import { useEffect } from "react";
import useDebounce from "@hooks/useDebounce";
import useProposal from "@hooks/useProposal";
import Spinner from "@features/ui/spinner";
import { FormStyled, Field, StyledMapPinIcon, Input, Button, StyledArrowRightIcon } from "./styles";
import { white } from "@shared/styles/colors";

const Form = ({ inputValue, setInputValue, selectedIndex, setSelectedIndex }) => {
    const debouncedInputValue = useDebounce(inputValue, 300);
    const {
        loading,
        setLoading,
        disabled,
        predictions,
        setPredictions,
        fetchPredictions,
        handlePrediction,
        proposal,
        resetProposal,
    } = useProposal();

    const handleInput = (e) => {
        setInputValue(e.target.value);
        setLoading(true);
        setSelectedIndex(-1);
        resetProposal();
    };

    const handleKeyDown = (e) => {
        const predictionsLength = predictions.length;

        if (e.key === "ArrowDown") {
            setSelectedIndex((selectedIndex + 1) % predictionsLength);
        } else if (e.key === "ArrowUp") {
            setSelectedIndex((selectedIndex - 1 + predictionsLength) % predictionsLength);
        } else if (e.key === "Enter") {
            e.preventDefault();

            if (selectedIndex !== -1) {
                setSelectedIndex(-1);
                setInputValue(predictions[selectedIndex].description);
                setPredictions([]);
                handlePrediction(predictions[selectedIndex]);
            }
        }
    };

    useEffect(() => {
        if (inputValue === debouncedInputValue && !proposal) {
            fetchPredictions(debouncedInputValue);
            setLoading(false);
        }
    }, [debouncedInputValue]);

    return (
        <FormStyled predictions={predictions} onSubmit={(e) => e.preventDefault()}>
            <Field predictions={predictions}>
                <StyledMapPinIcon />

                <Input
                    type="text"
                    placeholder="Introduce tu dirección"
                    value={inputValue}
                    onInput={handleInput}
                    onKeyDown={handleKeyDown}
                    disabled={disabled}
                />

                <Button type="submit" aria-label="Buscar" disabled={loading}>
                    {loading ? <Spinner color={white} width={4} /> : <StyledArrowRightIcon />}
                </Button>
            </Field>
        </FormStyled>
    );
};

export default Form;
