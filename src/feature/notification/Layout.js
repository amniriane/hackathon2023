import "./Layout.scss";
import React from "react";
import { NotificationList } from "./List/List";
import { NotificationDetails } from "./Details/Details";

export const NotificationLayout = () => {
  return (
    <div className="notification-layout">
      <div className="panel list">
        <NotificationList></NotificationList>
      </div>
      <div className="panel details">
        <NotificationDetails></NotificationDetails>
      </div>
    </div>
  );
};
