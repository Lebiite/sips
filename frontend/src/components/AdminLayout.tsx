// import { Outlet } from 'react-router-dom';
// import { ReactNode, useEffect } from 'react';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { useAuth } from '@/contexts/AuthContext';
// import { Button } from '@/components/ui/button';
// import { 
//   LayoutDashboard, 
//   UtensilsCrossed, 
//   Calendar, 
//   Waves, 
//   Droplets, 
//   Wine, 
//   MessageSquare, 
//   ShoppingBag,
//   Sparkles,
//   Clock,
//   Share2,
//   LogOut
// } from 'lucide-react';
// import { NavLink } from '@/components/NavLink';

// const adminNav = [
//   { name: 'Dashboard', href: '/admin', icon: LayoutDashboard, end: true },
//   { name: 'Menu Items', href: '/admin/menu', icon: UtensilsCrossed },
//   { name: 'Events', href: '/admin/events', icon: Calendar },
//   { name: 'Swimming Lessons', href: '/admin/swimming-lessons', icon: Waves },
//   { name: 'Water Aerobics', href: '/admin/water-aerobics', icon: Droplets },
//   { name: 'Wine Tasting', href: '/admin/wine-tasting', icon: Wine },
//   { name: 'Contact Submissions', href: '/admin/contacts', icon: MessageSquare },
//   { name: 'Food Orders', href: '/admin/orders', icon: ShoppingBag },
//   { name: 'Homepage Highlights', href: '/admin/highlights', icon: Sparkles },
//   { name: 'Opening Hours', href: '/admin/hours', icon: Clock },
//   { name: 'Social Links', href: '/admin/social', icon: Share2 },
// ];

// export function AdminLayout({ children }: { children: ReactNode }) {
//   // const { user, isAdmin, loading, signOut } = useAuth();
//   // const navigate = useNavigate();
//   // const location = useLocation();

//   // useEffect(() => {
//   //   if (!loading && (!user || !isAdmin)) {
//   //     navigate('/auth');
//   //   }
//   // }, [user, isAdmin, loading, navigate]);

//   // if (loading) {
//   //   return (
//   //     <div className="min-h-screen flex items-center justify-center">
//   //       <div className="text-lg">Loading...</div>
//   //     </div>
//   //   );
//   // }

//   // if (!user || !isAdmin) {
//   //   return null;
//   }

//   return (
//     <div className="min-h-screen flex w-full">
//       {/* Sidebar */}
//       <aside className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
//         <div className="p-6 border-b border-sidebar-border">
//           <h1 className="text-xl font-bold text-sidebar-foreground">Admin Panel</h1>
//           <p className="text-sm text-muted-foreground mt-1">Seaside Sips</p>
//         </div>
        
//         <nav className="flex-1 p-4 space-y-1">
//           {adminNav.map((item) => (
//             <NavLink
//               key={item.href}
//               to={item.href}
//               end={item.end}
//               className="flex items-center gap-3 px-3 py-2 rounded-md text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
//               activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
//             >
//               <item.icon className="h-5 w-5" />
//               <span>{item.name}</span>
//             </NavLink>
//           ))}
//         </nav>
        
//         <div className="p-4 border-t border-sidebar-border">
//           <Button 
//             variant="outline" 
//             className="w-full justify-start" 
//             onClick={() => navigate('/')}
//           >
//             <LayoutDashboard className="mr-2 h-4 w-4" />
//             Back to Site
//           </Button>
//           <Button 
//             variant="ghost" 
//             className="w-full justify-start mt-2" 
//             onClick={signOut}
//           >
//             <LogOut className="mr-2 h-4 w-4" />
//             Sign Out
//           </Button>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 overflow-auto">
//         <div className="p-8">
//           {children}
//         </div>
//       </main>
//     </div>
//   );
// }


// better but showing two navigation admin 
// import { Outlet } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import {
//   LayoutDashboard,
//   UtensilsCrossed,
//   Calendar,
//   Waves,
//   Droplets,
//   Wine,
//   MessageSquare,
//   ShoppingBag,
//   Sparkles,
//   Clock,
//   Share2,
// } from "lucide-react";
// import { NavLink } from "@/components/NavLink";

// const adminNav = [
//   { name: "Dashboard", href: "/admin", icon: LayoutDashboard, end: true },
//   { name: "Menu Items", href: "/admin/menu", icon: UtensilsCrossed },
//   { name: "Events", href: "/admin/events", icon: Calendar },
//   { name: "Swimming Lessons", href: "/admin/swimming-lessons", icon: Waves },
//   { name: "Water Aerobics", href: "/admin/water-aerobics", icon: Droplets },
//   { name: "Wine Tasting", href: "/admin/wine-tasting", icon: Wine },
//   { name: "Contact Submissions", href: "/admin/contacts", icon: MessageSquare },
//   { name: "Food Orders", href: "/admin/orders", icon: ShoppingBag },
//   { name: "Homepage Highlights", href: "/admin/highlights", icon: Sparkles },
//   { name: "Opening Hours", href: "/admin/hours", icon: Clock },
//   { name: "Social Links", href: "/admin/social", icon: Share2 },
// ];

// export function AdminLayout() {
//   const navigate = useNavigate();

//   // AUTH IS TEMPORARILY DISABLED — everything below this line is ignored
//   // When you want auth back, just delete the /* ... */ around the auth code later

//   return (
//     <div className="min-h-screen flex w-full">
//       {/* Sidebar */}
//       <aside className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
//         <div className="p-6 border-b border-sidebar-border">
//           <h1 className="text-xl font-bold text-sidebar-foreground">Admin Panel</h1>
//           <p className="text-sm text-muted-foreground mt-1">Seaside Sips</p>
//         </div>

//         <nav className="flex-1 p-4 space-y-1">
//           {adminNav.map((item) => (
//             <NavLink
//               key={item.href}
//               to={item.href}
//               end={item.end}
//               className="flex items-center gap-3 px-3 py-2 rounded-md text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
//               activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
//             >
//               <item.icon className="h-5 w-5" />
//               <span>{item.name}</span>
//             </NavLink>
//           ))}
//         </nav>

//         <div className="p-4 border-t border-sidebar-border">
//           <Button
//             variant="outline"
//             className="w-full justify-start"
//             onClick={() => navigate("/")}
//           >
//             <LayoutDashboard className="mr-2 h-4 w-4" />
//             Back to Site
//           </Button>
//         </div>
//       </aside>

//       {/* Main Content – THIS IS WHAT SHOWS YOUR ADMIN PAGES */}
//       <main className="flex-1 overflow-auto bg-background">
//         <div className="p-8">
//           <Outlet />   {/* ← This renders Dashboard, Menu, Events, etc. */}
//         </div>
//       </main>
//     </div>
//   );
// }



//this is better shows two first then one disppaears
// import { Outlet } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import {
//   LayoutDashboard,
//   UtensilsCrossed,
//   Calendar,
//   Waves,
//   Droplets,
//   Wine,
//   MessageSquare,
//   ShoppingBag,
//   Sparkles,
//   Clock,
//   Share2,
// } from "lucide-react";
// import { NavLink } from "@/components/NavLink";

// const adminNav = [
//   { name: "Dashboard", href: "/admin", icon: LayoutDashboard, end: true },
//   { name: "Menu Items", href: "/admin/menu", icon: UtensilsCrossed },
//   { name: "Events", href: "/admin/events", icon: Calendar },
//   { name: "Swimming Lessons", href: "/admin/swimming-lessons", icon: Waves },
//   { name: "Water Aerobics", href: "/admin/water-aerobics", icon: Droplets },
//   { name: "Wine Tasting", href: "/admin/wine-tasting", icon: Wine },
//   { name: "Contact Submissions", href: "/admin/contacts", icon: MessageSquare },
//   { name: "Food Orders", href: "/admin/orders", icon: ShoppingBag },
//   { name: "Homepage Highlights", href: "/admin/highlights", icon: Sparkles },
//   { name: "Opening Hours", href: "/admin/hours", icon: Clock },
//   { name: "Social Links", href: "/admin/social", icon: Share2 },
// ];

// export function AdminLayout() {
//   const navigate = useNavigate();

//   // THIS IS THE MAGIC LINE THAT KILLS DOUBLE SIDEBAR FOREVER
//   if (document.querySelectorAll("aside").length > 0) {
//     return <Outlet />;
//   }

//   return (
//     <div className="min-h-screen flex w-full">
//       <aside className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
//         <div className="p-6 border-b border-sidebar-border">
//           <h1 className="text-xl font-bold text-sidebar-foreground">Admin Panel</h1>
//           <p className="text-sm text-muted-foreground mt-1">Seaside Sips</p>
//         </div>

//         <nav className="flex-1 p-4 space-y-1">
//           {adminNav.map((item) => (
//             <NavLink
//               key={item.href}
//               to={item.href}
//               end={item.end}
//               className="flex items-center gap-3 px-3 py-2 rounded-md text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
//               activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
//             >
//               <item.icon className="h-5 w-5" />
//               <span>{item.name}</span>
//             </NavLink>
//           ))}
//         </nav>

//         <div className="p-4 border-t border-sidebar-border">
//           <Button variant="outline" className="w-full justify-start" onClick={() => navigate("/")}>
//             <LayoutDashboard className="mr-2 h-4 w-4" />
//             Back to Site
//           </Button>
//         </div>
//       </aside>

//       <main className="flex-1 overflow-auto bg-background">
//         <div className="p-8">
//           <Outlet />
//         </div>
//       </main>
//     </div>
//   );
// }


// import { Outlet } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import {
//   LayoutDashboard,
//   UtensilsCrossed,
//   Calendar,
//   Waves,
//   Droplets,
//   Wine,
//   MessageSquare,
//   ShoppingBag,
//   Sparkles,
//   Clock,
//   Share2,
// } from "lucide-react";
// import { NavLink } from "@/components/NavLink";
// import { useEffect, useState } from "react";

// const adminNav = [
//   { name: "Dashboard", href: "/admin", icon: LayoutDashboard, end: true },
//   { name: "Menu Items", href: "/admin/menu", icon: UtensilsCrossed },
//   { name: "Events", href: "/admin/events", icon: Calendar },
//   { name: "Swimming Lessons", href: "/admin/swimming-lessons", icon: Waves },
//   { name: "Water Aerobics", href: "/admin/water-aerobics", icon: Droplets },
//   { name: "Wine Tasting", href: "/admin/wine-tasting", icon: Wine },
//   { name: "Contact Submissions", href: "/admin/contacts", icon: MessageSquare },
//   { name: "Food Orders", href: "/admin/orders", icon: ShoppingBag },
//   { name: "Homepage Highlights", href: "/admin/highlights", icon: Sparkles },
//   { name: "Opening Hours", href: "/admin/hours", icon: Clock },
//   { name: "Social Links", href: "/admin/social", icon: Share2 },
// ];

// let hasRenderedSidebar = false; // ← Global flag (works because all AdminLayout instances share the same file)

// export function AdminLayout() {
//   const navigate = useNavigate();
//   const [showSidebar, setShowSidebar] = useState(false);

//   useEffect(() => {
//     if (!hasRenderedSidebar) {
//       hasRenderedSidebar = true;
//       setShowSidebar(true);
//     }
//   }, []);

//   // If another AdminLayout already rendered the sidebar → just show content
//   if (!showSidebar) {
//     return <Outlet />;
//   }

//   return (
//     <div className="min-h-screen flex w-full">
//       {/* Sidebar - RENDERS ONLY ONCE */}
//       <aside className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
//         <div className="p-6 border-b border-sidebar-border">
//           <h1 className="text-xl font-bold text-sidebar-foreground">Admin Panel</h1>
//           <p className="text-sm text-muted-foreground mt-1">Seaside Sips</p>
//         </div>

//         <nav className="flex-1 p-4 space-y-1">
//           {adminNav.map((item) => (
//             // <NavLink
//             //   key={item.href}
//             //   to={item.href}
//             //   end={item.end}
//             //   className="flex items-center gap-3 px-3 py-2 rounded-md text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
//             //   activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
//             // >
//                 <a
//                 href={item.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-3 px-3 py-2 rounded-md text-sidebar-foreground hover:bg-sidebar-accent transition-colors bg-sidebar-accent/50"
//               >
//               <item.icon className="h-5 w-5" />
//               <span>{item.name}</span>
//             </NavLink>
//           ))}
//         </nav>

//         <div className="p-4 border-t border-sidebar-border">
//           <Button variant="outline" className="w-full justify-start" onClick={() => navigate("/")}>
//             <LayoutDashboard className="mr-2 h-4 w-4" />
//             Back to Site
//           </Button>
//         </div>
//       </aside>

//       <main className="flex-1 overflow-auto bg-background">
//         <div className="p-8">
//           <Outlet />
//         </div>
//       </main>
//     </div>
//   );
// }





import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  UtensilsCrossed,
  Calendar,
  Waves,
  Droplets,
  Wine,
  MessageSquare,
  ShoppingBag,
  Sparkles,
  Clock,
  Share2,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";

const adminNav = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard, end: true },
  { name: "Menu Items", href: "/admin/menu", icon: UtensilsCrossed },
  { name: "Events", href: "/admin/events", icon: Calendar },
  { name: "Swimming Lessons", href: "/admin/swimming-lessons", icon: Waves },
  { name: "Water Aerobics", href: "/admin/water-aerobics", icon: Droplets },
  { name: "Wine Tasting", href: "/admin/wine-tasting", icon: Wine },
  { name: "Contact Submissions", href: "/admin/contacts", icon: MessageSquare },
  { name: "Food Orders", href: "/admin/orders", icon: ShoppingBag },
  { name: "Homepage Highlights", href: "/admin/highlights", icon: Sparkles },
  { name: "Opening Hours", href: "/admin/hours", icon: Clock },
  { name: "Social Links", href: "/admin/social", icon: Share2 },
];

export function AdminLayout() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex w-full">
      {/* Sidebar - only one */}
      <aside className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
        <div className="p-6 border-b border-sidebar-border">
          <h1 className="text-xl font-bold text-sidebar-foreground">Admin Panel</h1>
          <p className="text-sm text-muted-foreground mt-1">Seaside Sips</p>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {adminNav.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.end}
              className="flex items-center gap-3 px-3 py-2 rounded-md text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
              activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-sidebar-border">
          <Button variant="outline" className="w-full justify-start" onClick={() => navigate("/")}>
            <LayoutDashboard className="mr-2 h-4 w-4" />
            Back to Site
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto bg-background">
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}