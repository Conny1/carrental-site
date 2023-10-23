import React, { useState } from "react";
import styled from "styled-components";

const MpesaPaymentContainer = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
`;

const MpesaForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.label`
  display: flex;
  flex-direction: column;
  text-align: left;
  font-weight: bold;
  font-size: 18px;
`;

const MpesaInput = styled.input`
  padding: 12px;
  border: 2px solid #0074cc;
  border-radius: 4px;
  font-size: 16px;
  outline: none;

  ::placeholder {
    color: #ccc;
  }
`;

const MpesaPaymentButton = styled.button`
  padding: 12px 20px;
  background-color: #0074cc;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005aaa;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 16px;
`;

const MpesaPayment = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleMpesaPayment = async (event: React.FormEvent) => {
    event.preventDefault();

    // Basic validation (you can implement more robust validation)
    if (!phoneNumber || !amount) {
      setError("Please fill in all M-Pesa details.");
      return;
    }
  };

  return (
    <MpesaPaymentContainer>
      <h2>Pay with M-Pesa</h2>
      <MpesaForm onSubmit={handleMpesaPayment}>
        <FormGroup>
          Phone Number:
          <MpesaInput
            type="text"
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          Amount (KES):
          <MpesaInput
            type="text"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </FormGroup>
        <MpesaPaymentButton type="submit">Pay</MpesaPaymentButton>
      </MpesaForm>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </MpesaPaymentContainer>
  );
};

export default MpesaPayment;
