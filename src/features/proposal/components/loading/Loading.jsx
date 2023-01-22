import {
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
    Text
} from "./styles";

const Loading = () => {
    return (
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

                <Text>
                    <p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                        </svg>
                        <span>Buscando instaladores en tu zona</span>
                    </p>
                    <p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                        </svg>
                        <span>Calculando el potencial de tu tejado</span>
                    </p>
                    <p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                        </svg>
                        <span>Preparando una primera estimación</span>
                    </p>
                </Text>
            </Container>

    );
};

export default Loading;
