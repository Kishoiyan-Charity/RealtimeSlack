"use client";

import { useGetChannel } from "@/features/channels/api/use-get-channel";
import { Loader, TriangleAlert } from "lucide-react";
import { Header } from "@/app/workspace/[workspaceId]/channel/[channelId]/header";
import { useChannelId } from "@/hooks/use-channel-id";

const ChannelIdPage = () => {
  const channelId = useChannelId();
  console.log("channelId:", channelId); // 👈 add this

  const { data: channel, isLoading: channelLoading } = useGetChannel({
    id: channelId,
  });

  console.log("channel data:", channel, "isLoading:", channelLoading); // 👈 add this

  if (channelLoading) {
    return (
      <div className="h-full flex-1 flex items-center justify-center">
        <Loader className="animate-spin size-5 text-muted-foreground" />
      </div>
    );
  }

  if (!channel) {
    return (
      <div className="h-full flex-1 flex flex-col gap-y-2 items-center justify-center">
        <TriangleAlert className=" size-6 text-muted-foreground" />
        <span className="text-sm text-muted-foreground">Channel not found</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <Header title={channel.name} />
    </div>
  );
};
export default ChannelIdPage;
