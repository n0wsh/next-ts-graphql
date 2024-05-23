"use client";
import { useState, ChangeEvent } from "react";

export default function Home() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const login = async () => {
    console.log("LOGIN")
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="font-mono flex flex-col gap-3">
        <h1>LOGIN</h1>
        <input
          className="text-slate-950"
          type="text"
          placeholder="Email"
          onChange={onEmailChange}
          value={email}
        />
        <input
          className="text-slate-950"
          type="password"
          placeholder="Password"
          onChange={onPasswordChange}
          value={password}
        />
        <button onClick={login}>LOGIN</button>
      </div>
    </main>
  );
}
