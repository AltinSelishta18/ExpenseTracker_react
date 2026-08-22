import { useContext, useState } from "react"
import { TransactionsContext, TransactionsProvider } from "./context/TransactionsContext"
import AppContent from "./components/AppContent"
import { Link } from "react-router-dom"

function App() {
    return(
        <TransactionsProvider>
            <AppContent />
        </TransactionsProvider>
    )
}

export default App