const url =
  process.env.NODE_ENV === "production"
    ? `https://${process.env.VERCEL_BRANCH_URL}`
    : "http://localhost:3000";

export const getTime = async () => {
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
