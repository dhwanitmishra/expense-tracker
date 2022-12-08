import { ExpenseItem } from "./Components/ExpenseItem";

function App() {
  const expenses = [
    { title: 'Car Insurance', amount: 10000, date: new Date(2022, 12, 1) },
    { title: 'Groceries', amount: 1000, date: new Date(2022, 12, 7) },
    { title: 'Fuel', amount: 500, date: new Date(2022, 12, 10) },
    { title: 'Clothes', amount: 200, date: new Date(2022, 12, 12) },
  ];
  return (
    <div>
      <h2>Expense Tracker</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date.toISOString()}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date.toISOString()}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date.toISOString()}></ExpenseItem>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date.toISOString()}></ExpenseItem>
    </div>
  );
}

export default App;
