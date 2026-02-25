import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export const WorkspaceSwitcher = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button className="size-9 relative overflow-hidden bg-[#ABABAD] hover:bg-[#ABABAD]/80 text-slate-800 font-semibold text-xl">
          A
        </Button>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
};
