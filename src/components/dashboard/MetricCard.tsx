
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: React.ReactNode;
  trend?: {
    value: number;
    positive: boolean;
  };
  className?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  description,
  icon,
  trend,
  className,
}) => {
  return (
    <Card className={cn("dashboard-card card-hover h-full animate-scale-in", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon && <div className="h-4 w-4 text-muted-foreground">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="metric-value">{value}</div>
        {(description || trend) && (
          <div className="flex items-center mt-1">
            {trend && (
              <span
                className={cn(
                  "mr-1 text-xs font-medium",
                  trend.positive ? "text-green-500" : "text-red-500"
                )}
              >
                {trend.positive ? "+" : "-"}
                {Math.abs(trend.value)}%
              </span>
            )}
            {description && (
              <CardDescription className="text-xs">{description}</CardDescription>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MetricCard;
