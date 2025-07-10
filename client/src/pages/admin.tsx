import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import type { Contact } from "@shared/schema";

export default function Admin() {
  const { data: contacts, isLoading } = useQuery<Contact[]>({
    queryKey: ["/api/contacts"],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Contact Submissions</h1>
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
          <h1 className="text-3xl font-bold text-gray-900">Contact Submissions</h1>
          <Badge variant="secondary" className="text-lg px-4 py-2">
            {contacts?.length || 0} Total
          </Badge>
        </div>

        {!contacts?.length ? (
          <Card>
            <CardContent className="p-12 text-center">
              <p className="text-gray-500 text-lg">No contact submissions yet.</p>
              <p className="text-gray-400 mt-2">
                When customers fill out your contact form, their messages will appear here.
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