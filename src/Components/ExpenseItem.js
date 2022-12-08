import './ExpenseItem.css'

function ExpenseItem (props) {
  /* const expenseDate = new Date(2022, 12, 7);
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 10000; */
const month = props.date.toLocaleString('en-US', { month: 'long' });
const day = props.date.toLocaleString('en-US', { day: '2-digit' });
const year = props.date.getFullYear();
    return (
      <div className="expense-item">
        <div>
          <div>{month}</div>
          <div>{day}</div> 
          <div>{year}</div>
        </div>
         <div className="expense-item__description">
         <h2>{props.title}</h2>
         <div className="expense-item__price">{props.amount}</div>
         </div>
    </div>
);
}

export {ExpenseItem};