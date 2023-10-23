import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  color: #000;
  text-decoration: none; /* Remove the underline from links */
`;

const CarImage = styled.div`
  width: 40%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
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
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CarName = styled.p`
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

const Rating = styled.p`
  font-size: 16px;
  color: #666;
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Price = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

const EstimateTotal = styled.p`
  font-size: 16px;
  color: #666;
`;

const SelectCar = () => {
  return (
    <Link to="/car" style={{ textDecoration: "none" }}>
      <Container>
        <CarImage>
          <img
            src="https://www.toyotakenya.ke/media/gamme/modeles/images/0824249665d1916b5a0ab7f11208397b.png"
            alt=""
          />
        </CarImage>
        <CarInfo>
          <Item>
            <CarName>
              Nissan Juke... <span>save</span>
            </CarName>
            <Rating>5.0⭐</Rating>
            <p>Nairobi</p>
          </Item>
          <Item>
            <PriceContainer>
              <Price>Ksh 2000 /day</Price>
              <EstimateTotal>$2000 esti. total</EstimateTotal>
            </PriceContainer>
          </Item>
        </CarInfo>
      </Container>
    </Link>
  );
};

export default SelectCar;
