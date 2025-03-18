
import React from "react";
import { cn } from "@/lib/utils";

interface StatGridProps {
  children: React.ReactNode;
  cols?: number;
  className?: string;
}

const StatGrid: React.FC<StatGridProps> = ({ 
  children, 
  cols = 4,
  className 
}) => {
  return (
    <div
      className={cn(
        "grid gap-4 animate-fade-in",
        {
          "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4": cols === 4,
          "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3": cols === 3,
          "grid-cols-1 sm:grid-cols-2": cols === 2,
          "grid-cols-1": cols === 1,
        },
        className
      )}
    >
      {children}
    </div>
  );
};

export default StatGrid;
