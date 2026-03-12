import dynamic from "next/dynamic";
import { useRef } from "react";
import Quill from "quill";

interface ChatInputProps {
  placeholder?: string;
}

const Editor = dynamic(() => import("@/components/editor"), { ssr: false });

export const ChatInput = ({ placeholder }: ChatInputProps) => {
  const editorRef = useRef<Quill | null>(null);

  return (
    <div className="px-5 w-full">
      <Editor
        placeholder={placeholder}
        onSubmit={() => {}}
        disabled={false}
        innerRef={editorRef}
      />
      <div></div>
    </div>
  );
};
