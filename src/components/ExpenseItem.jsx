import styled from "styled-components";
import Button from "./UI/Button";
import { formatDate } from "../utils/helpers";
import { API_KEY } from "../utils/constants";
import EditExpenseModal from "./EditExpenseModal";
import { useState } from "react";

export default function ExpenseItem({ expenses = [] }) {
  const [showModal, setShowModal] = useState(false);

  async function deleteExpense(expenseId) {
    try {
      const res = await fetch(`${API_KEY}/${expenseId}`, {
        method: "DELETE",
      });

      if (!res.ok) console.error("cant delete expense!");
    } catch (error) {
      throw new Error(error);
    }
  }

  const handleDeleteExpense = (id) => {
    deleteExpense(id);
  };

  const handleOpenEditModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <ExpenseWrapper>
      {expenses.length ? (
        expenses.map((item) => (
          <ExpenseMain key={item.id}>
            <ExpenseDate>{formatDate(item.date)}</ExpenseDate>
            <ExpenseDetails>
              <section>
                <p>{item.title}</p>
                <span>{item.paymentMethod}</span>
              </section>
              <p>{item.amount}</p>
            </ExpenseDetails>
            <ButtonBlock>
              <Button variant="regular" onClick={handleOpenEditModal}>
                Edit
              </Button>
              <Button
                variant="white"
                onClick={() => handleDeleteExpense(item.id)}
              >
                Delete
              </Button>
            </ButtonBlock>
          </ExpenseMain>
        ))
      ) : (
        <Lodaing>Loading...</Lodaing>
      )}

      <EditExpenseModal onClose={handleOpenEditModal} isOpen={showModal} />
    </ExpenseWrapper>
  );
}
const ExpenseWrapper = styled.div`
  overflow-y: auto;
  max-height: 75%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ExpenseMain = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  border: 1px solid #f1f5f9;
  box-shadow: 1px 4px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 24px 20px;
`;
const ExpenseDate = styled.span`
  width: 80px;
  height: 40px;
  color: #fff;
  background-color: #7c3aed;
  display: flex;
  align-items: center;
  text-align: center;
  border-radius: 8px;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;
const ExpenseDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  p {
    font-weight: bold;
  }
  span {
    color: #94a3b8;
  }
`;
const ButtonBlock = styled.div`
  display: flex;
  gap: 10px;
`;
const Lodaing = styled.h1`
  text-align: center;
`;