import { Outlet } from "react-router-dom";
import "./admin.scss";

export const AdminPanel = () => {
  return (
    <div className="admin-panel">
      <Outlet></Outlet>
    </div>
  );
};
