import React,{useState} from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
const navbar = () => {
    const [hamburgerClick, sethamburgerClick] = useState(false)
    const handleHamburgerNav=()=>{
        sethamburgerClick(hamburgerClick?false:true);
    }
    return (
        <>
        <div id="Home"></div>
        <div className="navbar">
            <nav>
                <div className='logo'>
                    <img src="/src/assets/logo2.jpg" alt="logo" />
                    <Link to="/">
                     <h1>Expense Tracker</h1>
                    </Link>
                </div>
                <ul>
                        <a href="#Home">
                        <li>Home</li>
                        </a>
                        <a href="#add-expense-form">
                        <li>Add Expense</li>
                        </a>
                        <a href="#expense-list-division">
                        <li>Expense List</li>
                        </a>
                </ul>
                <div className='svg-nav-div' onClick={handleHamburgerNav}>
                <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="34" color="#ffffff" fill="none">
                    <path d="M4 5L20 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 19L20 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                </div>
            </nav>
            {hamburgerClick && (<div className='ham-nav-cont'>
                <div className="opac-ham-nav"></div>
                <div className='hamburger-nav'>
                    <ul>
                        <a href="#Home">
                        <li>Home</li>
                        </a>
                        <a href="#add-expense-form">
                        <li>Add Expense</li>
                        </a>
                        <a href="#expense-list-division">
                        <li>Expense List</li>
                        </a>
                    </ul>
                </div>
            </div>)}
        </div>
        </>
    )
}

export default navbar
