import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import DashBoard from "./components/Dashboard.jsx"
import TransactionList from "./components/TransactionList.jsx"
import TransactionForm from "./components/TransactionForm.jsx"
import TransactionDetails from "./components/transactionDetails.jsx";
import LoginForm from "./components/LoginForm.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import "./style/global.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: null
            },
            {
                path: "Dashboard",
                element: <DashBoard />
            },
            {
                path: "LoginForm",
                element: <LoginForm />
            },
            {
                element: <ProtectedRoute />,
                children: [
                        {
                            path: "newTransaction",
                            element: <TransactionForm />
                        },
                        {
                            path: "transactionsHistory",
                            element: <TransactionList />
                        },
                        {
                            path: "transactionDetail/:id",
                            element: <TransactionDetails />
                        }
                ]
            }


        ]
    }
])

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);