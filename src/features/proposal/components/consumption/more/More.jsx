import { useState, useRef, useEffect } from "react";
import ArrowDown from "@shared/icons/ArrowDown";
import {
    MoreStyled,
    Button,
    Collapse,
    Container,
    Grid,
    Field,
    Label,
    Input,
    Error,
} from "./styles";

import useForm from "@hooks/useForm";

const More = ({ title }) => {
    const [open, setOpen] = useState(false);
    const [height, setHeight] = useState(0);

    const ref = useRef(null);

    const { values, errors, setValues, setErrors, handleChange } = useForm({
        kWhConsumed: 500,
        contractedPower: 5,
        averagePrice: 40,
        iva: 21,
    });

    return (
        <MoreStyled>
            <Button
                onClick={() => {
                    setOpen(!open);
                    setHeight(open ? 0 : ref.current.scrollHeight);
                }}
                open={open}
            >
                <span>{title}</span>

                <ArrowDown />
            </Button>
            <Collapse ref={ref} collapseHeight={height}>
                <Container>
                    <Grid>
                        <Field>
                            <Label>Kwh consumidos</Label>
                            <Input
                                type="number"
                                placeholder="kWh consumidos "
                                name="kWhConsumed"
                                value={values.kWhConsumed}
                                error={errors.kWhConsumed.length > 0}
                                onChange={handleChange}
                            />
                            {errors.kWhConsumed && <Error>{errors.kWhConsumed}</Error>}
                        </Field>

                        <Field>
                            <Label>Potencia contratada kW</Label>
                            <Input
                                type="number"
                                placeholder="Potencia contratada kW"
                                name="contractedPower"
                                value={values.contractedPower}
                                error={errors.contractedPower.length > 0}
                                onChange={handleChange}
                            />
                            {errors.contractedPower && <Error>{errors.contractedPower}</Error>}
                        </Field>
                    </Grid>

                    <Grid>
                        <Field>
                            <Label>Precio medio kW</Label>
                            <Input
                                type="number"
                                placeholder="Precio medio kW"
                                name="averagePrice"
                                value={values.averagePrice}
                                error={errors.averagePrice.length > 0}
                                onChange={handleChange}
                            />
                            {errors.averagePrice && <Error>{errors.averagePrice}</Error>}
                        </Field>

                        <Field>
                            <Label>IVA</Label>
                            <Input
                                type="number"
                                placeholder="IVA"
                                name="iva"
                                value={values.iva}
                                error={errors.iva.length > 0}
                                onChange={handleChange}
                            />
                            {errors.iva && <Error>{errors.iva}</Error>}
                        </Field>
                    </Grid>
                </Container>
            </Collapse>
        </MoreStyled>
    );
};

export default More;
