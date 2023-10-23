import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 100vh;
`;

const AuthBox = styled.div`
  background-color: #f4f4f4;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

const Input = styled.input`
  height: 40px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  margin-bottom: 15px;
  outline: none;
`;

const Button = styled.button`
  background-color: #0074cc;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  width: 100%;
`;

const H3 = styled.h3`
  font-size: 24px;
  margin: 0;
  line-height: 1;
  text-transform: uppercase;
`;

const Auth = () => {
  return (
    <Container>
      <H3>Log in</H3>
      <AuthBox>
        <Input type="text" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button>Login</Button>
      </AuthBox>
      <H3>Or</H3>
      <H3>Sign Up</H3>
      <AuthBox>
        <Input type="text" placeholder="Name" />
        <Input type="text" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button>Sign Up</Button>
      </AuthBox>
    </Container>
  );
};

export default Auth;
