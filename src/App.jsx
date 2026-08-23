import { useContext, useState } from "react"
import { TransactionsContext, TransactionsProvider } from "./context/TransactionsContext"
import AppContent from "./components/AppContent"
import { Link } from "react-router-dom"

function App() {
    return(
        <div>
            <TransactionsProvider>
                <AppContent />
            </TransactionsProvider>
        </div>
    )
}

export default App