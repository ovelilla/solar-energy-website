import Icon from "./Icon";

const Consumption = ({ proposal }) => {
    return (
        <>
            <Icon />

            <div>
                <span>{proposal.consumption} €/mes</span>
                <span>Consumo mensual</span>
            </div>
        </>
    );
};

export default Consumption;
