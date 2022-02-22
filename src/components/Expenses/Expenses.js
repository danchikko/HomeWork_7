import React, { useState } from 'react'
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2022')

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear)
	}

	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear
	})

	// let expensesContent = <p style={{ textAlign: "center", color: "white"}}>No Expenses Found</p>;
	// if(filteredExpenses.length > 0) {
	//     expensesContent = filteredExpenses.length > 0 &&
	//         filteredExpenses.map((element) => {
	//             return (
	//                 <ExpenseItem
	//                 key={element.id}
	//                 title={element.title}
	//                 amount={element.amount}
	//                 date={element.date}
	//                 />
	//             );
	//         });
	// }

	// if(filteredYear === "All"){
	//     expensesContent = props.items.map((element) => {
	//         return (
	//             <ExpenseItem
	//             key={element.id}
	//             title={element.title}
	//             amount={element.amount}
	//             date={element.date}
	//             />
	//         )
	//     });
	// }

	return (
		<Card className='expenses'>
			<ExpensesFilter
				selected={filteredYear}
				onChangeFilter={filterChangeHandler}
			/>
			<ExpensesChart
				expenses={filteredExpenses}
				items={props.items}
				filteredYear={filteredYear}
			/>
			<ExpensesList
				expenses={props.items}
				filteredYear={filteredYear}
				filteredExpenses={filteredExpenses}
			/>

			{/* Second version */}
			{/* {filteredExpenses.length === 0 && props.items.length === 0 && (
                <p style={{ textAlign: "center", color: "white"}}>No Expenses Found</p>
            )}
            {filteredExpenses.length > 0 && 
            filteredExpenses.map((element) => {
                return (
                    <ExpenseItem
                    key={element.id}
                    title={element.title}
                    amount={element.amount}
                    date={element.date}
                    />
                )
            })}
            {filteredYear === 'All' && 
            props.items.map((element) => {
                return (
                    <ExpenseItem
                    key={element.id}
                    title={element.title}
                    amount={element.amount}
                    date={element.date}
                    />
                )
            })} */}

			{/* FIRST VERSION */}
			{/* {filteredExpenses.length === 0 ? 
            <p style={{ textAlign: "center", color: "white"}}>No Expenses Found</p> : 
                filteredExpenses.map((element) => {
                    return (
                        <ExpenseItem
                        key={element.id}
                        title={element.title}
                        amount={element.amount}
                        date={element.date}
                        />
                    );
                })
            } */}
		</Card>
	)
}

export default Expenses
