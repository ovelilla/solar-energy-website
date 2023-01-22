import {
    Main,
    Container,
    LoaderContainer,
    SpinnerContainer,
    RingSvg,
    RingCircle,
    SpinnerSvg,
    SpinnerCircle,
    CircleContainer,
    Circle,
    Bars,
    Bar1,
    Bar2,
    Bar3,
} from "./styles";

const Loading = () => {
    return (
        <Main>
            <Container>
                <LoaderContainer>
                    <SpinnerContainer>
                        <RingSvg xmlns="http://www.w3.org/2000/svg" viewBox="25 25 50 50">
                            <RingCircle
                                cx="50"
                                cy="50"
                                r="20"
                                fill="none"
                                stroke-width="1.4"
                                stroke-miterlimit="10"
                            />
                        </RingSvg>

                        <SpinnerSvg xmlns="http://www.w3.org/2000/svg" viewBox="25 25 50 50">
                            <SpinnerCircle
                                cx="50"
                                cy="50"
                                r="20"
                                fill="none"
                                stroke-width="1.4"
                                stroke-miterlimit="10"
                            />
                        </SpinnerSvg>
                    </SpinnerContainer>

                    <CircleContainer>
                        <Circle>
                            <Bars>
                                <Bar1 />
                                <Bar2 />
                                <Bar3 />
                            </Bars>
                        </Circle>
                    </CircleContainer>
                </LoaderContainer>

                <p>Buscando tu dirección...</p>
            </Container>
        </Main>
    );
};

export default Loading;
