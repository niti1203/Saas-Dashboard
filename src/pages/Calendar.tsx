
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Plus, CalendarClock } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Team Meeting",
    date: new Date(2023, 10, 15, 10, 0),
    duration: "1 hour",
    participants: ["Alex", "Sarah", "Michael"]
  },
  {
    id: 2,
    title: "Product Demo",
    date: new Date(2023, 10, 16, 14, 30),
    duration: "45 minutes",
    participants: ["Jessica", "David", "Sarah"]
  },
  {
    id: 3,
    title: "Sprint Planning",
    date: new Date(2023, 10, 18, 9, 0),
    duration: "2 hours",
    participants: ["All team members"]
  }
];

const CalendarPage = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  // Get today's date at 00:00:00 for comparison
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Filter events for the current day
  const todaysEvents = events.filter(event => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getDate() === today.getDate() &&
      eventDate.getMonth() === today.getMonth() &&
      eventDate.getFullYear() === today.getFullYear()
    );
  });

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Calendar</h1>
            <p className="text-muted-foreground">
              Schedule and manage your meetings and events
            </p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Add Event
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Calendar</CardTitle>
            </CardHeader>
            <CardContent>
              <CalendarComponent
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle>Today's Events</CardTitle>
              <CalendarClock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {todaysEvents.length > 0 ? (
                  todaysEvents.map((event) => (
                    <div key={event.id} className="flex flex-col space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">{event.title}</h3>
                        <span className="text-xs text-muted-foreground">
                          {event.duration}
                        </span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {event.date.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit"
                        })}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Participants: {event.participants.join(", ")}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <CalendarClock className="h-8 w-8 text-muted-foreground mb-2" />
                    <h3 className="font-medium">No events today</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      You have no scheduled events for today.
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CalendarPage;
