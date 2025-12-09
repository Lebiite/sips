// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { AuthProvider } from "./contexts/AuthContext";
// import { CartProvider } from "./contexts/CartContext";

// // Layout
// import { AdminLayout } from "@/components/AdminLayout";

// // Main Pages
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Offers from "./pages/Offers";
// import Entertainment from "./pages/Entertainment";
// import Location from "./pages/Location";
// import Contact from "./pages/Contact";
// import Auth from "./pages/Auth";
// import Menu from "./pages/Menu";
// import Cart from "./pages/Cart";
// import Checkout from "./pages/Checkout";

// // Entertainment Pages
// import Dining from "./pages/entertainment/Dining";
// import Bar from "./pages/entertainment/Bar";
// import SwimmingPool from "./pages/entertainment/SwimmingPool";
// import WaterAerobics from "./pages/entertainment/WaterAerobics";
// import SwimmingLessons from "./pages/entertainment/SwimmingLessons";
// import BeachAccess from "./pages/entertainment/BeachAccess";
// import EventHosting from "./pages/entertainment/EventHosting";
// import WineTasting from "./pages/entertainment/WineTasting";
// import Family from "./pages/entertainment/Family";
// import Gazebo from "./pages/entertainment/Gazebo";

// // Admin Pages
// import AdminDashboard from "./pages/admin/Dashboard";
// import AdminMenu from "./pages/admin/Menu";
// import AdminCategory from "./pages/admin/menu/AdminCategory"; // ⭐ NEW
// import AdminEvents from "./pages/admin/Events";
// import AdminSwimmingLessons from "./pages/admin/SwimmingLessons";
// import AdminWaterAerobics from "./pages/admin/WaterAerobics";
// import AdminWineTasting from "./pages/admin/WineTasting";
// import AdminContacts from "./pages/admin/Contacts";
// import AdminOrders from "./pages/admin/Orders";
// import AdminHighlights from "./pages/admin/Highlights";
// import AdminHours from "./pages/admin/Hours";
// import AdminSocialLinks from "./pages/admin/SocialLinks";

// // Menu Category Pages (Frontend)
// import Pizza from "./pages/menu/Pizza";
// import MainDishes from "./pages/menu/MainDishes";
// // import Drinks from "./pages/menu/Drinks";
// import Snacks from "./pages/menu/Snacks";
// import Healthy from "./pages/menu/Healthy";
// import Desserts from "./pages/menu/Desserts";
// import Breakfast from "./pages/menu/Breakfast";

// // Other Pages
// import WhatsApp from "./pages/WhatsApp";
// import Nine from "./pages/Nine";
// import Hosting from "./pages/Hosting";
// import Gallery from "./pages/Gallery";
// import NotFound from "./pages/NotFound";
// import DrinkCategory from "./pages/DrinkCategory";

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <AuthProvider>
//       <CartProvider>
//         <TooltipProvider>
//           <Toaster />
//           <Sonner />
//           <BrowserRouter>

//             <WhatsApp />

//             <Routes>

//               {/* Public Pages */}
//               <Route path="/" element={<Home />} />
//               <Route path="/about" element={<About />} />
//               <Route path="/offers" element={<Offers />} />
//               <Route path="/entertainment" element={<Entertainment />} />
//               <Route path="/location" element={<Location />} />
//               <Route path="/contact" element={<Contact />} />
//               <Route path="/auth" element={<Auth />} />
//               <Route path="/menu" element={<Menu />} />
//               <Route path="/cart" element={<Cart />} />
//               <Route path="/checkout" element={<Checkout />} />

//               {/* Entertainment (Simple Paths) */}
//               <Route path="/restaurant" element={<Dining />} />
//               <Route path="/bar" element={<Bar />} />
//               <Route path="/pool" element={<SwimmingPool />} />
//               <Route path="/gazebo" element={<Gazebo />} />
//               <Route path="/family" element={<Family />} />
//               <Route path="/aerobics" element={<WaterAerobics />} />
//               <Route path="/beach" element={<BeachAccess />} />
//               <Route path="/tasting" element={<WineTasting />} />
//               <Route path="/drinks/:category" element={<DrinkCategory />} />

//               {/* Legacy Entertainment */}
//               <Route path="/entertainment/dining" element={<Dining />} />
//               <Route path="/entertainment/water-aerobics" element={<WaterAerobics />} />
//               <Route path="/entertainment/swimming-lessons" element={<SwimmingLessons />} />
//               <Route path="/entertainment/events" element={<EventHosting />} />
//               <Route path="/entertainment/wine-tasting" element={<WineTasting />} />

//               {/* Menu Category Pages */}
//               <Route path="/pizza/:category?" element={<Pizza />} />
//               {/* <Route path="/drinks/:category?" element={<Drinks />} /> */}
//               <Route path="/foods/:category?" element={<MainDishes />} />
//               <Route path="/healthy/:category?" element={<Healthy />} />
//               <Route path="/desserts/:category?" element={<Desserts />} />
//               <Route path="/breakfast/:category?" element={<Breakfast />} />
//               <Route path="/snacks" element={<Snacks />} />

//               {/* Misc */}
//               <Route path="/hosting" element={<Hosting />} />
//               <Route path="/gallery" element={<Gallery />} />
//               <Route path="/nine" element={<Nine />} />

//               {/* Admin Section */}
//               <Route element={<AdminLayout />}>
//                 <Route path="/admin" element={<AdminDashboard />} />

//                 {/* ADMIN MENU — NOW PERFECT */}
//                 <Route path="/admin/menu" element={<AdminMenu />} />
//                 <Route path="/admin/menu/:slug" element={<AdminCategory />} />

//                 <Route path="/admin/events" element={<AdminEvents />} />
//                 <Route path="/admin/swimming-lessons" element={<AdminSwimmingLessons />} />
//                 <Route path="/admin/water-aerobics" element={<AdminWaterAerobics />} />
//                 <Route path="/admin/wine-tasting" element={<AdminWineTasting />} />
//                 <Route path="/admin/contacts" element={<AdminContacts />} />
//                 <Route path="/admin/orders" element={<AdminOrders />} />
//                 <Route path="/admin/highlights" element={<AdminHighlights />} />
//                 <Route path="/admin/hours" element={<AdminHours />} />
//                 <Route path="/admin/social" element={<AdminSocialLinks />} />
//                 <Route path="/bar" element={<Bar />} />
//                 {/* <Route path="/drinks/:category" element={<DrinkCategory />} /> */}
//               </Route>

//               {/* 404 */}
//               <Route path="*" element={<NotFound />} />
//             </Routes>

//           </BrowserRouter>
//         </TooltipProvider>
//       </CartProvider>
//     </AuthProvider>
//   </QueryClientProvider>
// );

// export default App;






import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext";

// Layout
import { AdminLayout } from "@/components/AdminLayout";

// Main Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Offers from "./pages/Offers";
import Entertainment from "./pages/Entertainment";
import Location from "./pages/Location";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

// Entertainment Pages
import Dining from "./pages/entertainment/Dining";
import Bar from "./pages/entertainment/Bar";
import SwimmingPool from "./pages/entertainment/SwimmingPool";
import WaterAerobics from "./pages/entertainment/WaterAerobics";
import SwimmingLessons from "./pages/entertainment/SwimmingLessons";
import BeachAccess from "./pages/entertainment/BeachAccess";
import EventHosting from "./pages/entertainment/EventHosting";
import WineTasting from "./pages/entertainment/WineTasting";
import Family from "./pages/entertainment/Family";
import Gazebo from "./pages/entertainment/Gazebo";

// Admin Pages
import AdminDashboard from "./pages/admin/Dashboard";
import AdminMenu from "./pages/admin/Menu";
import AdminCategory from "./pages/admin/menu/AdminCategory";
import AdminEvents from "./pages/admin/Events";
import AdminSwimmingLessons from "./pages/admin/SwimmingLessons";
import AdminWaterAerobics from "./pages/admin/WaterAerobics";
import AdminWineTasting from "./pages/admin/WineTasting";
import AdminContacts from "./pages/admin/Contacts";
import AdminOrders from "./pages/admin/Orders";
import AdminHighlights from "./pages/admin/Highlights";
import AdminHours from "./pages/admin/Hours";
import AdminSocialLinks from "./pages/admin/SocialLinks"; // ⭐ SOCIAL LINKS

// Menu Category Pages
import Pizza from "./pages/menu/Pizza";
import MainDishes from "./pages/menu/MainDishes";
import Snacks from "./pages/menu/Snacks";
import Healthy from "./pages/menu/Healthy";
import Desserts from "./pages/menu/Desserts";
import Breakfast from "./pages/menu/Breakfast";

// Other Pages
import WhatsApp from "./pages/WhatsApp";
import Nine from "./pages/Nine";
import Hosting from "./pages/Hosting";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";
import DrinkCategory from "./pages/DrinkCategory";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>

            <WhatsApp />

            <Routes>

              {/* Public Pages */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/offers" element={<Offers />} />
              <Route path="/entertainment" element={<Entertainment />} />
              <Route path="/location" element={<Location />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />

              {/* Entertainment Simple */}
              <Route path="/restaurant" element={<Dining />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pool" element={<SwimmingPool />} />
              <Route path="/gazebo" element={<Gazebo />} />
              <Route path="/family" element={<Family />} />
              <Route path="/aerobics" element={<WaterAerobics />} />
              <Route path="/beach" element={<BeachAccess />} />
              <Route path="/tasting" element={<WineTasting />} />
              <Route path="/drinks/:category" element={<DrinkCategory />} />

              {/* Legacy Entertainment */}
              <Route path="/entertainment/dining" element={<Dining />} />
              <Route path="/entertainment/water-aerobics" element={<WaterAerobics />} />
              <Route path="/entertainment/swimming-lessons" element={<SwimmingLessons />} />
              <Route path="/entertainment/events" element={<EventHosting />} />
              <Route path="/entertainment/wine-tasting" element={<WineTasting />} />

              {/* Menu Categories */}
              <Route path="/pizza/:category?" element={<Pizza />} />
              <Route path="/foods/:category?" element={<MainDishes />} />
              <Route path="/healthy/:category?" element={<Healthy />} />
              <Route path="/desserts/:category?" element={<Desserts />} />
              <Route path="/breakfast/:category?" element={<Breakfast />} />
              <Route path="/snacks" element={<Snacks />} />

              {/* Misc */}
              <Route path="/hosting" element={<Hosting />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/nine" element={<Nine />} />

              {/* Admin Section */}
              <Route element={<AdminLayout />}>
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/admin/menu" element={<AdminMenu />} />
                <Route path="/admin/menu/:slug" element={<AdminCategory />} />
                <Route path="/admin/events" element={<AdminEvents />} />
                <Route path="/admin/swimming-lessons" element={<AdminSwimmingLessons />} />
                <Route path="/admin/water-aerobics" element={<AdminWaterAerobics />} />
                <Route path="/admin/wine-tasting" element={<AdminWineTasting />} />
                <Route path="/admin/contacts" element={<AdminContacts />} />
                <Route path="/admin/orders" element={<AdminOrders />} />
                <Route path="/admin/highlights" element={<AdminHighlights />} />
                <Route path="/admin/hours" element={<AdminHours />} />

                {/* ⭐ NEW SOCIAL LINKS ROUTE */}
                <Route path="/admin/social" element={<AdminSocialLinks />} />
              </Route>

              {/* 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>

          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
