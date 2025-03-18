
import { Link, useLocation } from "react-router-dom";
import { 
  BarChart3, 
  Settings, 
  Home, 
  Users, 
  FolderKanban, 
  Calendar, 
  LogOut 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { 
  Sidebar as SidebarComponent, 
  SidebarContent, 
  SidebarFooter, 
  SidebarHeader, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton, 
  useSidebar
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  const location = useLocation();
  const { state } = useSidebar();
  
  // Check if the sidebar is collapsed based on state
  const isCollapsed = state === "collapsed";
  
  const isActive = (path: string) => location.pathname === path;

  const mainNavItems = [
    { name: "Dashboard", path: "/", icon: Home },
    { name: "Analytics", path: "/analytics", icon: BarChart3 },
    { name: "Projects", path: "/projects", icon: FolderKanban },
    { name: "Team", path: "/team", icon: Users },
    { name: "Calendar", path: "/calendar", icon: Calendar },
  ];

  return (
    <SidebarComponent>
      <SidebarHeader className="flex h-14 items-center border-b px-4">
        <div className={cn("flex items-center gap-2 font-semibold transition-all", 
          isCollapsed ? "justify-center" : "justify-start")}>
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <BarChart3 className="h-4 w-4" />
          </div>
          {!isCollapsed && <span>Analytics</span>}
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className={cn(isCollapsed && "sr-only")}>
            Main
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.path} className="animate-fade-in" style={{
                  animationDelay: `${mainNavItems.indexOf(item) * 0.05}s`
                }}>
                  <SidebarMenuButton 
                    asChild 
                    className={cn(
                      "sidebar-item",
                      isActive(item.path) && "sidebar-item-active"
                    )}
                  >
                    <Link to={item.path}>
                      <item.icon className="h-4 w-4" />
                      {!isCollapsed && <span>{item.name}</span>}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel className={cn(isCollapsed && "sr-only")}>
            Settings
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  asChild 
                  className={cn(
                    "sidebar-item",
                    isActive("/settings") && "sidebar-item-active"
                  )}
                >
                  <Link to="/settings">
                    <Settings className="h-4 w-4" />
                    {!isCollapsed && <span>Settings</span>}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="border-t">
        <div className="p-4">
          <Button variant="outline" size="sm" className="w-full justify-start gap-2">
            <LogOut className="h-4 w-4" />
            {!isCollapsed && <span>Sign out</span>}
          </Button>
        </div>
      </SidebarFooter>
    </SidebarComponent>
  );
};

export default Sidebar;
