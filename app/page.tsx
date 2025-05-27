import { getTime } from "@/utils/utils";

export const dynamic = "force-static";

export default async function Home() {
  const time = await getTime();

  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20">
      <h1>Hello World - {time}</h1>
    </div>
  );
}
