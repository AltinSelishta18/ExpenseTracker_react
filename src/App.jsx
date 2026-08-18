import { useContext } from "react"
import { TransactionsContext, TransactionsProvider } from "./context/TransactionsContext"
import TransactionList from "./components/TransactionList"
import TransactionForm from "./components/TransactionForm"

function App() {
    return(
        <TransactionsProvider>
            <TransactionList />
            <TransactionForm />
        </TransactionsProvider>
    )
}

export default App