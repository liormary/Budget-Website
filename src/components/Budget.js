import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        const value = event.target.value;
        if (value > 20000) {
            alert('Budget cannot exceed £20,000');
            setNewBudget(budget);
        } else if (value < totalExpenses) {
            alert('You cannot reduce the budget value lower than the spending');
            setNewBudget(budget);
        }
        else {
            setNewBudget(value);
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input 
type="number" 
step="10" 
value={newBudget} 
onChange={handleBudgetChange}>
</input>
</div>
    );
};
export default Budget;
