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

const contactFormSchema = insertContactRequestSchema.extend({
  firstName: z.string().min(2, "Името трябва да съдържа поне 2 символа"),
  lastName: z.string().min(2, "Фамилията трябва да съдържа поне 2 символа"),
  email: z.string().email("Невалиден имейл адрес"),
  phone: z.string().min(10, "Телефонният номер трябва да съдържа поне 10 цифри"),
  service: z.string().min(1, "Моля изберете услуга"),
  message: z.string().min(10, "Съобщението трябва да съдържа поне 10 символа"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

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
        title: "Успех!",
        description: "Вашата заявка беше изпратена успешно. Ще се свържем с вас скоро.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Грешка",
        description: "Възникна грешка при изпращането на заявката. Моля опитайте отново.",
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
          <h2 className="text-4xl font-bold text-vionyx-blue mb-4">Свържете се с нас</h2>
          <p className="text-xl text-gray-600">Готови сме да обсъдим вашите нужди от охрана</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-vionyx-blue mb-6">Контактна информация</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="text-vionyx-accent text-xl mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Адрес</h4>
                  <p className="text-gray-600">ул. "Витоша" 123, София 1000, България</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="text-vionyx-accent text-xl mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Телефон</h4>
                  <p className="text-gray-600">+359 89 566 2600</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="text-vionyx-accent text-xl mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">info@vionyx.bg</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="text-vionyx-accent text-xl mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Работно време</h4>
                  <p className="text-gray-600">Понеделник - Петък: 8:00 - 18:00</p>
                  <p className="text-gray-600">Спешни случаи: 24/7</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-gray-900 mb-4">Следвайте ни</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-vionyx-accent transition-colors">
                  <Facebook className="h-6 w-6" />
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
              <h3 className="text-2xl font-semibold text-vionyx-blue mb-6">Заявете оферта</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Име</FormLabel>
                          <FormControl>
                            <Input placeholder="Вашето име" {...field} />
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
                          <FormLabel>Фамилия</FormLabel>
                          <FormControl>
                            <Input placeholder="Вашата фамилия" {...field} />
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
                        <FormLabel>Email</FormLabel>
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
                        <FormLabel>Телефон</FormLabel>
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
                        <FormLabel>Услуга</FormLabel>
                        <FormControl>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <SelectTrigger>
                              <SelectValue placeholder="Изберете услуга" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="event-security">Охрана на мероприятия</SelectItem>
                              <SelectItem value="property-security">Охрана на имуществото на физически и юридически лица</SelectItem>
                              <SelectItem value="alarm-security">Сигнално-охранителна дейност</SelectItem>
                              <SelectItem value="real-estate-security">Охрана на обекти – недвижими имоти</SelectItem>
                              <SelectItem value="agricultural-security">Охрана на селскостопанско имущество</SelectItem>
                              <SelectItem value="stewarding">Стюардинг и контрол билети</SelectItem>
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
                        <FormLabel>Съобщение</FormLabel>
                        <FormControl>
                          <Textarea 
                            rows={4}
                            placeholder="Опишете вашите нужди..."
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
                    {contactMutation.isPending ? "Изпращане..." : "Изпратете заявката"}
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
