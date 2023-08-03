import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { ContextAuth } from "../../context/AuthContext";

export const Protected = ({ children }) => {
    const { user } = useContext(ContextAuth)

    if(!user) {
        return <Navigate to="/" replace /> 
    } else {
        return children
    }
}