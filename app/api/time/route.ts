import { NextResponse } from "next/server";

export async function GET() {
  const currentTime = new Date().toISOString();

  return NextResponse.json({
    time: currentTime,
  });
}

// Set revalidation time to 0 to fetch a new time on each request
export const revalidate = 0;
