import styled from "styled-components";

const carApprovalData = [
  { id: 1, make: "Toyota", model: "Camry" },
  { id: 2, make: "Honda", model: "Accord" },
  { id: 3, make: "Ford", model: "Explorer" },
  // ...mock data for car approval requests
];

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f1f1f1;
  border-radius: 10px;
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
`;

const CarList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  max-width: 600px;
`;

const CarItem = styled.li`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ApproveButton = styled.button`
  background: #4caf50;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #388e3c;
  }
`;

const RejectButton = styled.button`
  background: #f44336;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d32f2f;
  }
`;

const ApproveCars = () => {
  return (
    <PageContainer>
      <Title>Approve Cars</Title>
      <CarList>
        {carApprovalData.map((car) => (
          <CarItem key={car.id}>
            <div>
              Car Make: <strong>{car.make}</strong>, Model: <em>{car.model}</em>
            </div>
            <div>
              <ApproveButton>Approve</ApproveButton>
              <RejectButton>Reject</RejectButton>
            </div>
          </CarItem>
        ))}
      </CarList>
    </PageContainer>
  );
};

export default ApproveCars;
