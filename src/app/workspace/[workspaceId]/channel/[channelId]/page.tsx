"use client";

import { useGetChannel } from "@/features/channels/api/use-get-channel";
import { Loader, TriangleAlert } from "lucide-react";
import { Header } from "@/app/workspace/[workspaceId]/channel/[channelId]/header";
import { useChannelId } from "@/hooks/use-channel-id";
import { ChatInput } from "@/app/workspace/[workspaceId]/channel/[channelId]/chat.input";
import { useGetMessages } from "@/features/messages/api/use-get-messages";

const ChannelIdPage = () => {
  const channelId = useChannelId();
  // console.log("channelId:", channelId); // 👈 add this

  const { results } = useGetMessages({ channelId });

  const { data: channel, isLoading: channelLoading } = useGetChannel({
    id: channelId,
  });

  console.log(results);

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
      <div className="flex-1">{JSON.stringify(results)}</div>
      <ChatInput placeholder={`message # ${channel.name}`} />
    </div>
  );
};
export default ChannelIdPage;
