import { Outlet } from "react-router-dom"
import Header from "./Header"

function AppContent(){
    
    return (
        <>
            <Header />            

            <main>
                <Outlet />
            </main>
        </>
    )
}

export default AppContent