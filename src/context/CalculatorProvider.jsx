import { createContext, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import axios from "@config/axios";
import useProposal from "@hooks/useProposal";

const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [fetch, setFetch] = useState(false);
    const [change, setChange] = useState(false);
    const [update, setUpdate] = useState(false);
    const [panels, setPanels] = useState([]);
    const [batteries, setBatteries] = useState([]);
    const [inverters, setInverters] = useState([]);
    const [microinverters, setMicroinverters] = useState([]);
    const [meters, setMeters] = useState([]);
    const [structures, setStructures] = useState([]);
    const [peripherals, setPeripherals] = useState([]);
    const [lines, setLines] = useState([]);
    const [protections, setProtections] = useState([]);
    const [fixedCosts, setFixedCosts] = useState(null);
    const [habits, setHabits] = useState([]);

    const { proposal, setProposal, updateProposal } = useProposal();

    useEffect(() => {
        if (!fetch) {
            fetchAll();
        } else {
            handleCalculate();
            setChange(false);
        }
    }, [fetch, change]);

    useEffect(() => {
        if (update) {
            updateProposal();
            setUpdate(false);
        }
    }, [update]);

    const readPanels = async () => {
        try {
            const { data } = await axios.get("/panel");
            setPanels(data);
        } catch (error) {
            console.log(error);
        }
    };

    const readBatteries = async () => {
        try {
            const { data } = await axios.get("/battery");
            setBatteries(data);
        } catch (error) {
            console.log(error);
        }
    };

    const readInverters = async () => {
        try {
            const { data } = await axios.get("/inverter");
            setInverters(data);
        } catch (error) {
            console.log(error);
        }
    };

    const readMicroinverters = async () => {
        try {
            const { data } = await axios.get("/microinverter");
            setMicroinverters(data);
        } catch (error) {
            console.log(error);
        }
    };

    const readMeters = async () => {
        try {
            const { data } = await axios.get("/meter");
            setMeters(data);
        } catch (error) {
            console.log(error);
        }
    };

    const readStructures = async () => {
        try {
            const { data } = await axios.get("/structure");
            setStructures(data);
        } catch (error) {
            console.log(error);
        }
    };

    const readPeripherals = async () => {
        try {
            const { data } = await axios.get("/peripheral");
            setPeripherals(data);
        } catch (error) {
            console.log(error);
        }
    };

    const readLines = async () => {
        try {
            const { data } = await axios.get("/line");
            setLines(data);
        } catch (error) {
            console.log(error);
        }
    };

    const readProtections = async () => {
        try {
            const { data } = await axios.get("/protection");
            setProtections(data);
        } catch (error) {
            console.log(error);
        }
    };

    const readFixedCosts = async () => {
        try {
            const { data } = await axios.get("/fixed-costs");
            setFixedCosts(data);
        } catch (error) {
            console.log(error);
        }
    };

    const readHabits = async () => {
        try {
            const { data } = await axios.get("/habit");
            setHabits(data);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchAll = async () => {
        await Promise.all([
            readPanels(),
            readBatteries(),
            readInverters(),
            readMicroinverters(),
            readMeters(),
            readStructures(),
            readPeripherals(),
            readLines(),
            readProtections(),
            readFixedCosts(),
            readHabits(),
        ]);

        setFetch(true);

        setTimeout(() => {
            setLoading(false);
        }, 4000);
    };

    const handleCalculate = () => {
        const result = calculateProposal();

        setProposal({
            ...proposal,
            consumption: {
                ...proposal.consumption,
                invoiceEnergyCostWithSolar: result.savings.monthlyBillingWithSolar,
            },
            installation: result.installation,
            summary: {
                ...proposal.summary,
                savings: {
                    monthly: result.savings.monthly,
                    yearly: result.savings.yearly,
                    yearly25: result.savings.years25,
                },
                economic: {
                    investmentReturn: result.economic.investmentReturn,
                    iva: result.rate.summary.iva,
                    total: result.rate.summary.pvpWithBattery,
                    helps: result.economic.helps,
                },
            },
            payment: {
                ...proposal.payment,
                financing: {
                    ...proposal?.payment?.financing,
                    monthlyFee60: result.economic.monthlyFee60,
                    monthlyFee120: result.economic.monthlyFee120,
                },
            },
        });
    };

    const calculateRate = (params) => {
        const { modules, installationType, current, structureType, panelId, batteryId } = params;

        const stringsNumber = Math.ceil(modules / 11);

        const panel = panels.find((panel) => {
            return !panelId ? panel.active : panel._id === panelId;
        });
        const panelsPower = modules * panel.power;
        const panelsPrice = modules * panel.price;

        const inverter =
            inverters.find((inverter) => {
                return (
                    inverter.minCC <= panelsPower &&
                    inverter.maxCC >= panelsPower &&
                    inverter.current === current
                );
            }) || null;
        const inverterPrice = inverter && installationType === "String" ? inverter.price : 0;

        const microinverter =
            microinverters.find((microinverter) => {
                return (
                    microinverter.minCC <= panel.power &&
                    microinverter.maxCC >= panel.power &&
                    microinverter.current === current
                );
            }) || null;
        const microinvertersPrice =
            microinverter && installationType === "Microinversor"
                ? microinverter.price * modules
                : 0;

        const meter =
            meters.find((meter) => {
                return (
                    meter.minPanels <= modules &&
                    meter.maxPanels >= modules &&
                    meter.type === installationType &&
                    meter.current === current
                );
            }) || null;
        const meterPrice = meter ? meter.price : 0;

        const structure = structures.find((structure) => {
            return structure.type === structureType;
        });
        const structurePrice = panelsPower * structure.price;

        const activePeripherals =
            peripherals.filter((peripheral) => {
                return peripheral.active && peripheral.type === installationType;
            }) || [];
        const peripheralsPrice = activePeripherals.reduce((acc, peripheral) => {
            return acc + peripheral.price;
        }, 0);

        const equipmentPrice =
            panelsPrice +
            inverterPrice +
            microinvertersPrice +
            meterPrice +
            structurePrice +
            peripheralsPrice;

        const line =
            lines.find((line) => {
                return line.minPower <= panelsPower && line.maxPower >= panelsPower;
            }) || null;
        const linePrice = line ? line.price : 0;
        const installationCost = linePrice * panelsPower;

        const protectionAC =
            protections.find((protection) => {
                return protection.protectionType === "AC" && protection.current === current;
            }) || null;
        const protectionACPrice = protectionAC ? protectionAC.price : 0;
        const protectionDC =
            protections.find((protection) => {
                return (
                    protection.protectionType === "DC" &&
                    protection.installationType === installationType
                );
            }) || null;
        const protectionDCPrice = protectionDC ? protectionDC.price * stringsNumber : 0;
        const protectionsPrice = protectionACPrice + protectionDCPrice;

        const additionalStringNumber =
            installationType === "String" && stringsNumber > 1 ? stringsNumber - 1 : 0;
        const additionalStringPrice = additionalStringNumber * fixedCosts.additionalString;

        const PMCost = fixedCosts.PMCost * modules;
        const transportCost = fixedCosts.transports * modules;
        const legalizationCost = fixedCosts.legalization;
        const feesCost = fixedCosts.fees;
        const technicalVisitCost = fixedCosts.technicalVisit;
        const acquisitionCosts = fixedCosts.acquisitionCosts;
        const operatingCosts = fixedCosts.operatingCosts;
        const maintenanceCost = fixedCosts.maintenanceCost;
        const variousUnitCost = fixedCosts.variousUnit;
        const variousPowerCost = fixedCosts.variousPower * panelsPower;
        const variousModulesCost = fixedCosts.variousModules * modules;

        const totalFixedCosts =
            PMCost +
            transportCost +
            legalizationCost +
            feesCost +
            technicalVisitCost +
            acquisitionCosts +
            operatingCosts +
            maintenanceCost +
            variousUnitCost +
            variousPowerCost +
            variousModulesCost;

        const totalCost =
            equipmentPrice +
            installationCost +
            protectionsPrice +
            additionalStringPrice +
            totalFixedCosts;

        const totalCostWithMargin = totalCost + (totalCost * fixedCosts.profitability) / 100;
        const index = equipmentPrice / fixedCosts.index;

        const margin = index - totalCost;
        const profitability = (margin / index) * 100;

        const netPrice = profitability > 30 ? index : totalCostWithMargin;

        const pvp = netPrice + (netPrice * fixedCosts.ivaInstallation) / 100;
        const profit = netPrice - totalCost;
        const percentageProfit = (profit / netPrice) * 100;
        const eurosPerWatt = pvp / panelsPower;

        const battery =
            batteries.find((battery) => {
                return battery._id === batteryId;
            }) || null;
        const batteryPrice = battery ? battery.price : 0;
        const batteryPriceIva = batteryPrice + (batteryPrice * fixedCosts.ivaBatteries) / 100;
        const pvpWithBattery = pvp + batteryPriceIva;

        const iva = pvpWithBattery - pvpWithBattery / (1 + fixedCosts.ivaBatteries / 100);

        const rate = {
            general: {
                installationType,
                current,
            },
            equipment: {
                panel: {
                    id: panel._id,
                    description: panel.description,
                    power: panel.power,
                    price: panel.price,
                    modules: modules,
                    totalPower: panelsPower,
                    totalPrice: panelsPrice,
                },
                inverter: {
                    hasInverter: installationType === "String" ? true : false,
                    description: inverter ? inverter.description : "",
                    power: inverter ? inverter.power : 0,
                    range: inverter ? `${inverter.minCC} a ${inverter.maxCC}` : "",
                    price: inverter ? inverter.price : 0,
                },
                microinverter: {
                    hasMicroinverter: installationType === "Microinversor" ? true : false,
                    description: microinverter ? microinverter.description : "",
                    power: microinverter ? microinverter.power : 0,
                    range: microinverter ? `${microinverter.minCC} a ${microinverter.maxCC}` : "",
                    price: microinverter ? microinverter.price : 0,
                    modules,
                    totalPrice: microinvertersPrice,
                },
                meter: {
                    hasMeter: meter ? true : false,
                    description: meter ? meter.description : "",
                    range: meter ? `${meter.minPanels} a ${meter.maxPanels}` : "",
                    price: meter ? meter.price : 0,
                },
                structure: {
                    type: structureType,
                    description: structure.description,
                    price: structure.price,
                    totalPrice: structurePrice,
                },
                peripherals: {
                    activePeripherals,
                    totalPrice: peripheralsPrice,
                },
                battery: {
                    hasBattery: battery ? true : false,
                    description: battery ? battery.description : "",
                    capacity: battery ? battery.capacity : 0,
                    price: battery ? batteryPrice : 0,
                    priceIva: batteryPriceIva,
                },
                total: equipmentPrice,
            },
            installation: {
                strings: {
                    stringsNumber,
                    additionalStringNumber,
                    additionalStringPrice,
                },
                line: {
                    hasLine: line ? true : false,
                    description: line ? line.description : "",
                    range: line ? `${line.minPower} a ${line.maxPower}` : "",
                    price: line ? line.price : 0,
                    installationCost,
                },
                protections: {
                    protectionAC: {
                        hasProtectionAC: protectionAC ? true : false,
                        description: protectionAC ? protectionAC.description : "",
                        current: protectionAC ? protectionAC.current : 0,
                        price: protectionAC ? protectionAC.price : 0,
                    },
                    protectionDC: {
                        hasProtectionDC: protectionDC ? true : false,
                        description: protectionDC ? protectionDC.description : "",
                        current: protectionDC ? protectionDC.current : 0,
                        price: protectionDC ? protectionDC.price : 0,
                        totalPrice: protectionDCPrice,
                    },
                    totalPrice: protectionsPrice,
                },
                fixedCosts: {
                    PMCost,
                    transportCost,
                    legalizationCost,
                    feesCost,
                    technicalVisitCost,
                    acquisitionCosts,
                    operatingCosts,
                    maintenanceCost,
                    variousUnitCost,
                    variousPowerCost,
                    variousModulesCost,
                    total: totalFixedCosts,
                },
            },
            summary: {
                totalCost,
                totalCostWithMargin,
                index,
                margin,
                profitability,
                netPrice,
                pvp,
                profit,
                percentageProfit,
                eurosPerWatt,
                pvpWithBattery,
                iva,
            },
        };

        return rate;
    };

    const calculateProposal = () => {
        const { consumption, installation, pvgis } = proposal;
        const {
            lastInvoiceEnergyCost,
            kWhConsumedLastBill,
            monthlyEnergyConsumption,
            contractedPowerInKW,
            avgPriceKWContractedPowerAnnual,
            ivaRate,
        } = consumption;
        const {
            roofOrientation,
            panelSlope,
            structureType,
            installationType,
            current,
            numberPanels,
            potentialRadiationPerkWYear,
            systemLoss,
            consumptionHabit,
            hasBattery,
            battery = null,
            estimatedCoverage,
        } = installation;
        const { monthly, totals } = pvgis;

        const euroPerKwhInvoice = lastInvoiceEnergyCost / kWhConsumedLastBill;
        const anualConsumption = monthlyEnergyConsumption * 12;
        const anualCost = anualConsumption * euroPerKwhInvoice;
        const taxabelIncome = anualCost / (1 + ivaRate / 100);
        const fixedCost = contractedPowerInKW * avgPriceKWContractedPowerAnnual;
        const variableCost = taxabelIncome - fixedCost;
        const euroPerKwhNet = variableCost / anualConsumption;
        const euroPerKwhNetWithIva = euroPerKwhNet * (1 + ivaRate / 100);

        const energyPurchasePriceEuros = euroPerKwhNetWithIva;
        const averageMonthlyConsumptionEuros = monthlyEnergyConsumption * euroPerKwhInvoice;
        const annualConsumptionEuros = averageMonthlyConsumptionEuros * 12;

        const customerConsumptionResult = monthlyEnergyConsumption * 12;
        const requiredGenerationCapacity = customerConsumptionResult * (estimatedCoverage / 100);

        const habit = habits.find((habit) => {
            return habit.battery === hasBattery && habit.habit === consumptionHabit;
        });
        const estimatedSelfConsumption = habit.selfConsumption;

        const realGenerationCapacity =
            (requiredGenerationCapacity * estimatedSelfConsumption) / 100;
        const generationCapacityPerPotentialRadiation = requiredGenerationCapacity / totals.E_y;

        const panel = panels.find((panel) => panel.active);
        const estimatedModules = Math.round(
            (generationCapacityPerPotentialRadiation * 1000) / panel.power
        );

        const installationPower = numberPanels * panel.power;
        const installationPowerKw = installationPower / 1000;
        const installationProductionKwhYear = installationPowerKw * totals.E_y;

        const selfConsumedKwhYear =
            installationProductionKwhYear * (estimatedSelfConsumption / 100);
        const kWhValueSelfConsumed = energyPurchasePriceEuros;
        const savingsSelfConsumed = selfConsumedKwhYear * kWhValueSelfConsumed;

        const kWhSentToGrid = installationProductionKwhYear - selfConsumedKwhYear;
        const kWhValueSentToGrid = energyPurchasePriceEuros * 0.5;
        const savingsSentToGrid = kWhSentToGrid * kWhValueSentToGrid;

        const yearlySavings = savingsSelfConsumed + savingsSentToGrid;
        const monthlySavings = yearlySavings / 12;
        const savings25Years = yearlySavings * 31.9189;

        const billingWithoutSolar = annualConsumptionEuros;
        const billingWithSolar = annualConsumptionEuros - yearlySavings;
        const monthlyBillingWithSolar = billingWithSolar / 12 < 30 ? 30 : billingWithSolar / 12;

        const reductionPercentage = (yearlySavings / billingWithoutSolar) * 100;

        const params = {
            modules: numberPanels,
            installationType: installationType,
            current: current,
            structureType: structureType,
            panelId: panel._id,
            batteryId: hasBattery ? battery._id : null,
        };

        const rate = calculateRate(params);

        const helps = installationPowerKw * 600;
        const monthlyFee60 = rate.summary.pvp * 0.01931;
        const monthlyFee120 = rate.summary.pvp * 0.011077;
        const investmentReturn = rate.summary.pvpWithBattery / yearlySavings;
        const investmentReturnHelps = (rate.summary.pvpWithBattery - helps) / yearlySavings;

        const proposalResult = {
            comparativeBreakdown: {
                euroPerKwhInvoice,
                anualConsumption,
                anualCost,
                taxabelIncome,
                fixedCost,
                variableCost,
                euroPerKwhNet,
                euroPerKwhNetWithIva,
            },
            dataExtraction: {
                lastInvoiceEnergyCost,
                kWhConsumedLastBill,
                monthlyEnergyConsumption,
                contractedPowerInKW,
                avgPriceKWContractedPowerAnnual,
                ivaRate,
                energyPurchasePriceEuros,
                averageMonthlyConsumptionEuros,
                annualConsumptionEuros,
            },
            customerNeeds: {
                customerConsumptionResult,
                estimatedCoverage,
                requiredGenerationCapacity,
            },
            installation: {
                roofOrientation,
                panelSlope,
                structureType,
                installationType,
                current,
                numberPanels,
                potentialRadiationPerkWYear,
                systemLoss,
                consumptionHabit,
                hasBattery,
                battery,
                estimatedCoverage,
                estimatedSelfConsumption,
                realGenerationCapacity,
                generationCapacityPerPotentialRadiation,
                estimatedModules,
                installationPower,
                installationPowerKw,
                installationProductionKwhYear,
            },
            savings: {
                monthly: monthlySavings,
                yearly: yearlySavings,
                years25: savings25Years,
                breakdown: {
                    selfConsumtion: {
                        selfConsumedKwhYear,
                        kWhValueSelfConsumed,
                        savingsSelfConsumed,
                    },
                    sentToGrid: {
                        kWhSentToGrid,
                        kWhValueSentToGrid,
                        savingsSentToGrid,
                    },
                },
                billingWithoutSolar,
                billingWithSolar,
                monthlyBillingWithSolar,
                reductionPercentage,
            },
            rate,
            economic: {
                helps,
                monthlyFee60,
                monthlyFee120,
                investmentReturn,
                investmentReturnHelps,
            },
        };

        return proposalResult;
    };

    return (
        <CalculatorContext.Provider
            value={{
                loading,
                setLoading,
                change,
                setChange,
                setUpdate,
                batteries,
            }}
        >
            <Outlet />
        </CalculatorContext.Provider>
    );
};

export default CalculatorContext;
