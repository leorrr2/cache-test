export const dynamic = "force-static";

const url =
  process.env.NODE_ENV === "production"
    ? `https://${process.env.VERCEL_BRANCH_URL}`
    : "http://localhost:3000";

const getTime = async () => {
  try {
    const response = await fetch(`${url}/api/time`, {
      next: { tags: ["time"] },
    });
    const data = await response.json();
    return data.time;
  } catch (error) {
    console.error(error);
    return "fallback";
  }
};

export default async function Home() {
  const time = await getTime();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Hello World - {time}</h1>
    </div>
  );
}
