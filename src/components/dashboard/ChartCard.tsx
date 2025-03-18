
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { cn } from "@/lib/utils";

type ChartType = "line" | "bar" | "area";

interface ChartCardProps {
  title: string;
  description?: string;
  data: any[];
  type?: ChartType;
  dataKey: string;
  xAxisKey?: string;
  color?: string;
  height?: number;
  className?: string;
  showXAxis?: boolean;
  showYAxis?: boolean;
  showGrid?: boolean;
  showTooltip?: boolean;
}

const ChartCard: React.FC<ChartCardProps> = ({
  title,
  description,
  data,
  type = "line",
  dataKey,
  xAxisKey = "name",
  color = "hsl(var(--primary))",
  height = 300,
  className,
  showXAxis = true,
  showYAxis = false,
  showGrid = true,
  showTooltip = true,
}) => {
  const renderChart = () => {
    switch (type) {
      case "line":
        return (
          <LineChart data={data}>
            {showGrid && <CartesianGrid strokeDasharray="3 3" vertical={false} />}
            {showXAxis && <XAxis dataKey={xAxisKey} tickLine={false} axisLine={false} />}
            {showYAxis && <YAxis tickLine={false} axisLine={false} />}
            {showTooltip && <Tooltip />}
            <Line 
              type="monotone" 
              dataKey={dataKey} 
              stroke={color} 
              strokeWidth={2} 
              dot={false} 
              activeDot={{ r: 6, strokeWidth: 2 }} 
            />
          </LineChart>
        );
      case "bar":
        return (
          <BarChart data={data}>
            {showGrid && <CartesianGrid strokeDasharray="3 3" vertical={false} />}
            {showXAxis && <XAxis dataKey={xAxisKey} tickLine={false} axisLine={false} />}
            {showYAxis && <YAxis tickLine={false} axisLine={false} />}
            {showTooltip && <Tooltip />}
            <Bar dataKey={dataKey} fill={color} radius={[4, 4, 0, 0]} />
          </BarChart>
        );
      case "area":
        return (
          <AreaChart data={data}>
            {showGrid && <CartesianGrid strokeDasharray="3 3" vertical={false} />}
            {showXAxis && <XAxis dataKey={xAxisKey} tickLine={false} axisLine={false} />}
            {showYAxis && <YAxis tickLine={false} axisLine={false} />}
            {showTooltip && <Tooltip />}
            <Area 
              type="monotone" 
              dataKey={dataKey} 
              stroke={color} 
              fill={color} 
              strokeWidth={2} 
              fillOpacity={0.1} 
            />
          </AreaChart>
        );
      default:
        return null;
    }
  };

  return (
    <Card className={cn("dashboard-card card-hover h-full animate-scale-in", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="p-0">
        <div className="h-[300px] w-full pt-4 px-4">
          <ResponsiveContainer width="100%" height="100%">
            {renderChart()}
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChartCard;
