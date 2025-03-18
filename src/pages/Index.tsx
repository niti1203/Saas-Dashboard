
import React from "react";
import { AreaChart, BarChart3, DollarSign, Users } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import MetricCard from "@/components/dashboard/MetricCard";
import ChartCard from "@/components/dashboard/ChartCard";
import StatGrid from "@/components/dashboard/StatGrid";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Sample data for charts
const revenueData = [
  { name: "Jan", value: 12500 },
  { name: "Feb", value: 18200 },
  { name: "Mar", value: 15800 },
  { name: "Apr", value: 22000 },
  { name: "May", value: 19500 },
  { name: "Jun", value: 25600 },
  { name: "Jul", value: 28900 },
  { name: "Aug", value: 31400 },
  { name: "Sep", value: 35800 },
  { name: "Oct", value: 39500 },
  { name: "Nov", value: 35200 },
  { name: "Dec", value: 42000 },
];

const visitorsData = [
  { name: "Mon", value: 540 },
  { name: "Tue", value: 620 },
  { name: "Wed", value: 710 },
  { name: "Thu", value: 840 },
  { name: "Fri", value: 950 },
  { name: "Sat", value: 650 },
  { name: "Sun", value: 480 },
];

const conversionData = [
  { name: "Jan", value: 4.2 },
  { name: "Feb", value: 3.8 },
  { name: "Mar", value: 5.1 },
  { name: "Apr", value: 5.6 },
  { name: "May", value: 6.2 },
  { name: "Jun", value: 5.7 },
  { name: "Jul", value: 6.8 },
  { name: "Aug", value: 7.2 },
  { name: "Sep", value: 7.8 },
  { name: "Oct", value: 8.1 },
  { name: "Nov", value: 7.5 },
  { name: "Dec", value: 8.4 },
];

const topProductsData = [
  { name: "Product A", value: 35 },
  { name: "Product B", value: 28 },
  { name: "Product C", value: 17 },
  { name: "Product D", value: 13 },
  { name: "Other", value: 7 },
];

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">
            Your business analytics at a glance
          </p>
        </div>

        <StatGrid>
          <MetricCard
            title="Total Revenue"
            value="$428,500"
            description="vs. $385,200 last year"
            trend={{ value: 11.2, positive: true }}
            icon={<DollarSign className="h-4 w-4" />}
          />
          <MetricCard
            title="Customers"
            value="2,842"
            description="vs. 2,440 last year"
            trend={{ value: 16.5, positive: true }}
            icon={<Users className="h-4 w-4" />}
          />
          <MetricCard
            title="Avg. Order Value"
            value="$158"
            description="vs. $142 last year"
            trend={{ value: 11.3, positive: true }}
            icon={<BarChart3 className="h-4 w-4" />}
          />
          <MetricCard
            title="Conversion Rate"
            value="7.2%"
            description="vs. 5.6% last year"
            trend={{ value: 28.6, positive: true }}
            icon={<AreaChart className="h-4 w-4" />}
          />
        </StatGrid>

        <div className="grid gap-6 lg:grid-cols-2">
          <ChartCard
            title="Revenue Over Time"
            description="Monthly revenue for the past year"
            data={revenueData}
            dataKey="value"
            type="area"
          />
          <ChartCard
            title="Conversion Rate Trend"
            description="Monthly conversion rate percentage"
            data={conversionData}
            dataKey="value"
            type="line"
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <ChartCard
            title="Daily Visitors"
            description="Website traffic for the past week"
            data={visitorsData}
            dataKey="value"
            type="bar"
          />
          <Card className="dashboard-card card-hover animate-scale-in">
            <CardHeader>
              <CardTitle className="text-lg font-medium">Top Products</CardTitle>
              <CardDescription>Distribution of sales by product category</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topProductsData.map((item, index) => (
                  <div key={item.name} className="flex items-center">
                    <div className="w-[30%] text-sm font-medium">{item.name}</div>
                    <div className="w-[60%]">
                      <div className="h-2 w-full rounded-full bg-secondary">
                        <div
                          className="h-2 rounded-full bg-primary"
                          style={{ width: `${item.value}%` }}
                        />
                      </div>
                    </div>
                    <div className="w-[10%] text-right text-sm font-medium">
                      {item.value}%
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
