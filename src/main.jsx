import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/layout/Layout";

import Index from "./pages/Index";
import NewArrivalsPage from "./pages/NewArrivalsPage";

import Error404Page from "./pages/error/Error404Page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
      },
    ],
  },
  {
    path: "/NewArrivals",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <NewArrivalsPage />,
      },
    ],
  },
  {
    path: "/404",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Error404Page />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
