import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    const selectChangehandler = (event) => {
        props.onChangeFilter(event.target.value);
    }
    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <select value={props.selected} onChange={selectChangehandler}>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="all">Select All</option>
                </select>
            </div>
        </div>
    )
}

export default ExpensesFilter;