import { configureStore } from "@reduxjs/toolkit";
import expenseSlice from "./slice/expenseSlice";

export default configureStore({
  reducer: {
    expenses: expenseSlice,
  },
});
