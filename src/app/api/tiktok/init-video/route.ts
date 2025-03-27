import { getUserAccessToken } from "@/lib/getUserAccessToken";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { sourceInfo, postInfo } = await request.json();

  const token = await getUserAccessToken(); // Ensure you have a function to get the token

  const response = await fetch(
    "https://open.tiktokapis.com/v2/post/publish/video/init/",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        post_info: postInfo,
        source_info: sourceInfo,
      }),
    }
  );

  const data = await response.json();
  return NextResponse.json(data);
}
