import './ExpenseItem.css';

function ExpenseItem() {
    const expenseDate = new Date(2022, 4, 18).toDateString();
    const expenseTitle = 'New Monitor';
    const expenseAmount = 333.12;

    return (
        <div className="expense-item">
            <div>{expenseDate}</div>

            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__amount">{expenseAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
