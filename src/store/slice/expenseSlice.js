import { createSlice } from "@reduxjs/toolkit";
import { getAllExpenses } from "../actions/expensesActions";

const expenseSlice = createSlice({
  name: "expenses",
  initialState: {
    expenses: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllExpenses.fulfilled, (state, action) => {
      state.expenses = action.payload;
    });
  },
});

export default expenseSlice.reducer;
