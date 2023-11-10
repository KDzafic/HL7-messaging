import {Navigate, Outlet, RouteProps} from "react-router-dom";
import {useContext} from "react";
import {Box} from "@mui/material";
import {AuthenticationContext} from "../../context/AuthenticationContext";

const PublicLayout: React.FC<RouteProps> = () => {
    const { authenticated } = useContext(AuthenticationContext);

    if (authenticated) return <Navigate replace to="/home" />;

    return (
        <>
            <Box sx={{ minHeight: '100vh', display: 'flex' }}>
                <Outlet />
            </Box>
        </>
    );
};

export default PublicLayout;