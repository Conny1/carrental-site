import { styled } from "styled-components";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`;
const Logo = styled.div`
  /* outline: 1px solid red; */
  max-width: 150px;
  max-height: 100px;
  img {
    width: 100%;
    height: 100%;
  }
`;
const Section2 = styled.div`
  /* outline: 1px solid red; */
  width: 50%;
  max-width: 500px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
const Button = styled.button``;

const Nav = () => {
  return (
    <Container>
      <Logo>
        <img src={logo} alt="logo" />
      </Logo>
      <Section2>
        <Button>Book a car</Button>

        <Button>Rent a car</Button>

        <Link to="/auth">
          {" "}
          <Button>Login</Button>{" "}
        </Link>
      </Section2>
    </Container>
  );
};

export default Nav;
