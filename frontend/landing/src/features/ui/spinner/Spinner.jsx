import React from "react";

import { Svg, Circle } from "./styles";

const Spinner = ({ color, width }) => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="25 25 50 50">
            <Circle cx="50" cy="50" r="20" fill="none" stroke={color} strokeWidth={width} strokeMiterlimit="10" />
        </Svg>
    );
};

export default Spinner;
