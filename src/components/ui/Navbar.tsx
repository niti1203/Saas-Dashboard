
import React from "react";
import { Bell, Search, Settings, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

const Navbar = () => {
  return (
    <header className="flex h-16 items-center gap-4 border-b bg-background px-6 sticky top-0 z-30 animate-fade-in">
      <SidebarTrigger className="md:hidden" />
      
      <div className="hidden md:flex md:w-60 lg:w-72 items-center gap-2">
        <span className="font-semibold text-lg">Business Analytics</span>
      </div>
      
      <div className="flex flex-1 items-center gap-4 md:gap-8">
        <form className="hidden flex-1 sm:flex items-center">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              type="search" 
              placeholder="Search..." 
              className="w-full bg-background pl-8 focus-visible:ring-primary" 
            />
          </div>
        </form>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="icon-button animate-scale-in">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Notifications</span>
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 bg-muted">
                <User className="h-4 w-4" />
                <span className="sr-only">User menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
