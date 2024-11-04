import { createContext, useState } from "react";
import { API_KEY } from "../utils/constants";

export const ExpenseContext = createContext({});

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);

  async function getExpenses() {
    try {
      const resp = await fetch(API_KEY);
      const data = await resp.json();
      setExpenses(data);
    } catch (error) {
      throw new Error(error);
    }
  }

  async function deleteExpense(expenseId) {
    try {
      const res = await fetch(`${API_KEY}/${expenseId}`, {
        method: "DELETE",
      });

      if (res.ok) getExpenses();
    } catch (error) {
      throw new Error(error);
    }
  }

  async function createExpense(newExpense) {
    try {
      const res = await fetch(API_KEY, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newExpense),
      });

      if (!res.ok) {
        console.error("cant post expense");
      }

      getExpenses();
    } catch (error) {
      throw new Error(error);
    }
  }
  async function updateExpense(updatedExpenseData, expenseId) {
    try {
      const res = await fetch(`${API_KEY}/${expenseId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedExpenseData),
      });

      if (!res.ok) alert("cant update expense! try again.");

      getExpenses();
    } catch (error) {
      throw new Error(error);
    }
  }

  const contextValue = {
    getExpenses,
    deleteExpense,
    createExpense,
    updateExpense,
    expenses,
  };
  return (
    <ExpenseContext.Provider value={contextValue}>
      {children}
    </ExpenseContext.Provider>
  );
};
