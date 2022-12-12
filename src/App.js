import { Expenses } from "./Components/Expenses/Expenses";
import { NewExpense } from "./Components/NewExpense/NewExpense";

function App() {
  const expenses = [
    { title: 'Car Insurance', amount: 10000, date: new Date(2022, 11, 1) },
    { title: 'Groceries', amount: 1000, date: new Date(2022, 11, 7) },
    { title: 'Fuel', amount: 500, date: new Date(2022, 11, 10) },
    { title: 'Clothes', amount: 200, date: new Date(2022, 11, 12) },
  ];

  const addExpenseHandler = (expense) => {
    console.log('In App.js');
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
      </div>
  );
}

export default App;
