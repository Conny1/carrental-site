import { styled } from "styled-components";
import { Nav } from "../components";

const Container = styled.div`
  display: flex;
  gap: 10px;
`;
const NavBar = styled.div`
  width: 100%;
`;
const Owner = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-between;
  align-items: center;
  p {
    font-weight: bolder;
    font-size: 20px;
  }
  img {
    width: 50px;
    height: 50px;
    object-fit: contain;
    border-radius: 30px;
  }
`;
const CarInfo = styled.div`
  flex: 1;
  padding-left: 15px;
`;
const Carimg = styled.div`
  width: 100%;
  height: 400px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const CarDesc = styled.div`
  width: 100%;
  text-align: start;
`;
const Features = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  p {
    outline: 1px solid gainsboro;
    padding: 5px;
  }
`;

const Maps = styled.div`
  background-color: black;
  width: 100%;
  height: 300px;
`;
const RentInfo = styled.div`
  width: 40%;
  height: 700px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Dates = styled.div`
  position: fixed;
  /* height: 500px; */
  display: flex;
  gap: 10px;
  flex-direction: column;
  width: 300px;
  outline: 1px solid gainsboro;
  border-radius: 20px;
  margin-bottom: 50px;
  input {
    height: 30px;
  }
  div {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
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
        <CarInfo>
          <Carimg>
            <img
              src="https://www.toyotakenya.ke/media/gamme/modeles/images/0824249665d1916b5a0ab7f11208397b.png"
              alt="make"
            />
          </Carimg>
          <Owner>
            <img
              src="https://www.toyotakenya.ke/media/gamme/modeles/images/0824249665d1916b5a0ab7f11208397b.png"
              alt="make"
            />
            <p>Mbuya Joel</p>
          </Owner>
          <CarDesc>
            <h3>Description</h3>
            <p>
              2020 Black Spark in Houston for rent by owner. Great on gas No
              smoking and pets please! Includes: gps navigation system, air
              conditioning, apple carplay, android auto, aux/mp3 enabled,
              bluetooth wireless
            </p>
          </CarDesc>

          <h3>Features</h3>
          <Features>
            <p>Automatic</p>
            <p>Instant rental</p>
            <p>GPS navigation system</p>
            <p>Apple CarPlay</p>
            <p>AUX/MP3 enabled</p>
            <p>Automatic transmission</p>
            <p>Getaround Connect™ enabled</p>
            <p>Air conditioning</p>
            <p>Android Auto</p>
            <p>Bluetooth wireless</p>
          </Features>
          <Maps>map</Maps>
        </CarInfo>

        <RentInfo>
          <Dates>
            <h4>Duration</h4>
            <input type="text" name="place" id="where" placeholder="Where ?" />
            <label htmlFor="from">From:</label>
            <input type="date" name="From" id="from" placeholder="Start date" />
            <label htmlFor="Until">Until:</label>
            <input type="date" name="Until" id="until" placeholder="End Date" />
            <div>
              <h4>Total:</h4>
              <p>8hrs</p>
              <p>ksh2000</p>
            </div>
            <Button>Select</Button>
          </Dates>
        </RentInfo>
      </Container>
    </>
  );
}

export default Car;
