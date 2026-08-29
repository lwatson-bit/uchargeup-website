import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Mail, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { contactSubmitSchema, type ContactSubmit } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

// apiRequest throws Error("<status>: <raw body>"). Show the API's own wording
// for a validation failure, but never leak a raw JSON blob for a server error —
// there is nothing the visitor can do about it except reach us another way.
function friendlyError(error: unknown): string {
  const raw = error instanceof Error ? error.message : "";
  const separator = raw.indexOf(":");
  const status = Number(raw.slice(0, separator));

  if (status >= 400 && status < 500) {
    try {
      const parsed = JSON.parse(raw.slice(separator + 1).trim());
      if (typeof parsed?.message === "string") return parsed.message;
    } catch {
      // body was not JSON - fall through to the generic message
    }
  }

  return "Something went wrong on our end. Please email support@uchargeup.com and we'll get right back to you.";
}

export default function Contact() {
  const { toast } = useToast();
  // Captured once on mount so the server can reject submissions that arrive
  // faster than a human could plausibly fill the form out.
  const [startedAt] = useState(() => Date.now());

  const form = useForm<ContactSubmit>({
    resolver: zodResolver(contactSubmitSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
      subject: "",
      website: "",
      startedAt
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactSubmit) => {
      const response = await apiRequest("POST", "/api/contact", { ...data, startedAt });
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible."
      });
      form.reset();
    },
    onError: (error: unknown) => {
      toast({
        title: "Error sending message",
        description: friendlyError(error),
        variant: "destructive"
      });
    }
  });

  // mutate() rather than mutateAsync(): a rejected mutateAsync promise escapes
  // as an unhandled rejection and skips any state reset placed after the await,
  // which is what used to leave the button stuck on "Sending..." forever.
  const onSubmit = (data: ContactSubmit) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="mb-4">
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Get In Touch</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-900">Email</h3>
              <div className="flex items-center">
                <Mail className="text-brand-blue w-5 h-5 mr-3" />
                <a href="mailto:support@uchargeup.com" className="text-brand-blue hover:text-brand-dark-blue transition-colors duration-200">
                  support@uchargeup.com
                </a>
              </div>
              <p className="text-sm text-gray-500 mt-2">We'll respond as quickly as possible</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-900">Follow Us</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Instagram className="text-brand-blue w-5 h-5 mr-3" />
                  <a href="https://instagram.com/uchargeup" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:text-brand-dark-blue transition-colors duration-200">
                    @uchargeup
                  </a>
                </div>
                <div className="flex items-center">
                  <Twitter className="text-brand-blue w-5 h-5 mr-3" />
                  <a href="https://x.com/uchargeup" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:text-brand-dark-blue transition-colors duration-200">
                    @uchargeup
                  </a>
                </div>
              </div>
              <p className="text-gray-600 mt-4">Follow us for updates and news about new locations.</p>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Honeypot: off-screen (not display:none, which some bots
                  detect and skip) so real visitors never see or fill it. */}
              <div style={{ position: "absolute", left: "-9999px", top: "-9999px" }} aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  {...form.register("website")}
                />
              </div>

              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  {...form.register("name")}
                  className="mt-2"
                />
                {form.formState.errors.name && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  {...form.register("email")}
                  className="mt-2"
                />
                {form.formState.errors.email && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Select
                  value={form.watch("subject")}
                  onValueChange={(value) => form.setValue("subject", value, { shouldValidate: true })}
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                    <SelectItem value="support">Customer Support</SelectItem>
                  </SelectContent>
                </Select>
                {form.formState.errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.subject.message}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  rows={6}
                  placeholder="Your message"
                  {...form.register("message")}
                  className="mt-2"
                />
                {form.formState.errors.message && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.message.message}</p>
                )}
              </div>
              
              <Button
                type="submit"
                size="lg"
                className="w-full bg-brand-blue hover:bg-brand-dark-blue text-white font-semibold shadow-none border-0"
                disabled={contactMutation.isPending}
              >
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
