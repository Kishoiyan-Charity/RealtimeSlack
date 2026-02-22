import { useAtom, atom } from "jotai";

const modalState = atom(false);

export const useCreteWorkspaceModal = () => {
  return useAtom(modalState);
};
