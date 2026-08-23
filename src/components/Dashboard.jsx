//This component will contain the results of the transactions like Expense, Income...

import DashboardStyle from "../style/TransactionsDashBoard.module.css"
import { TransactionCalculations } from "../calculations"
import { useContext } from "react"
import { TransactionsContext } from "../context/TransactionsContext"
function Dashboard() {
        const { transactions } = useContext(TransactionsContext)
        const {income, expense, balance, countTransactions} = TransactionCalculations(transactions)
    return (
        <>
            <div className={DashboardStyle.DashBoardContainer}>
                <div style={{color: balance > 0 ? "green" : "red", padding: "1% 1%"}} className={DashboardStyle.transaction}>Balance: {balance.toFixed(2)}</div>
                <div style={{color: income === 0 ? "black" : "green", padding: "1% 1%"}} className={DashboardStyle.transaction}>Income: {income > 0 ? `+${income.toFixed(2)}` : income}</div>
                <div style={{color: expense === 0 ? "black" : "red", padding: "1% 1%"}} className={DashboardStyle.transaction}>Expense: {expense > 0 ? `- ${expense.toFixed(2)}`: expense}</div>
                <div style={{padding: "1% 1%"}} className={DashboardStyle.transaction}>Transactions: {countTransactions}</div>
            </div>
        </>
    )
}

export default Dashboard