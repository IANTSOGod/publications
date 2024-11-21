import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useContext } from "react";
import LayoutContext from "@/lib/contexts/LayoutContext";

const items = [
  {
    title: "Home",
    url: "Home",
    icon: Home,
  },
  {
    title: "Messages",
    url: "Messages",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "Calendar",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "Search",
    icon: Search,
  },
  {
    title: "Settings",
    url: "Settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const { changePage } = useContext(LayoutContext);
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xl">
            <img src="vite.svg" className="w-[30px]"></img> Application
          </SidebarGroupLabel>
          <SidebarGroupContent className="mt-10">
            <SidebarMenu className="gap-y-3 ">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="hover:bg-slate-500 hover:text-white"
                  >
                    <div
                      onClick={() => {
                        changePage(item.url);
                      }}
                      className="cursor-pointer"
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
