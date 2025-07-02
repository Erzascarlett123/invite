import React, { ReactNode } from "react";
import Sidebar from "../pages/admin/sidebar";

const AdminLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100 min-h-screen p-4">{children}</div>
    </div>
  );
};

export default AdminLayout;
