import styled from "styled-components";
import Button from "./UI/Button";
import { formatDate } from "../utils/helpers";
import { API_KEY } from "../utils/constants";
import EditExpenseModal from "./EditExpenseModal";
import { useContext, useState } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

export default function ExpenseItem({ expenses = [] }) {
  const [showModal, setShowModal] = useState(false);
  const [currentExpenseId, setCurrentExpenseId] = useState(null);
  const { deleteExpense } = useContext(ExpenseContext);

  const handleDeleteExpense = (expenseId) => {
    deleteExpense(expenseId);
  };

  const handleOpenEditModal = (expenseId) => {
    setCurrentExpenseId(expenseId);
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
              <Button
                variant="regular"
                onClick={() => handleOpenEditModal(item.id)}
              >
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

      {showModal && (
        <EditExpenseModal
          onClose={handleOpenEditModal}
          isOpen={showModal}
          currentExpenseId={currentExpenseId}
        />
      )}
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
