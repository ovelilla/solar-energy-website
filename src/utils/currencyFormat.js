const currencyFormat = (amount, decimals = 2) => {
    const options = {
        style: "currency",
        currency: "EUR",
        useGrouping: true,
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    };

    return new Intl.NumberFormat("es-ES", options).format(amount);
};

export default currencyFormat;
