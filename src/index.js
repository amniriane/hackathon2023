import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Dashboard from "./feature/dashboard/Dashboard";
import ListInvoices from "./feature/invoices/List";
import { NotificationLayout } from "./feature/notification/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "dashboard",
        children: [
          {
            path: "default",
            element: <Dashboard />,
          },
          {
            path: ":id",
            element: <Dashboard />,
          },
          {
            path: "*",
            element: <Navigate to="default" replace />,
          },
          {
            path: "",
            element: <Navigate to="default" replace />,
          },
        ],
      },
      {
        path: "admin",
        children: [
          {
            path: "new-client",
            element: <div>form client</div>,
          },
          {
            path: "new-admin",
            element: <div>form admin</div>,
          },
          {
            path: "edit",
            element: <div>form admin</div>,
          },
          {
            path: "*",
            element: <Navigate to="new-client" replace />,
          },
          {
            path: "",
            element: <Navigate to="new-client" replace />,
          },
        ],
      },
      {
        path: "notification",
        element: <NotificationLayout></NotificationLayout>,
      },
      {
        path: "facture",
        element: <ListInvoices />,
      },
      {
        path: "*",
        element: <Navigate to="dashboard" replace />,
      },
      {
        path: "",
        element: <Navigate to="dashboard" replace />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
