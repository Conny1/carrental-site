import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  height: 100vh;
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 40%;
  padding: 20px;
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
const Auth = () => {
  return (
    <Container>
      <H3>Log in</H3>

      <Item>
        <Input type="text" placeholder="Email" />
        <Input type="password" placeholder="password" />
        <Button>Login</Button>
      </Item>

      <H3>Or</H3>
      <H3>SignUp</H3>
      <Item>
        <Input type="text" placeholder="Name" />
        <Input type="text" placeholder="Email" />

        <Input type="password" placeholder="password" />
        <Button>Signup</Button>
      </Item>
    </Container>
  );
};

export default Auth;
