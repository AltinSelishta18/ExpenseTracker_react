//This component will contain the informations about a transaction

import TransactionCardStyle from "../style/TransactionCardStyle.module.css"
import { useContext } from "react"
import { TransactionsContext } from "../context/TransactionsContext"
import { Link } from "react-router-dom"

function TransactionCard({transaction}){
    const {  DeleteTransaction, EditTransaction } = useContext(TransactionsContext)
    return (
        <>
            <div className={TransactionCardStyle.card}>
                <p><b>Name:</b> {transaction.name}</p>
                <p><b>Amount:</b> {transaction.amount}$</p>
                <div className={TransactionCardStyle.buttons}>
                    <button onClick={() =>  DeleteTransaction(transaction.id)}>X</button>
                    <Link className={TransactionCardStyle.btn} to={`/TransactionForm/${transaction.id}`}>&#9998;</Link>
                    <Link to={`/transactionDetail/${transaction.id}`} className={TransactionCardStyle.btn}>&#9432;</Link>
                </div>
            </div>
        </>
    )
}

export default TransactionCard