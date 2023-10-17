import { styled } from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 150px;
  background: linear-gradient(
    136deg,
    rgba(255, 152, 69, 1) 0%,
    rgba(253, 87, 107, 1) 97%
  );
`;

const Footer = () => {
  return (
    <Container>
      <p> ©2023 carbej</p>
    </Container>
  );
};

export default Footer;
