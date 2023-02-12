import { useState, useEffect } from "react";
import { Outlet, Navigate, useParams } from "react-router-dom";
import useProposal from "@hooks/useProposal";

const ProtectedRoute = () => {
    const [loading, setLoading] = useState(true);
    const { proposal, readProposal } = useProposal();
    const { uuid } = useParams();

    const fetchProposal = async () => {
        await readProposal(uuid);
        setLoading(false);
    };

    useEffect(() => {
        if (uuid) {
            fetchProposal();
        }
    }, []);

    if (!uuid) {
        return <Navigate to="/" />;
    } else if (loading) {
        return <></>;
    } else if (!proposal) {
        return <Navigate to="/" />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
