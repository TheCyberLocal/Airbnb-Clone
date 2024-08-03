import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import * as sessionActions from "./store/session";
import { Modal } from "./context/Modal";
import Navigation from "./components/Navigation";
import ViewAllSpots from "./components/ViewAllSpots";
import SpotPage from "./components/SpotPage";
import PageNotFound from "./components/PageNotFound";
import SpotForm from "./components/SpotForm";
import UserSpotPage from "./components/UserSpotPage";
import Footer from "./components/Footer/Footer";

function Layout() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => {
      setIsLoaded(true);
    });
  }, [dispatch]);

  return (
    <>
      <Modal />
      <Navigation isLoaded={isLoaded} />
      {isLoaded && <Outlet />}
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "*",
        element: <PageNotFound />,
      },
      {
        path: "/",
        element: <ViewAllSpots />,
      },
      {
        path: "/spots/new",
        element: <SpotForm />,
      },
      {
        path: "/spots/current",
        element: <UserSpotPage />,
      },
      {
        path: "/spots/:spotId/edit",
        element: <SpotForm />,
      },
      {
        path: "/spots/:spotId",
        element: <SpotPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
