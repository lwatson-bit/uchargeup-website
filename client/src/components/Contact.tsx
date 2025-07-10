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
import { contactSchema, type ContactForm } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
      subject: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible."
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive"
      });
    }
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    await contactMutation.mutateAsync(data);
    setIsSubmitting(false);
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
                <Select onValueChange={(value) => form.setValue("subject", value)}>
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
                className="w-full bg-brand-blue hover:bg-brand-dark-blue text-white font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
