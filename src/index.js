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

import CreateClientForm from "./feature/AdminPanel/create_user";
import AdminCreationForm from "./feature/AdminPanel/create_admin";
import Modification from "./feature/AdminPanel/modification";
import Panel from "./feature/AdminPanel/create_panel";
import { AdminPanel } from "./feature/AdminPanel/admin_panel";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
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
        element: <AdminPanel></AdminPanel>,
        children: [
          {
            path: "new-panel",
            element: <Panel />,
          },
          {
            path: "new-client",
            element: <CreateClientForm />,
            // element:<Panel />,
          },
          {
            path: "new-admin",
            element: <AdminCreationForm />,
          },
          {
            path: "edit",
            element: <Modification />,
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
        element: <Navigate to="/dashboard/default" replace />,
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
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

reportWebVitals();
