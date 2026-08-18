//This component will contain the informations about a transaction

function TransactionCard({transaction}){
    return (
        <>
            <p>{transaction.name}</p>
            <p>{transaction.date}</p>
            <p>{transaction.description}</p>
            <p>{transaction.category}</p>
            <p>{transaction.type}</p>
            <p>{transaction.amount}</p>
        </>
    )
}

export default TransactionCard