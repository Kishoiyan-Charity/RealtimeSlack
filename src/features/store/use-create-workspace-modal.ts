import { useAtom, atom } from "jotai";

const modalState = atom(false);

export const useCresteWorkspaceModal = () => {
  return useAtom(modalState);
};
