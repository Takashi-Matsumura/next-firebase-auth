"use client";

import Image from "next/image";
import Login from "./_components/auth/Login";
import { useAuth } from "./(firebase)/AuthContext";
import Sidebar from "./_components/chat/sidebar/Sidebar";
import Chat from "./_components/chat/Chat";

export default function Home() {
  const { user } = useAuth();

  return (
    <div>
      {user ? (
        <div className="flex w-full h-screen">
          <div className="flex-none flex-grow-3 flex-shrink-3 w-3/12">
            <Sidebar />
          </div>
          <div className="flex-none flex-grow-7 flex-shrink-7 w-9/12">
            <Chat />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-screen">
          <Login />
          <Image
            src="/next.svg"
            alt="Next Logo"
            width={72}
            height={16}
            className="pb-4"
          />
        </div>
      )}
    </div>
  );
}
