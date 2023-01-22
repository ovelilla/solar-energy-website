import { useEffect } from "react";

import useProposal from "@hooks/useProposal";

import Loading from "@features/roof/loading";
import Header from "@features/roof/header";
import { default as RoofComponent } from "@features/roof";

const Roof = () => {
    const { isRoofLoading, setIsRoofLoading, proposal } = useProposal();

    useEffect(() => {
        setTimeout(() => {
            setIsRoofLoading(false);
        }, 3000);
    }, []);

    if (proposal.placeId && isRoofLoading) {
        return (
            <>
                <Header />
                <Loading />;
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
