import React, { useState } from "react";
import styled from "styled-components";

const CardPaymentContainer = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
`;

const CardForm = styled.form`
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

const CardInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const CardPaymentButton = styled.button`
  padding: 12px 20px;
  background-color: #0074cc;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 16px;
`;

const CardPayment = () => {
  const [cardNumber, setCardNumber] = useState<string>("");
  const [expirationDate, setExpirationDate] = useState<string>("");
  const [cvv, setCvv] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Basic validation (you can implement more robust validation)
    if (!cardNumber || !expirationDate || !cvv) {
      setError("Please fill in all card details.");
      return;
    }

    // Here, you can implement your own logic to handle the payment,
    // send the card details to your server, or perform other actions.

    console.log("Card Payment Details:", {
      cardNumber,
      expirationDate,
      cvv,
    });

    // Clear the form and any previous errors.
    setCardNumber("");
    setExpirationDate("");
    setCvv("");
    setError(null);
  };

  return (
    <CardPaymentContainer>
      <h2>Card Payment</h2>
      <CardForm onSubmit={handleSubmit}>
        <FormGroup>
          Card Number:
          <CardInput
            type="text"
            placeholder="Enter card number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          Expiration Date:
          <CardInput
            type="text"
            placeholder="MM/YY"
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          CVV:
          <CardInput
            type="text"
            placeholder="CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
        </FormGroup>
        <CardPaymentButton type="submit">Pay</CardPaymentButton>
      </CardForm>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </CardPaymentContainer>
  );
};

export default CardPayment;
