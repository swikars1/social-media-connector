"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TwitterIcon as TikTok, Home } from "lucide-react";
import { signInToTiktok } from "@/lib/signInLib";
import { getUserAccessToken } from "@/lib/getUserAccessToken";
import { initVideoPublish } from "@/lib/creatorInfo";

export function SocialMediaConnector() {
  const [tiktokConnected, setTiktokConnected] = useState(false);
  const [credits] = useState(100); // Example initial credits

  const connectTiktok = async () => {
    // Implement TikTok connection logic here
    await signInToTiktok();
    setTiktokConnected(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-400 to-pink-500 flex flex-col">
      <header className="bg-white shadow-md">
        <div className="flex items-center p-8">
          <Home className="h-6 w-6 text-purple-600 mr-2" />
          <h1 className="text-xl font-bold text-gray-900 ">Tiktok Connector</h1>
        </div>
      </header>
      <div className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl flex flex-col justify-center">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">
              Connect TikTok
            </CardTitle>
            <CardDescription className="text-center">
              Connect your TikTok account.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              type="button"
              onClick={connectTiktok}
              disabled={tiktokConnected}
            >
              <TikTok className="mr-2 h-4 w-4" />
              {tiktokConnected ? "TikTok Connected" : "Connect TikTok"}
            </Button>
            <Button
              type="button"
              onClick={async () => await getUserAccessToken()}
            >
              Get token
            </Button>

            <Button
              type="button"
              onClick={async () => {
                const sourceInfo = {
                  source: "./3581440002179773975.mp4",
                  video_size: 50000123,
                  chunk_size: 10000000,
                  total_chunk_count: 5,
                };

                const postInfo = {
                  title: "this will be a funny #cat video on your @tiktok #fyp",
                  privacy_level: "SELF_ONLY", // "PUBLIC_TO_EVERYONE", "MUTUAL_FOLLOW_FRIENDS", "SELF_ONLY"
                  disable_duet: false,
                  disable_comment: false,
                  disable_stitch: false,
                  video_cover_timestamp_ms: 2000,
                };
                const a = await initVideoPublish(sourceInfo, postInfo);
                console.log({ a });
              }}
            >
              Publish
            </Button>
          </CardContent>
        </Card>
      </div>
      <footer className="bg-white shadow-md mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <p className="text-sm text-gray-500">
            © 2023 Social Media Connector. All rights reserved.
          </p>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700">
              Available Credits:
            </span>
            <span className="text-sm font-bold text-purple-600">{credits}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
