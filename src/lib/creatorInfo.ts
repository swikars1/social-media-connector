import { getUserAccessToken } from "./getUserAccessToken";

export type ReelInfo = {
  inputUrl: string;
  id: string;
  type: string;
  shortCode: string;
  caption: string;
  hashtags: string[];
  mentions: string[];
  url: string;
  commentsCount: number;
  firstComment: string;
  latestComments: Comment[];
  dimensionsHeight: number;
  dimensionsWidth: number;
  displayUrl: string;
  images: string[];
  videoUrl: string;
  alt: string;
  likesCount: number;
  videoViewCount: number;
  videoPlayCount: number;
  timestamp: string;
  childPosts: any[];
  ownerFullName: string;
  ownerUsername: string;
  ownerId: string;
  productType: string;
  videoDuration: number;
  isSponsored: boolean;
  musicInfo: MusicInfo;
};

type Comment = {
  id: string;
  text: string;
  ownerUsername: string;
  ownerProfilePicUrl: string;
  timestamp: string;
  repliesCount: number;
  replies: any[];
  likesCount: number;
  owner: Owner;
};

type Owner = {
  id: string;
  is_verified: boolean;
  profile_pic_url: string;
  username: string;
};

type MusicInfo = {
  artist_name: string;
  song_name: string;
  uses_original_audio: boolean;
  should_mute_audio: boolean;
  should_mute_audio_reason: string;
  audio_id: string;
};

type CreatorInfo = {
  data: {
    creator_avatar_url: string;
    creator_username: string;
    creator_nickname: string;
    privacy_level_options: string[];
    comment_disabled: boolean;
    duet_disabled: boolean;
    stitch_disabled: boolean;
    max_video_post_duration_sec: number;
  };
  error: {
    code: string;
    message: string;
    log_id: string;
  };
};

export async function fetchCreatorInfo(token) {
  const response = await fetch(
    "https://open.tiktokapis.com/v2/post/publish/creator_info/query/",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({}),
    }
  );

  return await response.json();
}

export async function initVideoPublish(sourceInfo, postInfo) {
  const token = await getUserAccessToken();
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

  return await response.json();
}
