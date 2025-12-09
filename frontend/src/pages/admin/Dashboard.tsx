import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useQuery } from '@tanstack/react-query';
import {
  UtensilsCrossed,
  Calendar,
  MessageSquare,
  ShoppingBag
} from 'lucide-react';

export default function AdminDashboard() {
  // ---- MENU COUNT ----
  const { data: menuCount } = useQuery({
    queryKey: ['menu-count'],
    queryFn: async () => {
      const res = await fetch('/api/menu/count');
      if (!res.ok) throw new Error('Failed to load menu count');
      const data = await res.json();
      return data.count;
    },
  });

  // ---- EVENTS COUNT ----
  const { data: eventsCount } = useQuery({
    queryKey: ['events-count'],
    queryFn: async () => {
      const res = await fetch('/api/events/count');
      if (!res.ok) throw new Error('Failed to load events count');
      const data = await res.json();
      return data.count;
    },
  });

  // ---- CONTACT SUBMISSIONS COUNT ----
  const { data: contactsCount } = useQuery({
    queryKey: ['contacts-count'],
    queryFn: async () => {
      const res = await fetch('/api/contact/count');
      if (!res.ok) throw new Error('Failed to load contacts count');
      const data = await res.json();
      return data.count;
    },
  });

  // ---- FOOD ORDERS COUNT ----
  const { data: ordersCount } = useQuery({
    queryKey: ['orders-count'],
    queryFn: async () => {
      const res = await fetch('/api/orders/count');
      if (!res.ok) throw new Error('Failed to load orders count');
      const data = await res.json();
      return data.count;
    },
  });

  const stats = [
    { title: 'Menu Items', value: menuCount, icon: UtensilsCrossed, color: 'text-primary' },
    { title: 'Events', value: eventsCount, icon: Calendar, color: 'text-secondary' },
    { title: 'Contacts', value: contactsCount, icon: MessageSquare, color: 'text-accent' },
    { title: 'Orders', value: ordersCount, icon: ShoppingBag, color: 'text-primary' },
  ];

  return (
    <>
      <title>Admin Dashboard - The Seaside Sips</title>

      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground mt-2">Welcome to the admin panel</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{stat.value ?? '—'}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Use the sidebar to navigate through different sections and manage your content.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

