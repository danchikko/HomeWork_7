import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm =(props) => {
    const [title, setTitle] = useState();
    const [amount, setAmount] = useState();
    const [date, setDate] = useState();

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    };


    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: title,
            amount: +amount,
            date: new Date(date),
        };
        props.onSaveExpenseData(expenseData);
    };



    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input name='title' type="text" onChange={titleChangeHandler} value={title}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input name='amount'type="number"min="0.1"step="1" onChange={amountChangeHandler} value={amount}/>
                </div>
                <div className='new-expense__control'>                    
                    <label>Date</label>
                    <input name='date'type="date" min="2022-01-01" onChange={dateChangeHandler} value={date}/>
                </div>
                </div>
                <div className='new-expense__actions'>
                    <button type='submit'>Add Expense</button>
                </div>
        </form>
    )
}

export default ExpenseForm;