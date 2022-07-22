import useAuth from "../../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateOutlet() {
    const { user } = useAuth;

    return user.email ? <Outlet /> : <Navigate to="/login" />
}