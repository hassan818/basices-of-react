import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import { DUMB_EXPENSE } from "./components/ExpenseTxt/Expense";

const App = () => {
  const [expenses, setExpenses] = useState(DUMB_EXPENSE);

  const addExpenseHandler = (expenses) => {
    setExpenses((preExpenses) => {
      return [expenses, ...preExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpenses={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
