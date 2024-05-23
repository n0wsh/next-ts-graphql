export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="font-mono flex flex-col gap-3">
        <h1>WELCOME</h1>
        <a href="/login">LOGIN</a>
        <a href="/signup">SIGNUP</a>
      </div>
    </main>
  );
}
