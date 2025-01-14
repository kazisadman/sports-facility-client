import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../components/pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [{ path: "/", element: <Home></Home> }],
  },
]);

export default router;
