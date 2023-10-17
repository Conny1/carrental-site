import { styled } from "styled-components";
import { RentedCar, Nav } from "../components";
import { Link } from "react-router-dom";

const Container = styled.div``;
const NavBar = styled.div`
  width: 100%;
`;
const RentedCars = styled.div``;
const CarList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

const Rented = () => {
  return (
    <Container>
      <NavBar>
        <Nav />
      </NavBar>
      <RentedCars>
        <Link to="/addorupdate">
          <button>Add car</button>
        </Link>
        <h3>Your Rented cars</h3>

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
