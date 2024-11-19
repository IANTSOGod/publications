import { useContext } from "react";
import { AppSidebar } from "../ui/app-sidebar";
import { SidebarProvider } from "../ui/sidebar";
import LayoutContext from "@/lib/contexts/LayoutContext";
import { Label } from "../ui/label";
import { Avatar } from "../ui/avatar";
export default function Content() {
  const { currentPage } = useContext(LayoutContext);
  return (
    <div className="flex">
      <SidebarProvider>
        <AppSidebar></AppSidebar>
        <div className="w-full">
          <div className="bg-slate-400 w-full h-[50px] flex pt-2 pl-5 text-md text-white">
            <Label>
              {" "}
              {currentPage}
              {"  >"}
            </Label>
          </div>
        </div>

        <Avatar className=""></Avatar>
      </SidebarProvider>
    </div>
  );
}
