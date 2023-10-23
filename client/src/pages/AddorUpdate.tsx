import styled from "styled-components";
import { Nav } from "../components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  height: 100vh;
`;

const NavBar = styled.div`
  width: 100%;
`;

const FormContainer = styled.div`
  width: 80%;
  max-width: 600px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
`;

const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  height: 40px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  height: 100px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Label = styled.label`
  font-size: 16px;
`;

const SubmitButton = styled.button`
  cursor: pointer;
  background-color: #0074cc;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
`;

const AddorUpdate = () => {
  return (
    <Container>
      <NavBar>
        <Nav />
      </NavBar>
      <FormContainer>
        <Title>Input or Change Car Info</Title>
        <FormGroup>
          <Label>Car Name</Label>
          <Input type="text" placeholder="Enter car name" />
        </FormGroup>
        <FormGroup>
          <Label>Car Model</Label>
          <Input
            type="text"
            placeholder="Enter car model (e.g., Toyota Mark X)"
          />
        </FormGroup>
        <FormGroup>
          <Label>Car Description</Label>
          <TextArea
            name="description"
            placeholder="Enter car description"
          ></TextArea>
        </FormGroup>
        <FormGroup>
          <Label>Car Features</Label>
          <TextArea
            name="features"
            placeholder="Enter car features (separated by commas)"
          ></TextArea>
        </FormGroup>
        <FormGroup>
          <Label>Upload Car Picture</Label>
          <Input type="file" name="carpic" />
        </FormGroup>
        <SubmitButton>Submit</SubmitButton>
      </FormContainer>
    </Container>
  );
};

export default AddorUpdate;
