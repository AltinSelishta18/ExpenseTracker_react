import { Link } from "react-router-dom"


function Header(){
    return(
        <>
            <header>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/newTransaction">New Transaction</Link>
                    <Link to="/transactionsHistory">Transactions History</Link>
                </nav>
            </header>
        </>
    )
}

export default Header