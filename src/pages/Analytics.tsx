
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import ChartCard from "@/components/dashboard/ChartCard";
import StatGrid from "@/components/dashboard/StatGrid";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample data for charts
const trafficData = [
  { name: "Jan", direct: 4000, social: 2400, referral: 2000 },
  { name: "Feb", direct: 3000, social: 1398, referral: 2800 },
  { name: "Mar", direct: 2000, social: 4800, referral: 2200 },
  { name: "Apr", direct: 2780, social: 3908, referral: 2000 },
  { name: "May", direct: 1890, social: 4800, referral: 2181 },
  { name: "Jun", direct: 2390, social: 3800, referral: 2500 },
  { name: "Jul", direct: 3490, social: 4300, referral: 2100 },
];

const sessionsByCountry = [
  { country: "United States", value: 42 },
  { country: "United Kingdom", value: 18 },
  { country: "Germany", value: 9 },
  { country: "France", value: 7 },
  { country: "Japan", value: 6 },
  { country: "Canada", value: 5 },
  { country: "Australia", value: 4 },
  { country: "Other", value: 9 },
];

const deviceData = [
  { name: "Mobile", value: 58 },
  { name: "Desktop", value: 32 },
  { name: "Tablet", value: 10 },
];

const Analytics = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
          <p className="text-muted-foreground">
            Detailed analysis of your business performance
          </p>
        </div>

        <Tabs defaultValue="traffic" className="space-y-4">
          <TabsList>
            <TabsTrigger value="traffic">Traffic Sources</TabsTrigger>
            <TabsTrigger value="audience">Audience</TabsTrigger>
            <TabsTrigger value="conversion">Conversion</TabsTrigger>
          </TabsList>
          <TabsContent value="traffic" className="space-y-6">
            <Card className="dashboard-card card-hover">
              <CardHeader>
                <CardTitle>Traffic Overview</CardTitle>
                <CardDescription>
                  Monthly traffic breakdown by source
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-[400px] w-full pt-4 px-4">
                  <ChartCard
                    title=""
                    data={trafficData}
                    type="area"
                    dataKey="direct"
                    xAxisKey="name"
                    color="hsl(var(--primary))"
                    height={400}
                    showXAxis={true}
                    showYAxis={true}
                  />
                </div>
              </CardContent>
            </Card>
            
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="dashboard-card card-hover">
                <CardHeader>
                  <CardTitle>Top Traffic Sources</CardTitle>
                  <CardDescription>
                    Where your visitors are coming from
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span>Direct</span>
                      </div>
                      <span className="font-medium">42%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-blue-400" />
                        <span>Social Media</span>
                      </div>
                      <span className="font-medium">28%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-400" />
                        <span>Search</span>
                      </div>
                      <span className="font-medium">18%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-yellow-400" />
                        <span>Referral</span>
                      </div>
                      <span className="font-medium">12%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="dashboard-card card-hover">
                <CardHeader>
                  <CardTitle>Device Distribution</CardTitle>
                  <CardDescription>
                    What devices your users are on
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {deviceData.map((item) => (
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
          </TabsContent>
          
          <TabsContent value="audience" className="space-y-6">
            <Card className="dashboard-card card-hover">
              <CardHeader>
                <CardTitle>Audience Demographics</CardTitle>
                <CardDescription>
                  Breakdown of your audience by location
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-4">
                    {sessionsByCountry.map((item) => (
                      <div key={item.country} className="flex items-center">
                        <div className="w-[40%] text-sm font-medium">{item.country}</div>
                        <div className="w-[50%]">
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
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="conversion" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="dashboard-card card-hover">
                <CardHeader>
                  <CardTitle>Conversion Funnel</CardTitle>
                  <CardDescription>
                    User journey from visit to purchase
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mt-4">
                    <div className="flex flex-col space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Visits</span>
                        <span className="text-sm font-medium">10,482</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-primary/10">
                        <div className="h-2 rounded-full bg-primary" style={{ width: "100%" }} />
                      </div>
                    </div>
                    
                    <div className="flex flex-col space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Product Views</span>
                        <span className="text-sm font-medium">8,240</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-primary/10">
                        <div className="h-2 rounded-full bg-primary" style={{ width: "78%" }} />
                      </div>
                    </div>
                    
                    <div className="flex flex-col space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Add to Cart</span>
                        <span className="text-sm font-medium">3,560</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-primary/10">
                        <div className="h-2 rounded-full bg-primary" style={{ width: "34%" }} />
                      </div>
                    </div>
                    
                    <div className="flex flex-col space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Checkout Started</span>
                        <span className="text-sm font-medium">2,850</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-primary/10">
                        <div className="h-2 rounded-full bg-primary" style={{ width: "27%" }} />
                      </div>
                    </div>
                    
                    <div className="flex flex-col space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Purchases</span>
                        <span className="text-sm font-medium">2,120</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-primary/10">
                        <div className="h-2 rounded-full bg-primary" style={{ width: "20%" }} />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="dashboard-card card-hover">
                <CardHeader>
                  <CardTitle>Conversion by Channel</CardTitle>
                  <CardDescription>
                    Which channels convert the best
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6 mt-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Email</p>
                        <p className="text-xs text-muted-foreground">4,240 visits</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-medium">8.4%</p>
                        <div className="flex h-2 w-20 overflow-hidden rounded-full bg-secondary">
                          <div className="bg-primary" style={{ width: "84%" }} />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Organic Search</p>
                        <p className="text-xs text-muted-foreground">8,840 visits</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-medium">6.2%</p>
                        <div className="flex h-2 w-20 overflow-hidden rounded-full bg-secondary">
                          <div className="bg-primary" style={{ width: "62%" }} />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Social Media</p>
                        <p className="text-xs text-muted-foreground">5,640 visits</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-medium">4.8%</p>
                        <div className="flex h-2 w-20 overflow-hidden rounded-full bg-secondary">
                          <div className="bg-primary" style={{ width: "48%" }} />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Direct</p>
                        <p className="text-xs text-muted-foreground">3,650 visits</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-medium">7.5%</p>
                        <div className="flex h-2 w-20 overflow-hidden rounded-full bg-secondary">
                          <div className="bg-primary" style={{ width: "75%" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
