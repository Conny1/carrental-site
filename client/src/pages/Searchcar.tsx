import { styled } from "styled-components";
import logo from "../assets/logo.png";
import { SelectCar } from "../components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Header = styled.div`
  /* outline: 1px solid red; */
  width: 100%;

  display: flex;

  background: linear-gradient(
    136deg,
    rgba(255, 152, 69, 1) 0%,
    rgba(253, 87, 107, 1) 97%
  );
`;
const Logo = styled.div`
  /* outline: 1px solid red; */
  max-width: 100px;
  /* max-height: 70px; */
  width: 100%;
  background-color: #fff;
  img {
    width: 100%;
    height: 100%;
  }
`;
const Dates = styled.div`
  /* outline: 1px solid gainsboro; */
  margin-top: 30px;

  background: linear-gradient(
    136deg,
    rgba(255, 152, 69, 1) 0%,
    rgba(253, 87, 107, 1) 97%
  );
  width: 80%;
  max-width: 900px;
  height: fit-content;
  display: flex;
  justify-content: space-evenly;

  overflow: hidden;

  input {
    height: 30px;
    flex: 1;
    border: none;
    border-right: 1px solid gainsboro;
  }
  label {
    margin-left: 3px;
    color: #fff;
    font-size: 13px;
    font-weight: bold;
  }
`;
const Button = styled.button`
  width: fit-content;
  font-size: 20px;
  background-color: none;
  border: none;
  outline: none;
`;
const Results = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 50px;
  height: 100vh;
`;
const Maps = styled.div`
  width: 40%;
`;
const Available = styled.div`
  flex: 1;
  overflow-y: scroll !important;
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Searchcar = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
        <Dates>
          <input type="text" name="place" id="where" placeholder="Where ?" />
          <label htmlFor="from">From:</label>
          <input type="date" name="From" id="from" placeholder="Start date" />
          <label htmlFor="Until">Until:</label>
          <input type="date" name="Until" id="until" placeholder="End Date" />
          <Button>🔍</Button>
        </Dates>
      </Header>
      <Button>Sort by:</Button>
      <Results>
        <Available>
          <SelectCar />
          <SelectCar />
          <SelectCar />
          <SelectCar />
          <SelectCar />
          <SelectCar />
        </Available>
        <Maps>maps</Maps>
      </Results>
    </Container>
  );
};

export default Searchcar;
