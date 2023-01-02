import { useState, useEffect, useRef } from "react";

import usePredictions from "@hooks/usePredictions";

import Form from "@features/predictions/form";
import List from "@features/predictions/list";

import { PredictionsStyled } from "./styles";

const Predictions = () => {
    const [inputValue, setInputValue] = useState("");
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const { predictions, setPredictions, fetchPredictions } = usePredictions();
    const formRef = useRef(null);

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
        <PredictionsStyled ref={formRef}>
            <Form
                predictions={predictions}
                setPredictions={setPredictions}
                fetchPredictions={fetchPredictions}
                inputValue={inputValue}
                setInputValue={setInputValue}
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
            />

            {predictions.length > 0 && (
                <List
                    predictions={predictions}
                    setPredictions={setPredictions}
                    setInputValue={setInputValue}
                    selectedIndex={selectedIndex}
                    setSelectedIndex={setSelectedIndex}
                />
            )}
        </PredictionsStyled>
    );
};

export default Predictions;
