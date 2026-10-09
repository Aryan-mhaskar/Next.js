"use client";

export default function Home() {
  const handleClick = async () => {
    let data = {
      name: "John Doe",
      role: "Developer"
    }
    let a = await fetch("/api/app", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    let res = await a.json();
    console.log(res);
  };

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-3xl font-bold">Welcome to My App</h1>
      <button onClick={handleClick}>click me</button>
    </div>
  );
}
