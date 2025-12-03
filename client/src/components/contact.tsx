import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactRequestSchema } from "@shared/schema";
import { MapPin, Phone, Mail, Clock, Facebook, Linkedin, Twitter } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext"; // Добави този import

export default function Contact() {
  const { t } = useLanguage(); // Добави useLanguage hook
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Обновена schema с динамични съобщения за грешки
  const contactFormSchema = insertContactRequestSchema.extend({
    firstName: z.string().min(2, t('contact.validation.firstName')),
    lastName: z.string().min(2, t('contact.validation.lastName')),
    email: z.string().email(t('contact.validation.email')),
    phone: z.string().min(10, t('contact.validation.phone')),
    service: z.string().min(1, t('contact.validation.service')),
    message: z.string().min(10, t('contact.validation.message')),
  });

  type ContactFormData = z.infer<typeof contactFormSchema>;

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: t('contact.success'),
        description: t('contact.successMessage'),
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: t('contact.error'),
        description: t('contact.errorMessage'),
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-vionyx-blue mb-4">{t('contact.title')}</h2>
          <p className="text-xl text-gray-600">{t('contact.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-vionyx-blue mb-6">{t('contact.info')}</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="text-vionyx-accent text-xl mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">{t('contact.address')}</h4>
                  <p className="text-gray-600">ж.к. Дружба, бл.44, София, България</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="text-vionyx-accent text-xl mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">{t('contact.phone')}</h4>
                  <p className="text-gray-600">+359 89 566 2600</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="text-vionyx-accent text-xl mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">{t('contact.email')}</h4>
                  <p className="text-gray-600">savov@vionyx.eu</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="text-vionyx-accent text-xl mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">{t('contact.hours')}</h4>
                  <p className="text-gray-600">{t('contact.mondayFriday')}</p>
                  <p className="text-gray-600">{t('contact.emergency')}</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-gray-900 mb-4">{t('contact.followUs')}</h4>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/people/Vionyx-LTD-Security/100057514656993/" className="text-blue-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
                <a href="#" className="text-gray-400 hover:text-vionyx-accent transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-vionyx-accent transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-vionyx-light rounded-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-vionyx-blue mb-6">{t('contact.requestQuote')}</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('contact.firstName')}</FormLabel>
                          <FormControl>
                            <Input placeholder={t('contact.firstNamePlaceholder')} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('contact.lastName')}</FormLabel>
                          <FormControl>
                            <Input placeholder={t('contact.lastNamePlaceholder')} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('contact.email')}</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('contact.phone')}</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="+359 XXX XXX XXX" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('contact.service')}</FormLabel>
                        <FormControl>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <SelectTrigger>
                              <SelectValue placeholder={t('contact.selectService')} />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="event-security">{t('services.eventSecurity')}</SelectItem>
                              <SelectItem value="property-security">{t('services.propertySecurity')}</SelectItem>
                              <SelectItem value="alarm-security">{t('services.alarmSecurity')}</SelectItem>
                              <SelectItem value="real-estate-security">{t('services.realEstateSecurity')}</SelectItem>
                              <SelectItem value="agricultural-security">{t('services.agriculturalSecurity')}</SelectItem>
                              <SelectItem value="stewarding">{t('services.stewarding')}</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('contact.message')}</FormLabel>
                        <FormControl>
                          <Textarea 
                            rows={4}
                            placeholder={t('contact.messagePlaceholder')}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-vionyx-accent hover:bg-blue-700 text-white py-3 font-medium"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? t('contact.sending') : t('contact.submit')}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}