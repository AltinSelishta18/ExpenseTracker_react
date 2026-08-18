//This component will contain the informations about a transaction

function TransactionCard({transaction}){
    return (
        <>
            <p>Name:{transaction.name}</p>
            <p>Date:{transaction.date}</p>
            <p>Description{transaction.description}</p>
            <p>Category:{transaction.category}</p>
            <p>Type:{transaction.type}</p>
            <p>Amount:{transaction.amount}</p>
        </>
    )
}

export default TransactionCard