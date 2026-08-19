import { useContext, useState } from "react"
import { TransactionsContext, TransactionsProvider } from "./context/TransactionsContext"
import AppContent from "./components/AppContent"

function App() {
    const [modal, setModal] = useState(false)
    return(
        <TransactionsProvider>
            <AppContent />
        </TransactionsProvider>
    )
}

export default App