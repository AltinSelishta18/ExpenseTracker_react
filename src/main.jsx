import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import DashBoard from "./components/Dashboard.jsx"
import TransactionList from "./components/TransactionList.jsx"
import TransactionForm from "./components/TransactionForm.jsx"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <DashBoard />
            },
            {
                path: "/newTransaction",
                element: <TransactionForm />
            },
            {
                path: "/transactionsHistory",
                element: <TransactionList />
            }


        ]
    }
])

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);