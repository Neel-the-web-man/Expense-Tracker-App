import React, { useState, useContext, useEffect } from 'react'
import "./AddExpenseForm.css"
import ExpenseList from './ExpenseList'
import { v4 as uuidv4 } from 'uuid';
const AddExpenseForm = (props) => {
    const [explist, setexplist] = useState([]);
    const [expinfo, setexpinfo] = useState();
    const [expDescIn, setexpDescIn] = useState("")
    const [expIn, setexpIn] = useState("")
    const [expcatIn, setexpcatIn] = useState("defaultCat")
    const handleChangeExpDesc = (e) => {
        setexpDescIn(e.target.value);
    }
    const handleChangeExp = (e) => {
        setexpIn(e.target.value);
    }
    const handleChangeExpCat = (e) => {
        setexpcatIn(e.target.value);
    }
    useEffect(() => {
        if (props.changedArr.length != explist.length) {
            setexplist(props.changedArr);
        }
    }, [props.changedArr]);
    useEffect(() => {
        if (props.editArr.length != explist.length) {
            let id = props.editExpId;
            let editItem = explist.filter((items) => {
                return items.id === id;
            })
            setexpDescIn(editItem[0].expDesc);
            setexpIn(editItem[0].exp);
            setexpcatIn(editItem[0].expcat);
            setexplist(props.editArr);
        }
    }, [props.editArr]);

    useEffect(() => {
        if (expinfo != undefined) {
            setexplist([...explist, expinfo])
        }
    }, [expinfo]);
    useEffect(() => {
        props.onPassData(explist);
    }, [explist]);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (expDescIn != "" && expIn != "" && expcatIn != "defaultCat") {
            let d = new Date();
            let x = `${d.getDate()}-${d.getMonth()}-${d.getFullYear()}`;
            let dummyObj = {
                id: uuidv4(),
                expDesc: expDescIn,
                exp: expIn,
                expcat: expcatIn,
                date: x,
            }
            setexpinfo(dummyObj);
            setexpDescIn("");
            setexpIn("");
            setexpcatIn("defaultCat");
        }
        else {
            setexpcatIn("defaultCat");
        }
    }
    return (
        <>
            <div id='add-expense-form' className="expenseForm">
                <h1>Add Expense Form</h1>
                <form>
                    <div className='form-in'>
                        <input required onChange={handleChangeExpDesc} value={expDescIn} type="text" placeholder='Expense Description' />
                    </div>
                    <div className="form-in">
                        <input required onChange={handleChangeExp} value={expIn} type="number" placeholder='Expense' />
                    </div>
                    <select required onChange={handleChangeExpCat} value={expcatIn}>
                        <option disabled value="defaultCat">--Select Expense Category--</option>
                        <option value="Stationary">Stationary</option>
                        <option value="Food">Food</option>
                        <option value="Rent">Rent</option>
                    </select>
                    <button onClick={handleSubmit} id='AEF-submit-btn' >Submit</button>
                </form>
            </div>
            <div id='expense-list-division' className="division"></div>
        </>
    )
}

export default AddExpenseForm
