import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  color: #000;
`;
const CarImage = styled.div`
  width: 40%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  /* outline: 1px solid red; */
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CarInfo = styled.div`
  border: 1px solid gainsboro;
  border-left: none;
  border-radius: 10px;
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Carname = styled.p`
  font-size: 20px;
  font-weight: bold;

  span {
    font-size: 15px;
    background: linear-gradient(
      136deg,
      rgba(255, 152, 69, 1) 0%,
      rgba(253, 87, 107, 1) 97%
    );
    padding: 5px;
    border-radius: 5px;
  }
`;
const Item = styled.div`
  text-align: start;
`;

const SelectCar = () => {
  return (
    <Link to="/car">
      <Container>
        <CarImage>
          <img
            src="https://www.toyotakenya.ke/media/gamme/modeles/images/0824249665d1916b5a0ab7f11208397b.png"
            alt=""
          />
        </CarImage>
        <CarInfo>
          <Item>
            <Carname>
              Nissan juke.... <span> save </span>
            </Carname>
            <p>5.0⭐ </p>
            <p>Nairobi</p>
          </Item>

          <Item style={{ display: "flex", justifyContent: "space-between" }}>
            <p>Ksh 2000 /day</p>
            <p> $2000 esti. total </p>
          </Item>
        </CarInfo>
      </Container>
    </Link>
  );
};

export default SelectCar;
