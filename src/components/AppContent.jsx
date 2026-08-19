import { useContext } from "react"
import { TransactionsContext } from "../context/TransactionsContext"
import TransactionList from "./TransactionList"
import TransactionForm from "./TransactionForm"
import Dashboard from "./Dashboard"

function AppContent(){
    const { setModal } = useContext(TransactionsContext)
    
    return (
        <>
            <button style={{backgroundColor: "white", padding: "1% 3%", borderRadius: "8px"}} onClick={() => setModal(true)}>Add Transaction</button>
            <Dashboard />
            <TransactionList />
            <TransactionForm />
        </>
    )
}

export default AppContent