import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = ({ onAddExpenses }) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpenses(expenseData);
    setIsEditing(false);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add Epenses</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpense={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
