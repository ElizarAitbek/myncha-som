import { useEffect, useState } from "react";
import styled from "styled-components";
import Modal from "./UI/Modal";
import { API_KEY } from "../utils/constants";

export default function EditExpenseModal({
  isOpen,
  onClose,
  currentExpenseId,
}) {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    paymentMethod: "",
    date: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { title, price, paymentMethod, date } = formData;

    if (!title.trim() || !price || !paymentMethod || !date) {
      alert("Заполните все поля");
      return null;
    }
    updateExpense(formData, currentExpenseId);
    onClose();
  };

  const handleCancelUpdate = () => {
    onClose();
  };

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
    } catch (error) {
      throw new Error(error);
    }
  }

  useEffect(() => {
    async function getSingleExpenseById(expenseId) {
      try {
        const res = await fetch(`${API_KEY}/${expenseId}`);
        const data = await res.json();

        setFormData({
          title: data.title,
          price: data.price,
          paymentMethod: data.paymentMethod,
          date: data.date,
        });
      } catch (error) {
        throw new Error(error);
      }
    }

    if (currentExpenseId) {
      getSingleExpenseById(currentExpenseId);
    }
  }, [currentExpenseId]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <FormContainer onSubmit={handleSubmit}>
        <Label htmlFor="title">Title</Label>
        <Input
          type="text"
          id="title"
          name="title"
          placeholder="enter expense..."
          value={formData.title}
          onChange={handleInputChange}
        />

        <Label htmlFor="price">Price</Label>
        <Input
          type="number"
          id="price"
          name="price"
          placeholder="enter price..."
          value={formData.price}
          onChange={handleInputChange}
        />

        <Label htmlFor="paymentMethod">Payment Method</Label>
        <Select
          name="paymentMethod"
          id="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleInputChange}
        >
          <option value="cash">Cash</option>
          <option value="card">Card</option>
        </Select>

        <Label htmlFor="date">Date</Label>
        <Input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
        />

        <SubmitButton type="submit">Submit</SubmitButton>
        <CancelButton type="button" onClick={handleCancelUpdate}>
          Cancel
        </CancelButton>
      </FormContainer>
    </Modal>
  );
}
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  border-radius: 8px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #d1d5db;
  font-size: 16px;
`;

const Label = styled.label`
  font-size: 14px;
  color: #374151;
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: #7c3aed;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #6d28d9;
  }
`;
const CancelButton = styled.button`
  padding: 10px;
  background-color: #ee2c2c;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #a01e1e;
  }
`;

const Select = styled.select`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #d1d5db;
  font-size: 16px;
`;
