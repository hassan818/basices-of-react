import React from "react";
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";
const ExpenseList = ({ items }) => {
  if (items.length === 0) {
    return <h3 className="expense-list">no items found</h3>;
  }

  return items.map((item) => (
    <ExpenseItem
      key={item.id}
      title={item.title}
      amount={item.amount}
      date={item.date}
    />
  ));
};

export default ExpenseList;
