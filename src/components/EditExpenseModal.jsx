import { useState } from "react";
import styled from "styled-components";
import Modal from "./UI/Modal";

// TODO: getSingleExpenseByID()
// TODO: updateExpense()

export default function EditExpenseModal({ isOpen, onClose, expenseId }) {
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
    onClose();
  };

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
          <option value="">Select payment option</option>
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

        <Button type="submit">Submit</Button>
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

const Button = styled.button`
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

const Select = styled.select`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #d1d5db;
  font-size: 16px;
`;
