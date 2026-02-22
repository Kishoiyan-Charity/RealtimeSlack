import { useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { useCallback } from "react";

type RequestType = any;
type ResponseType = any;

type Options = {
  onSuccess?: () => void;
  onError?: () => void;
  onSettled?: () => void;
};

export const useCreateWorkspaceModal = () => {
  const mutation = useMutation(api.workspaces.create);

  const mutate = useCallback(
    (values: RequestType, options?: Options) => {},
    []
  );
};
