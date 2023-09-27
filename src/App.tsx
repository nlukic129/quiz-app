import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";
import ErrorPage from "./pages/ErrorPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/quiz",
    element: <QuizPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
