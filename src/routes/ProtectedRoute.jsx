import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import styled from "@emotion/styled";
import useProposal from "@hooks/useProposal";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

const ProtectedRoute = () => {
    const { proposal } = useProposal();

    if (!proposal.placeId) {
        return <Navigate to="/" />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
