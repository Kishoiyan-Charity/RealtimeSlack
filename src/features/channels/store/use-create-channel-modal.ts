import { useAtom, atom } from "jotai";

const modalState = atom(false);

export const useCreteChannelModal = () => {
  return useAtom(modalState);
};
