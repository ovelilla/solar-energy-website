export const breakpoints = {
    sm: 480,
    md: 768,
    lg: 1024,
    xl: 1280,
    xxl: 1440,
};

export const media = (breakpoint) => `@media (min-width: ${breakpoint}px)`;

export const header = `
    height: 64px;

    ${media(breakpoints.sm)} {
        height: 72px;
    }

    ${media(breakpoints.md)} {
        height: 80px;
    }

    ${media(breakpoints.lg)} {
        height: 88px;
    }

    ${media(breakpoints.xl)} {
        height: 96px;
    }
`;

export const topHeader = `
    top: 64px;

    ${media(breakpoints.sm)} {
        top: 72px;
    }

    ${media(breakpoints.md)} {
        top: 80px;
    }

    ${media(breakpoints.lg)} {
        top: 88px;
    }

    ${media(breakpoints.xl)} {
        top: 96px;
    }
`;

export const logo = `
    width: 132px;

    ${media(breakpoints.sm)} {
        width: 144px;
    }

    ${media(breakpoints.md)} {
        width: 156px;
    }

    ${media(breakpoints.lg)} {
        width: 168px;
    }

    ${media(breakpoints.xl)} {
        width: 176px;
    }
`;

export const section = `
    padding: 0 24px;

    ${media(breakpoints.sm)} {
        padding: 0 32px;
    }

    ${media(breakpoints.md)} {
        padding: 0 40px;
    }

    ${media(breakpoints.lg)} {
        padding: 0 80px;
    }
`;
