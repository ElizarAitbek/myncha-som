import styled from "styled-components";
import Input from "./UI/Input";
import Button from "./UI/Button";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

export default function Header() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <Main>
        <MainLogo>
          <img src="/expense-register.svg" alt="cash icon" />
          <span>Myncha</span>Som
        </MainLogo>

        <InputBlock>
          <img src="/search.svg" alt="search icon" />

          <Input type="text" placeholder="Search an expense..." />
        </InputBlock>

        <Button onClick={handleShowModal}>+ Add New Expense</Button>
      </Main>

      <ExpenseForm onClose={handleShowModal} isOpen={showModal} />
    </>
  );
}

const Main = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MainLogo = styled.p`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 24px;
  color: rgb(71 85 105);
  & img {
    width: 30px;
    background-color: #7c3aed;
    border-radius: 8px;
    padding: 2px;
  }
  & span {
    font-weight: bold;
    color: #7c3aed;
  }
`;

const InputBlock = styled.div`
  height: 48px;
  margin-top: 3px;
  background-color: #f8fafc;
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  border-radius: 6px;
  padding-left: 12px;
  gap: 4px;
  width: 300px;
`;
