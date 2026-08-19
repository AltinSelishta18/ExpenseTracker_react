// Here will be written some JavaScript code for the calculations of the transactions
// Calculate transactions like Income, Expense...

export function TransactionCalculations(transactions){
    const income = transactions.filter(transaction => transaction.type === "Income")
                                .reduce((total, transaction) => total + transaction.amount, 0)
    

    const expense = transactions.filter(transaction => transaction.type === "Expense")
                                .reduce((total, transaction) => total + transaction.amount, 0);

    const balance = income - expense;
    const countTransactions = transactions.length

        return {
            income,
            expense,
            balance,
            countTransactions
        }
}