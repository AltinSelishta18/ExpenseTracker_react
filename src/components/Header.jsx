import { Link } from "react-router-dom"
import HeaderStyle from "../style/Header.module.css"

function Header(){
    return(
        <>
            <header className={HeaderStyle.header}>
                <nav className={HeaderStyle.nav}>
                    <Link className={HeaderStyle.link} to="/">Home</Link>
                    <Link className={HeaderStyle.link} to="/newTransaction">New Transaction</Link>
                    <Link className={HeaderStyle.link} to="/transactionsHistory">Transactions History</Link>
                    <Link className={HeaderStyle.link} to="/Dashboard">Stats</Link>
                </nav>
            </header>
        </>
    )
}

export default Header