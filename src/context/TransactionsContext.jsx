import { createContext } from "react";

//This component will contain the main and core logics of the Expense Tracker App

export const TransactionsContext = createContext();

export function TransactionsProvider({ children }) {


    return (
        <TransactionsContext.Provider value={}>
            {children}
        </TransactionsContext.Provider>
    )
}