import { useContext, useState } from "react"
import { TransactionsContext, TransactionsProvider } from "./context/TransactionsContext"
import AppContent from "./components/AppContent"
import { Link } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"

function App() {
    return(
        <div>
            <AuthProvider>
                <TransactionsProvider>
                    <AppContent />
                </TransactionsProvider>
            </AuthProvider>
        </div>
    )
}

export default App