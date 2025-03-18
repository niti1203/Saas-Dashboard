
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Product Manager",
    email: "alex@example.com",
    avatar: "/placeholder.svg",
    initials: "AJ"
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "UX Designer",
    email: "sarah@example.com",
    avatar: "/placeholder.svg",
    initials: "SW"
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Frontend Developer",
    email: "michael@example.com",
    avatar: "/placeholder.svg",
    initials: "MC"
  },
  {
    id: 4,
    name: "Jessica Lee",
    role: "Backend Developer",
    email: "jessica@example.com",
    avatar: "/placeholder.svg",
    initials: "JL"
  },
  {
    id: 5,
    name: "David Smith",
    role: "DevOps Engineer",
    email: "david@example.com",
    avatar: "/placeholder.svg",
    initials: "DS"
  }
];

const TeamPage = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Team Members</h1>
            <p className="text-muted-foreground">
              Manage your team and their access levels
            </p>
          </div>
          <Button className="gap-2">
            <UserPlus className="h-4 w-4" />
            Add Member
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <Card key={member.id}>
              <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-base">{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">{member.email}</span>
                  <Button variant="ghost" size="sm">
                    <User className="h-4 w-4" />
                    <span className="sr-only">View Profile</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TeamPage;
