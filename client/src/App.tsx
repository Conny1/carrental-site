import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import { styled } from "styled-components";
import { AddorUpdate, Booked, Car, Rented, Searchcar } from "./pages";
import Auth from "./pages/Auth";

const Container = styled.div``;
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/search",
      element: <Searchcar />,
    },
    {
      path: "/car",
      element: <Car />,
    },
    {
      path: "/auth",
      element: <Auth />,
    },
    {
      path: "/booked",
      element: <Booked />,
    },
    {
      path: "/rented",
      element: <Rented />,
    },
    {
      path: "/addorupdate",
      element: <AddorUpdate />,
    },
  ]);
  return (
    <Container>
      <RouterProvider router={router} />
    </Container>
  );
}

export default App;
