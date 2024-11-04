import { useContext, useEffect } from "react";
import { formatDate } from "../utils/helpers";
import styled from "styled-components";
import ExpenseItem from "./ExpenseItem";
import { ExpenseContext } from "../context/ExpenseContext";

export default function ExpenseList() {
  const { getExpenses, expenses } = useContext(ExpenseContext);

  useEffect(() => {
    getExpenses();
  }, []);

  return (
    <>
      <InfoBlock>
        <span>{formatDate(Date.now())}</span>
        <span>Number of transactions: {expenses?.length}</span>
        <span>Total:100 som</span>
      </InfoBlock>

      <ExpenseItem expenses={expenses} />
    </>
  );
}

const InfoBlock = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 90px 0 16px 0;

  span:first-child {
    font-size: 15px;
    font-weight: bolder;
    color: #334155;
  }
  span {
    font-size: 14px;
    font-weight: bolder;
    color: #94a3b8;
  }
`;
