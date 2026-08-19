//This component will handle the formular where we can add and edit an transaction
import { useContext } from "react"
import { TransactionsContext } from "../context/TransactionsContext"
import TransactionFormStyle from "../style/TransactionForm.module.css"


function TransactionForm(){
    const { formData,
            setFormData,
            AddTransaction, 
            modal,
            setModal,
            SaveEditedTransaction
        } = useContext(TransactionsContext)

        if(!modal){
            return null
        }
        
    function handleChange(e){
        const {name, value} = e.target;

        setFormData({
            ...formData,
            [name]: value
        })
    }

    function SubmitForm(e){
        e.preventDefault();

        if(formData.name === "" || formData.description === "" || formData.category === "" || formData.type === "" || formData.amount === ""){
            alert("Please fill the required Fields!");
            return;
        }

        if(formData.id){
            SaveEditedTransaction();
        }
        else{
            AddTransaction()
        }
        
        setModal(false)

    }

    return (
        <div className={TransactionFormStyle.container}>
            <div className={TransactionFormStyle.formVisual}>
                <h1>Add Transaction</h1>
                <button onClick={() => setModal(false)}>X</button>
            </div>
            <div className={TransactionFormStyle.formular}>
                <form action="" onSubmit={SubmitForm}>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Transaction Name" autoComplete="off"/>
                    <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Transaction Description" autoComplete="off" />
                    <select name="category" value={formData.category} onChange={handleChange} id="" autoComplete="off">
                        <option value="">Select Category</option>
                        <option value="Food">Food</option>
                        <option value="Transport">Transport</option>
                        <option value="Shopping">Shopping</option>
                        <option value="Bills">Bills</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Health">Health</option>
                        <option value="Education">Education</option>
                        <option value="Subscription">Subscription</option>
                        <option value="Other">Other</option>
                    </select>
                    <select name="type" value={formData.type} onChange={handleChange} id="" autoComplete="off">
                        <option value="">Transaction Type</option>
                        <option value="Expense">Expense</option>
                        <option value="Income">Income</option>
                    </select>
                    <input type="number" name="amount" value={formData.amount} onChange={handleChange} id="" autoComplete="off" placeholder="Transaction Amount"/>
                    <button>Add Transaction</button>
                </form>
            </div>
        </div>
        
    )
}

export default TransactionForm