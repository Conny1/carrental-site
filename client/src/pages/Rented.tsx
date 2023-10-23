import styled from "styled-components";
import { RentedCar, Nav } from "../components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  height: 100vh;
`;

const NavBar = styled.div`
  width: 100%;
`;

const RentedCars = styled.div`
  width: 100%;
`;

const CarList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const AddCarButton = styled(Link)`
  text-decoration: none;
  color: #ff7449;
  font-size: 18px;
  font-weight: bold;
  padding: 10px 20px;
  background-color: #fff;
  /* border: 2px solid #0074cc; */
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, transform 0.2s;

  &:hover {
    background-color: #ff7449;
    color: #fff;
    transform: scale(1.05);
  }
`;

const Rented = () => {
  return (
    <Container>
      <NavBar>
        <Nav />
      </NavBar>
      <RentedCars>
        <AddCarButton to="/addorupdate">Add a New Car</AddCarButton>
        <h1>Your Rented Cars</h1>
        <CarList>
          <RentedCar />
          <RentedCar />
          <RentedCar />
          <RentedCar />
        </CarList>
      </RentedCars>
    </Container>
  );
};

export default Rented;
