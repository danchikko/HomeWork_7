import './App.css';
import Expense from './components/Expenses/Expense';
import Card from './components/UI/Card';



function App() {

  const expenses = [
    {
      id:'e1',
      title:'Toilet Paper',
      amount:'1.5',
      date: new Date(2020, 7, 14),
    },
    {
      id:'e2',
      title:'Car Insuranse',
      amount:200,
      date: new Date(2021, 2, 28),
    },
    {
      id:'e3',
      title: 'Car Insuranse',
      amount: 294.45,
      date: new Date(2021, 2, 28),
    },
    {
      id:'e4',
      title:'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <Card>
      <h2>Let's get started!</h2>
      <Expense data={expenses} />
    </Card>
  );
}

export default App;
