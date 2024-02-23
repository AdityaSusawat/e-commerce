"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession(); //returns session
  if (!session) {
    return (
      <div
        className="bg-darkBackground h-screen w-screen flex
      place-items-center"
      >
        <div className="w-full flex justify-center">
          <button onClick={() => signIn("google")} className="btn">
            Login with google
          </button>
        </div>
      </div>
    );
  }
  return <div>Logged in as {session.user.email}</div>;
}
