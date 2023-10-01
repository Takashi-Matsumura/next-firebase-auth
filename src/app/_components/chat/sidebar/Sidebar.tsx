import { useAuth } from "@/app/(firebase)/AuthContext";
import React from "react";
import Title from "./Title";
import Menu from "./Menu";

const Sidebar = () => {
  const { user, logout } = useAuth();

  const handleClick = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col justify-between h-screen border">
      <Title />

      <Menu />

      <button
        onClick={handleClick}
        className="px-5 py-2 bg-gray-400 text-black hover:bg-gray-800 hover:text-white rounded-full"
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
