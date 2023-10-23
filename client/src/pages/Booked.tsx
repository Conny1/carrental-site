import styled from "styled-components";
import { BookedCar, Nav } from "../components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavBar = styled.div`
  width: 100%;
`;

const BookedCars = styled.div`
  text-align: center;
  padding: 20px;
`;

const CarList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const Title = styled.h3`
  font-size: 24px;
  margin: 0;
`;

const Booked = () => {
  return (
    <Container>
      <NavBar>
        <Nav />
      </NavBar>
      <BookedCars>
        <Title>Your Booked Cars</Title>
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
