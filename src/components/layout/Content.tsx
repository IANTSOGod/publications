import { useContext } from "react";
import { AppSidebar } from "../ui/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import LayoutContext from "@/lib/contexts/LayoutContext";
import { Label } from "../ui/label";
import { AvatarHeader } from "../custom/headerAvatar";
import Home from "../custom/Home";
import Messages from "../custom/Messages";
import setIndex from "@/lib/service/setIndex.service";
import { useIsMobile } from "@/hooks/use-mobile";
import { useNavigate } from "react-router-dom";

export default function Content() {
  const { currentPage } = useContext(LayoutContext);
  const components = [<Home></Home>, <Messages></Messages>];
  const index = setIndex(currentPage) as number;
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  return (
    <div className="flex">
      <SidebarProvider>
        <AppSidebar></AppSidebar>
        <div className="w-full">
          <div className="bg-slate-400 w-full h-[50px] flex pt-2 pl-5 text-md text-white">
            <SidebarTrigger
              className={`hidden pl-1  ${isMobile ? "block" : ""}`}
            ></SidebarTrigger>
            <Label className="mt-2">
              {currentPage}
              {" >"}
            </Label>
            <div
              className="text-white flex gap-x-3 pt-0 mt-0 ml-auto pb-2 hover:bg-slate-600"
              onClick={() => {
                navigate("/profile");
              }}
            >
              <AvatarHeader></AvatarHeader>
              <Label className="mt-3 mr-3">Iantso Christian</Label>
            </div>
          </div>
          {components[index]}
        </div>
      </SidebarProvider>
    </div>
  );
}
