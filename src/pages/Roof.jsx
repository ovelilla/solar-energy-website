import { useState, useEffect } from "react";
import useProposal from "@hooks/useProposal";
import Loading from "@features/roof/loading";
import Header from "@features/roof/header";
import { default as RoofComponent } from "@features/roof";

const Roof = () => {
    const [loading, setLoading] = useState(true);
    const { proposal, readPredefined } = useProposal();

    useEffect(() => {
        if (loading && !proposal.installation && !proposal.consumption) {
            readPredefined();
        }

        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    if (loading) {
        return (
            <>
                <Header />
                <Loading />
            </>
        );
    }

    return (
        <>
            <Header />
            <RoofComponent />
        </>
    );
};

export default Roof;
