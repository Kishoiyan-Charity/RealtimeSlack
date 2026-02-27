"use client";
import { Toolbar } from "@/app/workspace/[workspaceId]/toolbar";
import { Sidebar } from "@/app/workspace/[workspaceId]/sidebar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
interface WorkspaceLayoutProps {
  children: React.ReactNode;
}
const WorkspaceLayout = ({ children }: WorkspaceLayoutProps) => {
  return (
    <div className="h-full ">
      {" "}
      <Toolbar />{" "}
      <div className="flex h-[calc(100vh-40px)]">
        {" "}
        <Sidebar />{" "}
        <ResizablePanelGroup direction="horizontal">
          {" "}
          <ResizablePanel>
            {" "}
            <div>Channels Sidebar</div>{" "}
          </ResizablePanel>{" "}
          <ResizableHandle withHandle />{" "}
          <ResizablePanel>{children}</ResizablePanel>{" "}
        </ResizablePanelGroup>{" "}
      </div>{" "}
    </div>
  );
};
export default WorkspaceLayout;
