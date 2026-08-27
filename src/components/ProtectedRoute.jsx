import LoginForm from "./LoginForm"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Outlet } from "react-router-dom"
import { Navigate } from "react-router-dom"
import { useLocation } from "react-router-dom"

function ProtectedRoute() {
    
    const { isLoggedIn }  = useContext(AuthContext)
    const location = useLocation()

    if(!isLoggedIn){
        return <Navigate state={{from: location}} to="/LoginForm" />
    }

    return <Outlet />

}

export default ProtectedRoute