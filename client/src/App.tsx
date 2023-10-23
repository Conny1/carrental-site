import "./App.css";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import { styled } from "styled-components";
import {
  AddorUpdate,
  Booked,
  Car,
  Dashboard,
  NotFound,
  Payment,
  Profile,
  Rented,
  Searchcar,
} from "./pages";
import Auth from "./pages/Auth";
import { Approvecars, Manageusers } from "./pages/admin";

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
      path: "/profile",
      element: <Profile />,
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
    {
      path: "/payment",
      element: <Payment />,
    },
    {
      path: "/admin",
      element: (
        <>
          <Dashboard />
          <Outlet />
        </>
      ),
      children: [
        {
          path: "manage-users",
          element: <Manageusers />,
        },
        {
          path: "approve-cars",
          element: <Approvecars />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return (
    <Container>
      <RouterProvider router={router} />
    </Container>
  );
}

export default App;
