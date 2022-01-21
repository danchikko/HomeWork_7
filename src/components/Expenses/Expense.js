import React from "react";
import ExpenseItem from "./ExpenseItem";
import './Expense.css';
import Card from "../UI/Card";

function Expense(props) {
    return (
        <Card className="expense">
            {props.data.map((el,id) => {
                return (
                        <ExpenseItem
                        title={el.title}
                        amount={el.amount}
                        date={el.date}
                        key={id}
                        />
                );
            })}
        </Card>
    );
}

export default Expense;