import { useContext } from "react";
import ProposalContext from "@context/ProposalProvider";

const useProposal = () => {
    return useContext(ProposalContext);
};

export default useProposal;
