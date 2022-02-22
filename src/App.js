import React, { useState } from 'react';
import Expense from './components/Expenses/Expenses';
import NewExpenses from './components/NewExpenses/NewExpenses';

const INIT_STATE = [
  // {
  //   id:'e1',
  //   title:'Toilet Paper',
  //   amount:'1.5',
  //   date: new Date(2025, 7, 14),
  // },
  {
    id:'e2',
    title:'Car Insuranse',
    amount:200,
    date: new Date(2024, 2, 28),
  },
  {
    id:'e3',
    title: 'Car Insuranse',
    amount: 294.45,
    date: new Date(2023, 2, 28),
  },
  {
    id:'e4',
    title:'New Desk (Wooden)',
    amount: 450,
    date: new Date(2022, 5, 19),
  },
  {
    id:'e5',
    title:'New Desk2 (Wooden)',
    amount: 150,
    date: new Date(2022, 5, 16),
  },
  {
    id:'e6',
    title:'New Desk3 (Wooden)',
    amount: 250,
    date: new Date(2022, 5, 14),
  },
  {
    id:'e7',
    title:'New Desk4 (Wooden)',
    amount: 350,
    date: new Date(2022, 5, 12),
  },
  {
    id:'e8',
    title:'New Desk5 (Wooden)',
    amount: 650,
    date: new Date(2022, 5, 11),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INIT_STATE);


  const addExpenseHandler = (expense) => {
    console.log(expense);
    setExpenses((PrevExpese) => {
      return [expense, ...PrevExpese];
    });
  };

  return (
    <div>
          <NewExpenses onAddExpense={addExpenseHandler} />
           <Expense items={expenses} />

    </div>
  );
}

export default App;
