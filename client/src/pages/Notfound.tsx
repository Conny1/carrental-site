import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFoundContainer = styled.div`
  text-align: center;
  padding: 50px;
`;

const NotFoundHeading = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const NotFoundMessage = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundHeading>404 - Not Found</NotFoundHeading>
      <NotFoundMessage>
        Sorry, the page you are looking for does not exist.
      </NotFoundMessage>
      <Link to="/">Go to Homepage</Link>
    </NotFoundContainer>
  );
};

export default NotFound;
