import styled from "styled-components";
import { Link } from "react-router-dom";

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 24px;
  margin: 20px 0;
`;

const SummaryCards = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 20px 0;
`;

const SummaryCard = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  width: 200px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  margin: 0 10px;
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 20px 0;
`;

const ActionButton = styled.button`
  background-color: #0074cc;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005aa3;
  }
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Heading>Admin Dashboard</Heading>

      <SummaryCards>
        <SummaryCard>
          <h2>Total Users</h2>
          <p>120</p>
        </SummaryCard>

        <SummaryCard>
          <h2>Total Rentals</h2>
          <p>45</p>
        </SummaryCard>

        <SummaryCard>
          <h2>Pending Approvals</h2>
          <p>10</p>
        </SummaryCard>
      </SummaryCards>

      <ActionButtons>
        <Link to="/admin/manage-users">
          <ActionButton>Manage Users</ActionButton>
        </Link>
        <Link to="/admin/manage-cars">
          <ActionButton>Manage Rentals</ActionButton>
        </Link>
        <Link to="/admin/approve-cars">
          <ActionButton>Approve Cars</ActionButton>
        </Link>
      </ActionButtons>
    </DashboardContainer>
  );
};

export default Dashboard;
