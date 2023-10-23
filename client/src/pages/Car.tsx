import { LealfletMap, Nav } from "../components";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  color: #000;
`;

const NavBar = styled.div`
  width: 100%;
`;

const OwnerContainer = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-between;
  align-items: center;
`;

const OwnerImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  border-radius: 30px;
`;

const OwnerName = styled.p`
  font-weight: bolder;
  font-size: 20px;
`;

const CarInfoContainer = styled.div`
  flex: 1;
  padding-left: 15px;
`;

const CarImage = styled.div`
  width: 100%;
  height: 400px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Description = styled.div`
  width: 100%;
  text-align: start;
`;

const FeaturesContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const Feature = styled.p`
  outline: 1px solid gainsboro;
  padding: 5px;
`;

const Maps = styled.div`
  /* background-color: black; */
  outline: 1px solid gainsboro;
  width: 100%;
  height: 300px;
`;

const RentInfoContainer = styled.div`
  width: 40%;
  height: 700px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Dates = styled.div`
  position: fixed;
  display: flex;
  gap: 10px;
  flex-direction: column;
  width: 300px;
  outline: 1px solid gainsboro;
  border-radius: 20px;
  margin-bottom: 50px;

  input {
    height: 30px;
    padding: 5px;
  }

  div {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

const Total = styled.p`
  font-weight: bold;
`;

const Price = styled.p`
  font-size: 20px;
`;

const Button = styled.button`
  width: fit-content;
  font-size: 20px;
  height: fit-content;
`;

function Car() {
  return (
    <>
      <NavBar>
        <Nav />
      </NavBar>
      <Container>
        <CarInfoContainer>
          <CarImage>
            <img
              src="https://www.toyotakenya.ke/media/gamme/modeles/images/0824249665d1916b5a0ab7f11208397b.png"
              alt="make"
            />
          </CarImage>
          <OwnerContainer>
            <OwnerImage
              src="https://www.toyotakenya.ke/media/gamme/modeles/images/0824249665d1916b5a0ab7f11208397b.png"
              alt="make"
            />
            <OwnerName>Mbuya Joel</OwnerName>
          </OwnerContainer>
          <Description>
            <h3>Description</h3>
            <p>
              2020 Black Spark in Houston for rent by owner. Great on gas. No
              smoking and pets please! Includes: gps navigation system, air
              conditioning, apple carplay, android auto, aux/mp3 enabled,
              bluetooth wireless.
            </p>
          </Description>
          <h3>Features</h3>
          <FeaturesContainer>
            <Feature>Automatic</Feature>
            <Feature>Instant rental</Feature>
            <Feature>GPS navigation system</Feature>
            <Feature>Apple CarPlay</Feature>
            <Feature>AUX/MP3 enabled</Feature>
            <Feature>Automatic transmission</Feature>
            <Feature>Getaround Connect™ enabled</Feature>
            <Feature>Air conditioning</Feature>
            <Feature>Android Auto</Feature>
            <Feature>Bluetooth wireless</Feature>
          </FeaturesContainer>
          <Maps>
            <LealfletMap />
          </Maps>
        </CarInfoContainer>

        <RentInfoContainer>
          <Dates>
            <h4>Duration</h4>
            <input type="text" name="place" id="where" placeholder="Where ?" />
            <label htmlFor="from">From:</label>
            <input type="date" name="From" id="from" placeholder="Start date" />
            <label htmlFor="Until">Until:</label>
            <input type="date" name="Until" id="until" placeholder="End Date" />
            <div>
              <h4>Total:</h4>
              <Total>8hrs</Total>
              <Price>ksh2000</Price>
            </div>
            <Button>Select</Button>
          </Dates>
        </RentInfoContainer>
      </Container>
    </>
  );
}

export default Car;
