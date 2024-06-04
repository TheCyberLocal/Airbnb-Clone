import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import * as sessionActions from "./store/session";
import { Modal } from "./context/Modal";
import Navigation from "./components/Navigation";
import ViewAllSpots from "./components/ViewAllSpots";
import SpotPage from "./components/SpotPage";

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
    </>
  );
}

const PageNotFound = () => {
  return (
    <h1
      style={{
        display: "flex",
        justifyContent: "center",
        fontSize: "72px",
      }}
    >
      Page Not Found 404
    </h1>
  );
};

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
