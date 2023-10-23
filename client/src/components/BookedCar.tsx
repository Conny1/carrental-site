import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
  color: #000;
`;

const CarImage = styled.div`
  width: 100%;
  height: 150px;
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
  gap: 10px;
`;

const CarName = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const CarStatus = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const StatusButton = styled.button`
  padding: 5px 10px;
  background-color: #0074cc;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
`;

const BookedCar = () => {
  return (
    <Container>
      <CarImage>
        <img
          src="https://www.toyotakenya.ke/media/gamme/modeles/images/0824249665d1916b5a0ab7f11208397b.png"
          alt=""
        />
      </CarImage>
      <CarInfo>
        <CarName>Nissan Juke...</CarName>
        <CarStatus>
          <StatusButton>Cancel</StatusButton>
          <StatusButton>Active</StatusButton>
        </CarStatus>
      </CarInfo>
    </Container>
  );
};

export default BookedCar;
