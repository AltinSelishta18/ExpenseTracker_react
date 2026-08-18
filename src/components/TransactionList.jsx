// This component will serve as a container for the TransactionCard.jsx component
import { useContext } from "react"
import { TransactionsContext } from "../context/TransactionsContext"
import TransactionCard from "./TransactionCard";
function TransactionList() {
    const { transactions } = useContext(TransactionsContext);

    return (
        <>
            {transactions.map(transaction => (
                <TransactionCard key={transaction.id} transaction={transaction}/>
            ))}
        </>
    )
}

export default TransactionList