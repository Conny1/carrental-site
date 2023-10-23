import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background: linear-gradient(
    136deg,
    rgba(255, 152, 69, 1) 0%,
    rgba(253, 87, 107, 1) 97%
  );
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Copyright = styled.p`
  color: #fff;
  font-size: 14px;
`;

const Links = styled.div`
  a {
    color: #fff;
    text-decoration: none;
    margin-right: 20px;
    font-size: 14px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const Footer = () => {
  return (
    <Container>
      <FooterContent>
        <Copyright>&copy; 2023 carbej</Copyright>
        <Links>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Us</a>
        </Links>
      </FooterContent>
    </Container>
  );
};

export default Footer;
