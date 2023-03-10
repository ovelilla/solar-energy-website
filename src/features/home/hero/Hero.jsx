import { HeroStyled, Container, Title, Paragraph } from "./styles";

import Predictions from "@features/predictions";

const Hero = () => {
    return (
        <HeroStyled>
            <img
                src="/img/paneles-solares-tejado-casa.jpg"
                alt="Paneles solares en tejado de casa"
            />
            <Container>
                <Title>
                    <span>Energía solar</span>
                    <span>para tu casa</span>
                </Title>

                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec mi augue.
                    Curabitur nec mauris porttitor, porta augue eu, ultrices eros. Nunc a facilisis
                    nibh, et efficitur nibh.
                </Paragraph>

                <Predictions />
            </Container>
        </HeroStyled>
    );
};

export default Hero;
