import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

const ExpensesList = (props) => {
	let expenseContent = (
		<p style={{ color: 'red', textAlign: 'center' }}>No expense found</p>
	)

	if (props.filteredExpenses.length > 0) {
		expenseContent = props.filteredExpenses.map((expense) => {
			return (
				<ExpenseItem
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
					key={expense.id}
				/>
			)
		})
	}
	if (props.filteredYear === 'all' && props.expenses.length > 0) {
		expenseContent = props.expenses.map((expense) => {
			return (
				<ExpenseItem
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
					key={expense.id}
				/>
			)
		})
	}

	return <ul className='expenses-list'> {expenseContent} </ul>
}

export default ExpensesList
