import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function GET() {
  revalidateTag("time");

  return NextResponse.json({
    revalidated: true,
    message: "Time cache revalidated",
    timestamp: new Date().toISOString(),
  });
}
