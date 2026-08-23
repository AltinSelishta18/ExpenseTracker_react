// This component will serve as a container for the TransactionCard.jsx component
import { useContext } from "react"
import { TransactionsContext } from "../context/TransactionsContext"
import TransactionCard from "./TransactionCard";
import transactionListstyle from "../style/transactionsList.module.css"
function TransactionList() {
    const { transactions } = useContext(TransactionsContext);

    return (
        <>
            <div className={transactionListstyle.result}>
                {transactions.length === 0
                    ? <p>None Transaction Registered</p>
                    : transactions.map(transaction =>
                    (<TransactionCard key={transaction.id} transaction={transaction} />)
                    ) 
                }
            </div>
        </>
    )
}

export default TransactionList