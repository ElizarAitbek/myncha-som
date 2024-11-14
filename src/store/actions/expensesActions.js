import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY } from "../../utils/constants";

export const getAllExpenses = createAsyncThunk(
  "expenses/getAllExpenses",
  async function (_, { rejectWithValue }) {
    try {
      const res = await fetch(API_KEY);

      if (!res.ok) {
        throw new Error("Server error!");
      }

      const data = await res.json();

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
