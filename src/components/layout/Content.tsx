import { useContext } from "react";
import { AppSidebar } from "../ui/app-sidebar";
import { SidebarProvider } from "../ui/sidebar";
import LayoutContext from "@/lib/contexts/LayoutContext";
import { Label } from "../ui/label";
import { AvatarHeader } from "../custom/headerAvatar";
export default function Content() {
  const { currentPage } = useContext(LayoutContext);

  return (
    <div className="flex">
      <SidebarProvider>
        <AppSidebar></AppSidebar>
        <div className="w-full">
          <div className="bg-slate-400 w-full h-[50px] flex pt-2 pl-5 text-md text-white">
            <Label className="mt-2">
              {currentPage}
              {"  >"}
            </Label>
            <div className="text-white flex gap-x-3 ml-auto pb-2">
              <AvatarHeader></AvatarHeader>
              <Label className="mt-3 mr-3">Iantso Christian</Label>
            </div>
          </div>
          <Label>Here lies all the other components</Label>
        </div>
      </SidebarProvider>
    </div>
  );
}
