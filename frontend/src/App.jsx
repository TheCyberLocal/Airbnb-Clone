import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import * as sessionActions from "./store/session";
import { Modal } from "./context/Modal";
// import LoginFormPage from "./components/LoginFormPage";
// import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation/Navigation-bonus";
import ViewAllSpots from "./components/ViewAllSpots/ViewAllSpots";

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

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "*",
        element: <h1>Page Not Found 404</h1>,
      },
      {
        path: "/",
        element: <ViewAllSpots />,
      },
      // {
      //   path: "login",
      //   element: <LoginFormPage />,
      // },
      // {
      //   path: "signup",
      //   element: <SignupFormPage />,
      // },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
