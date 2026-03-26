import { Id } from "../../../../convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";

interface UseGetMessageProps {
  id: Id<"messages">;
}

export const useGetMessage = ({ id }: UseGetMessageProps) => {
  const data = useQuery(api.messages.getById, id ? { id } : "skip");
  const isLoading = id !== undefined && data === undefined;

  return { data, isLoading };
};
