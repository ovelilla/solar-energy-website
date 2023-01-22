import { useState } from "react";
import {
    SendProposalStyled,
    Title,
    Text,
    Form,
    Field,
    Label,
    Input,
    Error,
    Notice,
} from "./styles";

import Modal from "@features/ui/modal";
import { Primary } from "@features/ui/button";

import useForm from "@hooks/useForm";

const SendProposal = ({ open, onClose }) => {
    const { values, errors, setValues, setErrors, handleChange } = useForm({
        fullName: "",
        phone: "",
        email: "",
    });

    const validDate = () => {
        const today = new Date();

        const newDate = new Date(today);
        newDate.setDate(today.getDate() + 15);

        const options = {
            dateStyle: "long",
        };

        return new Intl.DateTimeFormat("es-ES", options).format(newDate);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const errors = {};

        if (!values.fullName) {
            errors.fullName = "El nombre es obligatorio";
        }
        if (!values.phone) {
            errors.phone = "El teléfono es obligatorio";
        }
        if (!values.email) {
            errors.email = "El email es obligatorio";
        }

        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }
    };

    return (
        <Modal onClose={onClose}>
            <SendProposalStyled>
                <Title>Mándadme la propuesta</Title>

                <Text>
                    Rellene sus datos a continuación y uno de nuestros técnicos se pondrá en
                    contacto con usted. Los precios son válidos hasta el {validDate()}.
                </Text>

                <Form onSubmit={handleSubmit}>
                    <Field>
                        <Label>Nombre y Apellidos</Label>
                        <Input
                            type="text"
                            placeholder="Nombre"
                            name="fullName"
                            value={values.fullName}
                            error={errors.fullName.length > 0}
                            onChange={handleChange}
                        />
                        {errors.fullName && <Error>{errors.fullName}</Error>}
                    </Field>

                    <Field>
                        <Label>Teléfono</Label>
                        <Input
                            type="tel"
                            placeholder="Teléfono"
                            name="phone"
                            value={values.phone}
                            error={errors.phone.length > 0}
                            onChange={handleChange}
                        />
                        {errors.phone && <Error>{errors.phone}</Error>}
                    </Field>

                    <Field>
                        <Label>Correo electrónico</Label>
                        <Input
                            type="email"
                            placeholder="Correo electrónico"
                            name="email"
                            value={values.email}
                            error={errors.email.length > 0}
                            onChange={handleChange}
                        />
                        {errors.email && <Error>{errors.email}</Error>}
                    </Field>

                    <Primary type="submit">Enviar</Primary>

                    <Notice>
                        Al enviar sus datos, acepta nuestra política de privacidad y cookies. Las
                        llamadas pueden ser grabadas para formación y/o control de calidad. Para más
                        información visita nuestra Política de Privacidad en esta página.
                    </Notice>
                </Form>
            </SendProposalStyled>
        </Modal>
    );
};

export default SendProposal;
