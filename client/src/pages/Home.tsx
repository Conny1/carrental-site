import { styled } from "styled-components";
import { Nav, Footer } from "../components";
import headerimg from "../assets/headerimg.jpeg";

const Container = styled.div`
  width: 100%;
  /* outline: 1px solid yellow; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const NavBar = styled.div`
  width: 100%;
`;
const Header = styled.div`
  /* outline: 1px solid red; */
  width: 100%;
  min-height: 500px;
  display: flex;
  justify-content: center;
  background-size: contain;
  background: url(${headerimg});
  background-position: center;
  background-repeat: no-repeat;
`;
const Dates = styled.div`
  outline: 1px solid gainsboro;
  margin-top: 30px;
  border-radius: 20px;
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
  align-items: center;
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
`;

const Slogan = styled.div`
  margin-top: 50px;
  p {
    font-weight: bold;
    font-size: 30px;
    text-transform: capitalize;
  }
`;

const CarFilters = styled.div`
  display: flex;
  gap: 10px;
  overflow: hidden;
  width: 70%;
  align-self: center;
  /* outline: 1px solid red; */
  margin-bottom: 50px;
  height: auto;
  justify-content: space-between;
`;

const Item = styled.div`
  width: 30%;
  min-width: 200px;
  outline: 1px solid gainsboro;
  height: 200px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Home = () => {
  return (
    <Container>
      <NavBar>
        <Nav />
      </NavBar>
      <Header>
        <Dates>
          <input type="text" name="place" id="where" placeholder="Where ?" />
          <label htmlFor="from">From:</label>
          <input type="date" name="From" id="from" placeholder="Start date" />
          <label htmlFor="Until">Until:</label>
          <input type="date" name="Until" id="until" placeholder="End Date" />
          <Button>🔍</Button>
        </Dates>
      </Header>
      <Slogan>
        <p>"Quality Cars, Unforgettable Journeys."</p>
      </Slogan>
      <p style={{ textAlign: "start", fontSize: "20px", fontWeight: "bold" }}>
        Browse by make"
      </p>
      <CarFilters>
        <Item>
          <img
            src="https://www.toyotakenya.ke/media/gamme/modeles/images/0824249665d1916b5a0ab7f11208397b.png"
            alt="make"
          />
          <p>Toyota</p>
        </Item>

        <Item>
          <img
            src="https://www.toyotakenya.ke/media/gamme/modeles/images/0824249665d1916b5a0ab7f11208397b.png"
            alt="make"
          />
          <p>Toyota</p>
        </Item>

        <Item>
          <img
            src="https://www.toyotakenya.ke/media/gamme/modeles/images/0824249665d1916b5a0ab7f11208397b.png"
            alt="make"
          />
          <p>Toyota</p>
        </Item>

        <Item>
          <img
            src="https://www.toyotakenya.ke/media/gamme/modeles/images/0824249665d1916b5a0ab7f11208397b.png"
            alt="make"
          />
          <p>Toyota</p>
        </Item>

        <Item>
          <img
            src="https://www.toyotakenya.ke/media/gamme/modeles/images/0824249665d1916b5a0ab7f11208397b.png"
            alt="make"
          />
          <p>Toyota</p>
        </Item>
      </CarFilters>

      <p style={{ textAlign: "start", fontSize: "20px", fontWeight: "bold" }}>
        Browse by Location"
      </p>

      <CarFilters>
        <Item>
          <img
            src="https://www.blackpast.org/wp-content/uploads/prodimages/files/Nairobi_city_center_May_2_2015_Photo_by_Ninara_CC_BY_2.0.jpg"
            alt="place"
          />
          <p>Nairobi</p>
        </Item>

        <Item>
          <img
            src="https://www.blackpast.org/wp-content/uploads/prodimages/files/Nairobi_city_center_May_2_2015_Photo_by_Ninara_CC_BY_2.0.jpg"
            alt="place"
          />
          <p>Mombasa</p>
        </Item>

        <Item>
          <img
            src="https://www.blackpast.org/wp-content/uploads/prodimages/files/Nairobi_city_center_May_2_2015_Photo_by_Ninara_CC_BY_2.0.jpg"
            alt="place"
          />
          <p>Kisumu</p>
        </Item>

        <Item>
          <img
            src="https://www.blackpast.org/wp-content/uploads/prodimages/files/Nairobi_city_center_May_2_2015_Photo_by_Ninara_CC_BY_2.0.jpg"
            alt="place"
          />
          <p>Eldoret</p>
        </Item>

        <Item>
          <img
            src="https://www.blackpast.org/wp-content/uploads/prodimages/files/Nairobi_city_center_May_2_2015_Photo_by_Ninara_CC_BY_2.0.jpg"
            alt="place"
          />
          <p>Thika</p>
        </Item>
      </CarFilters>

      <Footer />
    </Container>
  );
};

export default Home;
