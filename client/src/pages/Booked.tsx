import { styled } from "styled-components";
import { BookedCar, Nav } from "../components";

const Container = styled.div``;
const NavBar = styled.div`
  width: 100%;
`;
const BookedCars = styled.div``;
const CarList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

const Booked = () => {
  return (
    <Container>
      <NavBar>
        <Nav />
      </NavBar>
      <BookedCars>
        <h3>Your Booked cars</h3>
        <CarList>
          <BookedCar />
          <BookedCar />
          <BookedCar />
          <BookedCar />
        </CarList>
      </BookedCars>
    </Container>
  );
};

export default Booked;
