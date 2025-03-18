
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, ArrowUpRight } from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "Website Redesign",
    description: "Complete overhaul of the company website with focus on UX improvements",
    status: "In Progress",
    progress: 65,
    team: ["John D.", "Sarah M.", "Alex K."],
    deadline: "Dec 15, 2023",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Creating a native mobile experience for our customers",
    status: "In Progress",
    progress: 42,
    team: ["Mike T.", "Lisa R.", "David C."],
    deadline: "Jan 30, 2024",
  },
  {
    id: 3,
    title: "Marketing Campaign",
    description: "Q4 promotional campaign for the holiday season",
    status: "Completed",
    progress: 100,
    team: ["Emma S.", "Ryan B."],
    deadline: "Nov 20, 2023",
  },
  {
    id: 4,
    title: "Content Strategy",
    description: "Developing a content plan for the next 6 months",
    status: "Planning",
    progress: 15,
    team: ["Chris M.", "Jessica L."],
    deadline: "Feb 28, 2024",
  },
  {
    id: 5,
    title: "CRM Integration",
    description: "Connecting our sales data with the new CRM system",
    status: "On Hold",
    progress: 30,
    team: ["Brian K.", "Natalie P.", "Tom S."],
    deadline: "Mar 15, 2024",
  },
  {
    id: 6,
    title: "Product Launch",
    description: "Preparing for the release of our new flagship product",
    status: "Planning",
    progress: 10,
    team: ["Amanda R.", "Jason T.", "Michelle C."],
    deadline: "Apr 10, 2024",
  },
];

const statusColors = {
  "In Progress": "bg-blue-100 text-blue-800",
  "Completed": "bg-green-100 text-green-800",
  "Planning": "bg-purple-100 text-purple-800",
  "On Hold": "bg-amber-100 text-amber-800",
};

const Projects = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
            <p className="text-muted-foreground">
              Manage and track your active projects
            </p>
          </div>
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            <span>New Project</span>
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <Card 
              key={project.id} 
              className="dashboard-card card-hover overflow-hidden animate-scale-in"
              style={{
                animationDelay: `${projectsData.indexOf(project) * 0.05}s`
              }}
            >
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <Badge 
                    variant="secondary" 
                    className={statusColors[project.status as keyof typeof statusColors]}
                  >
                    {project.status}
                  </Badge>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
                <CardTitle className="text-lg font-semibold mt-2">{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-1">Progress</p>
                    <div className="h-2 w-full rounded-full bg-secondary">
                      <div
                        className="h-2 rounded-full bg-primary transition-all duration-500"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                    <p className="text-xs text-right mt-1 text-muted-foreground">{project.progress}% complete</p>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Team</p>
                    <div className="flex -space-x-2">
                      {project.team.map((member, i) => (
                        <div 
                          key={i} 
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs text-white ring-2 ring-background"
                        >
                          {member.split(" ").map(name => name[0]).join("")}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <div className="flex justify-between w-full text-sm">
                  <span className="text-muted-foreground">Deadline</span>
                  <span className="font-medium">{project.deadline}</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Projects;
