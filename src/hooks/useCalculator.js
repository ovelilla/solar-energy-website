import { useContext } from "react";
import CalculatorContext from "@context/CalculatorProvider";

const useCalculator = () => {
    return useContext(CalculatorContext);
};

export default useCalculator;
