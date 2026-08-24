import { useContext } from "react"
import { TransactionsContext } from "../context/TransactionsContext"
import { useParams } from "react-router-dom";
function TransactionDetails(){
    const { transactions } = useContext(TransactionsContext);
    const { id } = useParams();

    const transaction_details = transactions.find(transaction => transaction.id === Number(id));

    return(
        <>  
            <div className="TransactionDetails">
                 {transaction_details && (
                    <div>
                        <p><b>Name:</b>{transaction_details.name}</p>
                        <p><b>Date:</b>{transaction_details.date}</p>
                        <p><b>Description:</b>{transaction_details.description}</p>
                        <p><b>Category:</b>{transaction_details.category}</p>
                        <p><b>Type:</b>{transaction_details.type}</p>
                        <p><b>Amount:</b>{transaction_details.amount}</p>
                    </div>
                 )}
            </div>
        </>
    )
}

export default TransactionDetails