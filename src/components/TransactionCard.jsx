//This component will contain the informations about a transaction

import TransactionCardStyle from "../style/TransactionCardStyle.module.css"
import { useContext } from "react"
import { TransactionsContext } from "../context/TransactionsContext"

function TransactionCard({transaction}){
    const {  DeleteTransaction, EditTransaction } = useContext(TransactionsContext)
    return (
        <>
            <div className={TransactionCardStyle.card}>
                <p>Name: {transaction.name}</p>
                <p>Date: {transaction.date}</p>
                <p>Description: {transaction.description}</p>
                <p>Category: {transaction.category}</p>
                <p>Type: {transaction.type}</p>
                <p>Amount: {transaction.amount}$</p>
                <div className={TransactionCardStyle.buttons}>
                    <button onClick={() =>  DeleteTransaction(transaction.id)}>X</button>
                    <button onClick={() => EditTransaction(transaction.id)}>&#9998;</button>
                </div>
            </div>
        </>
    )
}

export default TransactionCard