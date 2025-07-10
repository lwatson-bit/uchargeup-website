import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { Bell, BellOff, RotateCcw } from "lucide-react";
import { useState, useEffect } from "react";
import type { Contact } from "@shared/schema";

export default function AdminLive() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [lastCount, setLastCount] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Poll for new contacts every 30 seconds
  const { data: contacts, isLoading, refetch } = useQuery<Contact[]>({
    queryKey: ["/api/contacts"],
    refetchInterval: 30000, // 30 seconds
  });

  // Request notification permission
  const enableNotifications = async () => {
    if ("Notification" in window) {
      const permission = await Notification.requestPermission();
      setNotificationsEnabled(permission === "granted");
    }
  };

  // Check for new submissions and notify
  useEffect(() => {
    if (contacts && contacts.length > lastCount && lastCount > 0) {
      const newSubmissions = contacts.length - lastCount;
      
      // Browser notification
      if (notificationsEnabled) {
        new Notification("New Contact Form Submission!", {
          body: `You have ${newSubmissions} new message${newSubmissions > 1 ? 's' : ''} from customers.`,
          icon: "/favicon.ico",
        });
      }
      
      // Sound notification
      if (soundEnabled) {
        const audio = new Audio("data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvGIhCCGH0fPTgjMIIm6/7qOPJwUyeqvS8zU3DCF1o+/onjEICTFWoOOsZSEOKnOo2+qKPgwaUYLI3nwzDB91qNvuxHkpASOd2d59J0M0MzNZhbCOI0M3fGPQrpQGLSGRWoOfKBYmZsWPnKFOGQvnkqGLBhIMGVHDYsGM");
        audio.volume = 0.3;
        audio.play().catch(() => {}); // Ignore errors
      }
    }
    
    if (contacts) {
      setLastCount(contacts.length);
    }
  }, [contacts, lastCount, notificationsEnabled, soundEnabled]);

  const handleRefresh = () => {
    refetch();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Live Contact Dashboard</h1>
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardContent className="p-6">
                  <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                  <div className="h-20 bg-gray-200 rounded w-full"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Live Contact Dashboard</h1>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={handleRefresh}
              className="flex items-center gap-2"
            >
              <RotateCcw className="h-4 w-4" />
              Refresh
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="flex items-center gap-2"
            >
              {soundEnabled ? <Bell className="h-4 w-4" /> : <BellOff className="h-4 w-4" />}
              Sound {soundEnabled ? "On" : "Off"}
            </Button>
            
            <Button
              variant={notificationsEnabled ? "default" : "outline"}
              size="sm"
              onClick={enableNotifications}
              className="flex items-center gap-2"
            >
              <Bell className="h-4 w-4" />
              {notificationsEnabled ? "Notifications On" : "Enable Notifications"}
            </Button>
            
            <Badge variant="secondary" className="text-lg px-4 py-2">
              {contacts?.length || 0} Total
            </Badge>
          </div>
        </div>

        <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="font-semibold text-blue-900 mb-2">🔔 Live Notifications</h3>
          <p className="text-blue-800 text-sm">
            This dashboard automatically checks for new submissions every 30 seconds. 
            Enable browser notifications to get alerted instantly when customers contact you!
          </p>
        </div>

        {!contacts?.length ? (
          <Card>
            <CardContent className="p-12 text-center">
              <p className="text-gray-500 text-lg">No contact submissions yet.</p>
              <p className="text-gray-400 mt-2">
                When customers fill out your contact form, their messages will appear here automatically.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {contacts.map((contact) => (
              <Card key={contact.id} className="shadow-md">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-brand-blue">
                        {contact.name}
                      </CardTitle>
                      <p className="text-gray-600 mt-1">{contact.email}</p>
                      {contact.company && (
                        <Badge variant="outline" className="mt-2">
                          {contact.company}
                        </Badge>
                      )}
                    </div>
                    <div className="text-right text-sm text-gray-500">
                      {format(new Date(contact.createdAt), "MMM d, yyyy 'at' h:mm a")}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-3">
                    <h4 className="font-semibold text-gray-700 mb-1">Subject:</h4>
                    <p className="text-gray-900">{contact.subject}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-1">Message:</h4>
                    <p className="text-gray-900 whitespace-pre-wrap leading-relaxed">
                      {contact.message}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <a
            href="/"
            className="text-brand-blue hover:text-brand-blue/80 font-medium"
          >
            ← Back to Website
          </a>
        </div>
      </div>
    </div>
  );
}