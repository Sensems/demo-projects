import { createBrowserRouter } from "react-router-dom";

import { RouteObject } from "react-router-dom";
import Layout from "../layout";

const routerList: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
  },
];

const router = createBrowserRouter(routerList);

export default router;
