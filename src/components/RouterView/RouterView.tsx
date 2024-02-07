import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../../layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
]);

function RouterView() {
  return <RouterProvider router={router} />;
}

export default RouterView;
