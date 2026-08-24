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
                <div style={{color: balance > 0 ? "green" : "red", padding: "1% 1%"}} className={DashboardStyle.transaction}><span className={DashboardStyle.type}>Balance:</span> {balance > 0 ? `+${balance.toFixed(2)}€` : `${balance.toFixed(2)}€`}</div>
                <div style={{color: income === 0 ? "white" : "green", padding: "1% 1%"}} className={DashboardStyle.transaction}><span className={DashboardStyle.type}>Income:</span> {income > 0 ? `+${income.toFixed(2)}€` : income}</div>
                <div style={{color: expense === 0 ? "white" : "red", padding: "1% 1%"}} className={DashboardStyle.transaction}><span className={DashboardStyle.type}>Expense:</span> {expense > 0 ? `- ${expense.toFixed(2)}€`: expense}</div>
                <div style={{padding: "1% 1%", color: "white"}} className={DashboardStyle.transaction}><span className={DashboardStyle.type}>Transactions:</span> {countTransactions}</div>
            </div>
        </>
    )
}

export default Dashboard