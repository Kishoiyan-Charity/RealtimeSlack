"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useCreteWorkspaceModal } from "@/features/workspaces/store/use-create-workspace-modal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCreateWorkspace } from "../api/use-create-workspaces";

export const CreateWorkspaceModal = () => {
  const [open, setOpen] = useCreteWorkspaceModal();

  const { mutate } = useCreateWorkspace();

  const handleClose = () => {
    setOpen(false);
  };

  const handleSumit = () => {
    mutate(
      {
        name: "Workspace 1",
      },
      {
        onSuccess(data) {
          router.push("/workspaces/${data");
        },
        onError: () => {},
        onSettled: () => {},
      }
    );
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle> Add New Workspace</DialogTitle>
        </DialogHeader>
        <form className="space-y-4">
          <Input
            value=""
            disabled={false}
            required
            autoFocus
            minLength={3}
            placeholder="workspace name e.g 'Work', 'Personal', 'Home' "
          />
          <div className="flex justify-end">
            <Button disabled={false}>Create</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
