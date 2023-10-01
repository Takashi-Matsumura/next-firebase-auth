"use client";

import Image from "next/image";
import Login from "./_components/auth/Login";
import { useAuth } from "./(firebase)/AuthContext";

export default function Home() {
  const { user } = useAuth();

  return (
    <div>
      {user ? (
        <div>Hello</div>
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
