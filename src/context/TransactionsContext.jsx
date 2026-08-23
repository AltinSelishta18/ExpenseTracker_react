import { createContext, useEffect, useState } from "react";

//This component will contain the main and core logics of the Expense Tracker App

export const TransactionsContext = createContext();

export function TransactionsProvider({ children }) {
    const [transactions, setTransactions] = useState(() => {
        const savedTransactions = JSON.parse(localStorage.getItem("transaction")) || [];
        return savedTransactions
    });
    
    const [formData, setFormData] = useState({
        name: "",
        date: "",
        description: "",
        category: "",
        type: "",
        amount: ""
    })

    function AddTransaction(){
        const newTransaction = {
            id: Date.now(),
            name: formData.name,
            date: new Date().toLocaleDateString("sq-XK"),
            description: formData.description,
            category: formData.category,
            type: formData.type,
            amount: Number(formData.amount)
        }

        setTransactions([...transactions, newTransaction]);

        setFormData({
            name: "",
            date: "",
            description: "",
            category: "",
            type: "",
            amount: ""
        })
    }

    function DeleteTransaction(id){
        setTransactions(transactions.filter(transaction => transaction.id !== id))
    }


    function SaveEditedTransaction(){
        const updatedTransaction = transactions.map(transaction => transaction.id === formData.id
            ? {...formData, amount: Number(formData.amount)} 
            : transaction
        )

        setTransactions(updatedTransaction)
    }

    

    useEffect(() =>{
        localStorage.setItem("transaction", JSON.stringify(transactions))
    }, [transactions])


    return (
        <TransactionsContext.Provider value={{
            transactions,
            setTransactions,
            formData,
            setFormData,
            AddTransaction,
            DeleteTransaction,
            SaveEditedTransaction
        }}>
            {children}
        </TransactionsContext.Provider>
    )
}