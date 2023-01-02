import { Navigate } from "react-router-dom";

import useProposal from "@hooks/useProposal";

import Map from "@features/map";

const Roof = () => {
    const { proposal } = useProposal();

    if (proposal.placeId) {
        return (
            <main>
                <Map />
            </main>
        );
    }

    return <Navigate to="/" />;
};

export default Roof;
