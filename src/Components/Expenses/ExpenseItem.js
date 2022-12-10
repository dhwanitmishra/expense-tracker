import { Card } from './UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

const ExpenseItem = (props) => {
  /* const expenseDate = new Date(2022, 12, 7);
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 10000; */

    return (
      <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
         <div className="expense-item__description">
         <h2>{props.title}</h2>
         <div className="expense-item__price">{props.amount}</div>
         </div>
    </Card>
);
}

export {ExpenseItem};