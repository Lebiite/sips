import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

export default function AdminMenu() {
  const { toast } = useToast();

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  // FORM FIELDS
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");

  // FETCH CATEGORIES FROM BACKEND
  const loadCategories = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/categories");
      const data = await res.json();
      setCategories(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  // HANDLE CREATE CATEGORY
  const createCategory = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, slug }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      toast({ title: "Category Added", description: `${title} created` });

      setTitle("");
      setSlug("");

      await loadCategories(); // refresh list
    } catch (err: any) {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-16 px-6 bg-white min-h-screen">

      {/* HEADER */}
      <div className="flex justify-between items-center max-w-6xl mx-auto mb-10">
        <h1 className="text-3xl font-bold">Menu Categories</h1>

        {/* ADD CATEGORY BUTTON */}
        <Dialog>
          <DialogTrigger asChild>
            <Button>Add Category</Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Category</DialogTitle>
            </DialogHeader>

            <form className="space-y-4" onSubmit={createCategory}>
              <div>
                <Label>Category Title</Label>
                <Input
                  placeholder="e.g. Drinks"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div>
                <Label>Slug</Label>
                <Input
                  placeholder="e.g. drinks"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  required
                />
              </div>

              <Button disabled={loading} className="w-full">
                {loading ? "Adding..." : "Add Category"}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* CATEGORY GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">

        {categories.map((cat: any) => (
          <Link key={cat._id} to={`/admin/menu/${cat.slug}`}>
            <Card className="hover:shadow-lg hover:scale-[1.02] transition cursor-pointer">
              <CardContent className="p-6 text-center">
                <h2 className="text-xl font-semibold">{cat.title}</h2>
              </CardContent>
            </Card>
          </Link>
        ))}

      </div>

    </div>
  );
}


// // // src/pages/admin/AdminMenu.tsx
// // import { Link } from "react-router-dom";
// // import { Card, CardContent } from "@/components/ui/card";

// // export default function AdminMenu() {
// //   const sections = [
// //     {
// //       title: "Restaurant",
// //       slug: "restaurant",
// //     },
// //     {
// //       title: "Bar",
// //       slug: "bar",
// //     },
// //   ];

// //   return (
// //     <div className="py-16 px-6 bg-white min-h-screen">

// //       {/* HEADER */}
// //       <div className="max-w-4xl mx-auto mb-10">
// //         <h1 className="text-3xl font-bold text-center">Admin Menu Sections</h1>
// //       </div>

// //       {/* TWO BIG CARDS */}
// //       <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
// //         {sections.map((sec) => (
// //           <Link key={sec.slug} to={`/admin/menu/${sec.slug}`}>
// //             <Card className="hover:shadow-xl hover:scale-[1.03] transition cursor-pointer rounded-2xl">
// //               <CardContent className="p-10 text-center">
// //                 <h2 className="text-3xl font-bold">{sec.title}</h2>
// //               </CardContent>
// //             </Card>
// //           </Link>
// //         ))}
// //       </div>

// //     </div>
// //   );
// // }



// // src/pages/admin/AdminMenu.tsx
// import { Link } from "react-router-dom";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { useToast } from "@/hooks/use-toast";
// import { useState } from "react";

// export default function AdminMenu() {
//   const { toast } = useToast();

//   // FORM STATE
//   const [title, setTitle] = useState("");
//   const [slug, setSlug] = useState("");
//   const [loading, setLoading] = useState(false);

//   // STATIC ROOT GROUPS
//   const groups = [
//     { title: "Restaurant", slug: "restaurant" },
//     { title: "Bar", slug: "bar" },
//   ];

//   // CREATE CATEGORY (now only used for inside groups)
//   const createCategory = async (e: any) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await fetch("http://localhost:5000/api/categories", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ title, slug }),
//       });

//       const data = await res.json();
//       if (!res.ok) throw new Error(data.message);

//       toast({ title: "Category Added", description: `${title} created` });

//       setTitle("");
//       setSlug("");
//     } catch (err: any) {
//       toast({
//         title: "Error",
//         description: err.message,
//         variant: "destructive",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="py-16 px-6 bg-white min-h-screen">

//       {/* HEADER */}
//       <div className="flex justify-between items-center max-w-6xl mx-auto mb-10">
//         <h1 className="text-3xl font-bold">Admin Menu</h1>

//         {/* ADD CATEGORY (still works for inside groups) */}
//         <Dialog>
//           <DialogTrigger asChild>
//             <Button>Add Category</Button>
//           </DialogTrigger>

//           <DialogContent>
//             <DialogHeader>
//               <DialogTitle>Add New Category</DialogTitle>
//             </DialogHeader>

//             <form className="space-y-4" onSubmit={createCategory}>
//               <div>
//                 <Label>Category Title</Label>
//                 <Input
//                   placeholder="e.g. Main Dishes"
//                   value={title}
//                   onChange={(e) => setTitle(e.target.value)}
//                   required
//                 />
//               </div>

//               <div>
//                 <Label>Slug</Label>
//                 <Input
//                   placeholder="e.g. main-dishes"
//                   value={slug}
//                   onChange={(e) => setSlug(e.target.value)}
//                   required
//                 />
//               </div>

//               <Button disabled={loading} className="w-full">
//                 {loading ? "Adding..." : "Add Category"}
//               </Button>
//             </form>
//           </DialogContent>
//         </Dialog>
//       </div>

//       {/* ROOT MENU GROUPS */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">

//         {groups.map((group) => (
//           <Link key={group.slug} to={`/admin/menu/${group.slug}`}>
//             <Card className="hover:shadow-lg hover:scale-[1.02] transition cursor-pointer">
//               <CardContent className="p-6 text-center">
//                 <h2 className="text-2xl font-semibold">{group.title}</h2>
//               </CardContent>
//             </Card>
//           </Link>
//         ))}

//       </div>

//     </div>
//   );
// }
