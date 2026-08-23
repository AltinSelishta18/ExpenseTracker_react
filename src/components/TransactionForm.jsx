//This component will handle the formular where we can add and edit an transaction
import { useContext, useEffect } from "react"
import { TransactionsContext } from "../context/TransactionsContext"
import TransactionFormStyle from "../style/TransactionForm.module.css"
import { useParams } from "react-router-dom"


function TransactionForm(){

    const { formData,
            setFormData,
            AddTransaction, 
            SaveEditedTransaction,
            transactions
        } = useContext(TransactionsContext)
    
    const { id } = useParams();

    const transaction = transactions.find(transaction => transaction.id === Number(id));

    useEffect(() =>{
        if(transaction){
            setFormData({...transaction})
        }
        else{
            setFormData({
                name: "",
                date: "",
                description: "",
                category: "",
                type: "",
                amount: ""
            })
        }
    }, [transaction])



        
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

        alert("Transaksioni u krye me sukses!")

        setFormData({
            name: "",
            date: "",
            description: "",
            category: "",
            type: "",
            amount: ""
        })


    }

    return (
        <div className={TransactionFormStyle.container}>
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
                    <input type="number" name="amount" value={Number(formData.amount).toFixed(2)} onChange={handleChange} id="" autoComplete="off" placeholder="Transaction Amount"/>
                    <button>{formData.id ? "Save Transaction" : "Add Transaction"}</button>
                </form>
            </div>
        </div>
        
    )
}

export default TransactionForm