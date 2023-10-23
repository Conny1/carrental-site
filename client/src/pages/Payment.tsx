import React, { useState } from "react";
import styled from "styled-components";
import { Cardpayment, Mpesa } from "../components";

// Define styled components
const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const PaymentMethodOption = styled.label`
  display: flex;
  align-items: center;
  margin: 10px;
  cursor: pointer;
`;

const PaymentMethodRadio = styled.input`
  margin-right: 10px;
`;

const PaymentButton = styled.button`
  padding: 10px 20px;
  background-color: #0074cc;
  color: white;
  border: none;
  cursor: pointer;
`;

interface PaymentsProps {}

const Payments: React.FC<PaymentsProps> = () => {
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [card, setCard] = useState<boolean>(false);

  const handlePayment = async () => {
    if (paymentMethod === "card") {
      // Handle card payments using a payment gateway
      setCard(true);
    } else if (paymentMethod === "mpesa") {
      setCard(false);
    } else {
      // Handle the case where no payment method is selected
    }
  };

  return (
    <PaymentContainer>
      <h2>Choose a Payment Method</h2>
      <PaymentMethodOption>
        <PaymentMethodRadio
          type="radio"
          value="card"
          checked={paymentMethod === "card"}
          onChange={() => setPaymentMethod("card")}
        />
        Credit/Debit Card
      </PaymentMethodOption>
      <PaymentMethodOption>
        <PaymentMethodRadio
          type="radio"
          value="mpesa"
          checked={paymentMethod === "mpesa"}
          onChange={() => setPaymentMethod("mpesa")}
        />
        M-Pesa (Mobile Money)
      </PaymentMethodOption>
      <PaymentButton onClick={handlePayment}>Proceed to Payment</PaymentButton>
      {card ? <Cardpayment /> : <Mpesa />}
    </PaymentContainer>
  );
};

export default Payments;
