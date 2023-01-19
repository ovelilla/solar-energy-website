import { CustomOfferStyled, Title, Text } from "./styles";

import Modal from "@features/ui/modal";

const Information = ({ open, onClose }) => {
    return (
        <Modal open={open} onClose={onClose}>
            <CustomOfferStyled>
                <Title>Tipos de instalación</Title>

                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
                    consectetur nisl, sit amet tincidunt nisl. Sed euismod consectetur nisl, sit
                    amet tincidunt nisl.
                </Text>

                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
                    consectetur nisl, sit amet tincidunt nisl. Sed euismod consectetur nisl, sit
                    amet tincidunt nisl.
                </Text>

                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
                    consectetur nisl, sit amet tincidunt nisl. Sed euismod consectetur nisl, sit
                    amet tincidunt nisl.
                </Text>
            </CustomOfferStyled>
        </Modal>
    );
};

export default Information;
