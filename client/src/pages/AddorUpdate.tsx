import styled from "styled-components";
import { Nav } from "../components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  height: 100vh;
`;
const NavBar = styled.div`
  width: 100%;
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 40%;
  padding: 20px;
  textarea {
    height: 100px;
  }
`;

const Input = styled.input`
  height: 30px;
  background-color: transparent;
  border: none;
  outline: 1px solid #9f9f9f;
`;
const H3 = styled.h3`
  line-height: 0px;
`;
const Button = styled.button`
  cursor: pointer;
  max-width: 100px;
  border: none;
  padding: 5px;
  background-color: #000;
  color: #ffffff;
`;
const AddorUpdate = () => {
  return (
    <Container>
      <NavBar>
        <Nav />
      </NavBar>
      <H3>Input or change car info</H3>

      <Item>
        <Input type="text" placeholder="select car name" />
        <Input type="text" placeholder="Model eg Toyota mark x" />
        <textarea
          name="description"
          id="description"
          placeholder="Car description"
        ></textarea>

        <textarea
          name="features"
          id="features"
          placeholder="Car features, Nb, each feature should be separated by a coma eg"
        ></textarea>
        <label htmlFor="carpic">
          <b>Upload car picture</b>{" "}
        </label>
        <input type="file" name="carpic" id="carpic" />

        <Button>Submit</Button>
      </Item>
    </Container>
  );
};

export default AddorUpdate;
