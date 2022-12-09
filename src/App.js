import { Expenses } from "./Components/Expenses";

function App() {
  const expenses = [
    { title: 'Car Insurance', amount: 10000, date: new Date(2022, 11, 1) },
    { title: 'Groceries', amount: 1000, date: new Date(2022, 11, 7) },
    { title: 'Fuel', amount: 500, date: new Date(2022, 11, 10) },
    { title: 'Clothes', amount: 200, date: new Date(2022, 11, 12) },
  ];
  // console.log(expenses[0].date)
  return (
    <div>
      <h2>Expense Tracker</h2>
      <Expenses items={expenses} />
      </div>
  );
}

export default App;
