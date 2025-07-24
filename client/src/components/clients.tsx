import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import type { Client } from "@shared/schema";

export default function Clients() {
  const { data: clients, isLoading } = useQuery<Client[]>({
    queryKey: ["/api/clients"],
  });

  if (isLoading) {
    return (
      <section id="clients" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-vionyx-blue mb-4">Нашите клиенти</h2>
            <p className="text-xl text-gray-600">Доверие от водещи компании и организации</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-vionyx-light animate-pulse">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                    <div className="flex-1">
                      <div className="h-4 bg-gray-200 rounded mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                  <div className="h-20 bg-gray-200 rounded"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="clients" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-vionyx-blue mb-4">Нашите клиенти</h2>
          <p className="text-xl text-gray-600">Доверие от водещи компании и организации</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center mb-16">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-gray-100 rounded-lg p-6 h-24 flex items-center justify-center">
              <span className="text-gray-400 font-medium">CLIENT {i}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clients?.map((client) => (
            <Card key={client.id} className="bg-vionyx-light rounded-xl">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-vionyx-accent rounded-full flex items-center justify-center text-white font-bold mr-4">
                    <span>
                      {client.contactPerson?.split(' ').map(n => n[0]).join('') || 'КЛ'}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-vionyx-blue">{client.contactPerson}</h4>
                    <p className="text-sm text-gray-600">{client.position}, {client.name}</p>
                  </div>
                </div>
                <p className="text-gray-700">"{client.testimonial}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
