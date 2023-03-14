import { createTheme } from "@mui/material/styles";

export const darkText = {
    primary: "rgb(255,255,255)",
    secondary: "rgb(148, 163, 184)",
    disabled: "rgb(156, 163, 175)",
};

export const lightText = {
    primary: "rgb(17, 24, 39)",
    secondary: "rgb(107, 114, 128)",
    disabled: "rgb(149, 156, 169)",
};

const Theme = createTheme({
    typography: {
        fontFamily: "Poppins, sans-serif",
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 480,
            md: 768,
            lg: 1024,
            xl: 1200,
        },
    },
    components: {
        MuiPickersLayout: {
            styleOverrides: {
                root: {
                    minHeight: "462px",
                },
            },
        },
        MuiClock: {
            styleOverrides: {
                root: {
                    marginTop: "72px",
                },
            },
        },
        MuiDayCalendar: {
            styleOverrides: {
                slideTransition: {
                    minHeight: "280px",
                },
                weekContainer: {
                    margin: "0",
                },
                weekDayLabel: {
                    width: "40px",
                    height: "40px",
                    margin: "2px",
                    fontSize: "14px",
                },
            },
        },
        MuiPickersDay: {
            styleOverrides: {
                root: {
                    width: "40px",
                    height: "40px",
                    margin: "2px",
                    fontSize: "14px",
                    fontWeight: "300",
                },
            },
        },
    },
    palette: {
        mode: "light",
        divider: "#e2e8f0",
        text: lightText,
        common: {
            black: "rgb(17, 24, 39)",
            white: "rgb(255, 255, 255)",
        },
        primary: {
            light: "#64748b",
            main: "#324475",
            dark: "#28365e",
            contrastText: darkText.primary,
        },
        secondary: {
            light: "#818cf8",
            main: "#4f46e5",
            dark: "#3730a3",
            contrastText: darkText.primary,
        },
        background: {
            paper: "#ffffff",
            default: "#f1f5f9",
        },
        error: {
            light: "#ffcdd2",
            main: "#dc2626",
            dark: "#b71c1c",
        },
    },
    status: {
        danger: "orange",
    },
});

export default Theme;
