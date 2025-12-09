// // SocialLinks.tsx
// import { useState } from 'react';
// import axios from 'axios';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
// import { useToast } from '@/hooks/use-toast';
// import { Plus, Pencil, Trash2 } from 'lucide-react';

// export default function AdminSocialLinks() {
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const [editingItem, setEditingItem] = useState<any>(null);
//   const { toast } = useToast();
//   const queryClient = useQueryClient();

//   const [formData, setFormData] = useState({
//     platform: '',
//     url: '',
//     icon: '',
//   });

//   // Load social links from backend API
//   const { data: links, isLoading } = useQuery({
//     queryKey: ['admin-social-links'],
//     queryFn: async () => {
//       const res = await axios.get('/api/social-links');
//       return res.data;
//     },
//   });

//   // Create social link
//   const createMutation = useMutation({
//     mutationFn: async (data: any) => {
//       await axios.post('/api/social-links', data);
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['admin-social-links'] });
//       toast({ title: 'Social link created successfully' });
//       setIsDialogOpen(false);
//       resetForm();
//     },
//   });

//   // Update social link
//   const updateMutation = useMutation({
//     mutationFn: async ({ id, data }: { id: string; data: any }) => {
//       await axios.put(`/api/social-links/${id}`, data);
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['admin-social-links'] });
//       toast({ title: 'Social link updated successfully' });
//       setIsDialogOpen(false);
//       resetForm();
//     },
//   });

//   // Delete social link
//   const deleteMutation = useMutation({
//     mutationFn: async (id: string) => {
//       await axios.delete(`/api/social-links/${id}`);
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['admin-social-links'] });
//       toast({ title: 'Social link deleted successfully' });
//     },
//   });

//   const resetForm = () => {
//     setFormData({
//       platform: '',
//       url: '',
//       icon: '',
//     });
//     setEditingItem(null);
//   };

//   const handleEdit = (item: any) => {
//     setEditingItem(item);
//     setFormData({
//       platform: item.platform,
//       url: item.url,
//       icon: item.icon || '',
//     });
//     setIsDialogOpen(true);
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (editingItem) {
//       updateMutation.mutate({ id: editingItem._id, data: formData });
//     } else {
//       createMutation.mutate(formData);
//     }
//   };

//   return (
//     <>
//       <title>Social Links - Admin</title>

//       <div className="space-y-6">
//         <div className="flex justify-between items-center">
//           <h1 className="text-3xl font-bold">Social Links</h1>

//           <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
//             <DialogTrigger asChild>
//               <Button onClick={resetForm}>
//                 <Plus className="mr-2 h-4 w-4" />
//                 Add Link
//               </Button>
//             </DialogTrigger>

//             <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
//               <DialogHeader>
//                 <DialogTitle>{editingItem ? 'Edit' : 'Add'} Social Link</DialogTitle>
//               </DialogHeader>

//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div>
//                   <Label htmlFor="platform">Platform *</Label>
//                   <Input
//                     id="platform"
//                     value={formData.platform}
//                     onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
//                     placeholder="Facebook, Instagram..."
//                     required
//                   />
//                 </div>

//                 <div>
//                   <Label htmlFor="url">URL *</Label>
//                   <Input
//                     id="url"
//                     type="url"
//                     value={formData.url}
//                     onChange={(e) => setFormData({ ...formData, url: e.target.value })}
//                     placeholder="https://..."
//                     required
//                   />
//                 </div>

//                 <div>
//                   <Label htmlFor="icon">Icon (Lucide icon name)</Label>
//                   <Input
//                     id="icon"
//                     value={formData.icon}
//                     onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
//                     placeholder="instagram, twitter, facebook"
//                   />
//                 </div>

//                 <div className="flex gap-2">
//                   <Button type="submit">Save</Button>
//                   <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
//                     Cancel
//                   </Button>
//                 </div>
//               </form>
//             </DialogContent>
//           </Dialog>
//         </div>

//         <Card>
//           <CardHeader>
//             <CardTitle>All Social Links</CardTitle>
//           </CardHeader>

//           <CardContent>
//             {isLoading ? (
//               <p>Loading...</p>
//             ) : (
//               <Table>
//                 <TableHeader>
//                   <TableRow>
//                     <TableHead>Platform</TableHead>
//                     <TableHead>URL</TableHead>
//                     <TableHead>Icon</TableHead>
//                     <TableHead>Actions</TableHead>
//                   </TableRow>
//                 </TableHeader>

//                 <TableBody>
//                   {links?.map((item: any) => (
//                     <TableRow key={item._id}>
//                       <TableCell className="font-medium">{item.platform}</TableCell>
//                       <TableCell className="max-w-md truncate">{item.url}</TableCell>
//                       <TableCell>{item.icon || 'N/A'}</TableCell>
//                       <TableCell>
//                         <div className="flex gap-2">
//                           <Button size="icon" variant="ghost" onClick={() => handleEdit(item)}>
//                             <Pencil className="h-4 w-4" />
//                           </Button>

//                           <Button
//                             size="icon"
//                             variant="ghost"
//                             onClick={() => deleteMutation.mutate(item._id)}
//                           >
//                             <Trash2 className="h-4 w-4" />
//                           </Button>
//                         </div>
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             )}
//           </CardContent>
//         </Card>
//       </div>
//     </>
//   );
// }




// // src/pages/admin/SocialLinks.tsx
// import { useState } from 'react';
// import axios from 'axios';
// import {
//   Button,
// } from '@/components/ui/button';
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
// } from '@/components/ui/card';
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from '@/components/ui/table';
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from '@/components/ui/dialog';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
// import { useToast } from '@/hooks/use-toast';
// import { Plus, Pencil, Trash2 } from 'lucide-react';

// export default function AdminSocialLinks() {
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const [editingItem, setEditingItem] = useState<any>(null);

//   const { toast } = useToast();
//   const queryClient = useQueryClient();

//   const [formData, setFormData] = useState({
//     platform: '',
//     url: '',
//     icon: '',
//   });

//   /** -----------------------------
//    * LOAD SOCIAL LINKS
//    * ----------------------------- */
//   const {
//     data: links,
//     isLoading,
//     isError,
//     error,
//   } = useQuery({
//     queryKey: ['admin-social-links'],
//     queryFn: async () => {
//       const res = await axios.get('/api/social-links');
//       return res.data;
//     },
//   });

//   // Make sure links is always an array
//   const safeLinks = Array.isArray(links) ? links : [];

//   /** -----------------------------
//    * CREATE LINK
//    * ----------------------------- */
//   const createMutation = useMutation({
//     mutationFn: async (data: any) => {
//       await axios.post('/api/social-links', data);
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries(['admin-social-links']);
//       toast({ title: 'Social link added successfully' });
//       closeDialog();
//     },
//     onError: () => toast({ title: 'Failed to add link', variant: 'destructive' }),
//   });

//   /** -----------------------------
//    * UPDATE LINK
//    * ----------------------------- */
//   const updateMutation = useMutation({
//     mutationFn: async ({ id, data }: { id: string; data: any }) => {
//       await axios.put(`/api/social-links/${id}`, data);
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries(['admin-social-links']);
//       toast({ title: 'Social link updated successfully' });
//       closeDialog();
//     },
//     onError: () => toast({ title: 'Failed to update link', variant: 'destructive' }),
//   });

//   /** -----------------------------
//    * DELETE LINK
//    * ----------------------------- */
//   const deleteMutation = useMutation({
//     mutationFn: async (id: string) => {
//       await axios.delete(`/api/social-links/${id}`);
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries(['admin-social-links']);
//       toast({ title: 'Deleted successfully' });
//     },
//     onError: () => toast({ title: 'Failed to delete link', variant: 'destructive' }),
//   });

//   /** -----------------------------
//    * HELPERS
//    * ----------------------------- */
//   const resetForm = () => {
//     setFormData({ platform: '', url: '', icon: '' });
//     setEditingItem(null);
//   };

//   const closeDialog = () => {
//     resetForm();
//     setIsDialogOpen(false);
//   };

//   const handleEdit = (item: any) => {
//     setEditingItem(item);
//     setFormData({
//       platform: item.platform,
//       url: item.url,
//       icon: item.icon || '',
//     });
//     setIsDialogOpen(true);
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!formData.platform || !formData.url) {
//       toast({ title: 'Platform & URL are required', variant: 'destructive' });
//       return;
//     }

//     if (editingItem) {
//       updateMutation.mutate({ id: editingItem._id, data: formData });
//     } else {
//       createMutation.mutate(formData);
//     }
//   };

//   /** -----------------------------
//    * RENDER
//    * ----------------------------- */
//   return (
//     <>
//       <title>Admin – Social Links</title>

//       <div className="space-y-6">
//         {/* HEADER */}
//         <div className="flex justify-between items-center">
//           <h1 className="text-3xl font-bold">Social Links</h1>

//           <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
//             <DialogTrigger asChild>
//               <Button onClick={resetForm}>
//                 <Plus className="mr-2 h-4 w-4" />
//                 Add Link
//               </Button>
//             </DialogTrigger>

//             <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
//               <DialogHeader>
//                 <DialogTitle>{editingItem ? 'Edit Social Link' : 'Add New Link'}</DialogTitle>
//               </DialogHeader>

//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div>
//                   <Label>Platform *</Label>
//                   <Input
//                     value={formData.platform}
//                     onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
//                     placeholder="Facebook, Instagram..."
//                     required
//                   />
//                 </div>

//                 <div>
//                   <Label>URL *</Label>
//                   <Input
//                     type="url"
//                     value={formData.url}
//                     onChange={(e) => setFormData({ ...formData, url: e.target.value })}
//                     placeholder="https://..."
//                     required
//                   />
//                 </div>

//                 <div>
//                   <Label>Icon (Lucide icon name)</Label>
//                   <Input
//                     value={formData.icon}
//                     onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
//                     placeholder="instagram, twitter, facebook"
//                   />
//                 </div>

//                 <div className="flex gap-2 pt-4">
//                   <Button type="submit">{editingItem ? 'Update' : 'Save'}</Button>
//                   <Button type="button" variant="outline" onClick={closeDialog}>
//                     Cancel
//                   </Button>
//                 </div>
//               </form>
//             </DialogContent>
//           </Dialog>
//         </div>

//         {/* CONTENT */}
//         <Card>
//           <CardHeader>
//             <CardTitle>All Social Links</CardTitle>
//           </CardHeader>

//           <CardContent>
//             {isLoading && <p>Loading social links...</p>}

//             {isError && (
//               <p className="text-red-500">
//                 Failed to load links: {(error as any)?.message}
//               </p>
//             )}

//             {!isLoading && safeLinks.length === 0 && (
//               <p className="text-gray-500 text-center py-6">
//                 No social links added yet.
//               </p>
//             )}

//             {!isLoading && safeLinks.length > 0 && (
//               <Table>
//                 <TableHeader>
//                   <TableRow>
//                     <TableHead>Platform</TableHead>
//                     <TableHead>URL</TableHead>
//                     <TableHead>Icon</TableHead>
//                     <TableHead>Actions</TableHead>
//                   </TableRow>
//                 </TableHeader>

//                 <TableBody>
//                   {safeLinks.map((item: any) => (
//                     <TableRow key={item._id}>
//                       <TableCell className="font-medium">{item.platform}</TableCell>
//                       <TableCell className="max-w-md truncate">{item.url}</TableCell>

//                       {/* ICON PREVIEW */}
//                       <TableCell>
//                         {item.icon ? item.icon : 'N/A'}
//                       </TableCell>

//                       <TableCell>
//                         <div className="flex gap-2">
//                           <Button
//                             size="icon"
//                             variant="ghost"
//                             onClick={() => handleEdit(item)}
//                           >
//                             <Pencil className="h-4 w-4" />
//                           </Button>

//                           <Button
//                             size="icon"
//                             variant="ghost"
//                             onClick={() => deleteMutation.mutate(item._id)}
//                           >
//                             <Trash2 className="h-4 w-4" />
//                           </Button>
//                         </div>
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             )}
//           </CardContent>
//         </Card>
//       </div>
//     </>
//   );
// }




// // src/pages/AdminSocialLinks.tsx
// import { useState } from 'react';
// import axios from 'axios';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
// import { useToast } from '@/hooks/use-toast';
// import { Plus, Pencil, Trash2 } from 'lucide-react';

// // --------------------------------------------------
// // Types
// // --------------------------------------------------
// interface SocialLink {
//   _id: string;
//   platform: string;
//   url: string;
//   icon?: string;
//   createdAt?: string;
//   updatedAt?: string;
// }

// // --------------------------------------------------
// // Component
// // --------------------------------------------------
// export default function AdminSocialLinks() {
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const [editingItem, setEditingItem] = useState<SocialLink | null>(null);

//   const { toast } = useToast();
//   const queryClient = useQueryClient();

//   // Form state
//   const [formData, setFormData] = useState({
//     platform: '',
//     url: '',
//     icon: '',
//   });

//   const resetForm = () => {
//     setFormData({
//       platform: '',
//       url: '',
//       icon: '',
//     });
//     setEditingItem(null);
//   };

//   const handleEdit = (item: SocialLink) => {
//     setEditingItem(item);
//     setFormData({
//       platform: item.platform,
//       url: item.url,
//       icon: item.icon || '',
//     });
//     setIsDialogOpen(true);
//   };

//   // --------------------------------------------------
//   // React Query: Fetch
//   // --------------------------------------------------
//   const { data: links, isLoading } = useQuery<SocialLink[]>({
//     queryKey: ['admin-social-links'] as const,
//     queryFn: async () => {
//       const res = await axios.get('/api/social-links');
//       return res.data;
//     },
//   });

//   // --------------------------------------------------
//   // React Query: Create
//   // --------------------------------------------------
//   const createMutation = useMutation({
//     mutationFn: async (data: typeof formData) =>
//       axios.post('/api/social-links', data),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['admin-social-links'] });
//       toast({ title: 'Social link created successfully' });
//       resetForm();
//       setIsDialogOpen(false);
//     },
//     onError: () => toast({ title: 'Failed to create link', variant: 'destructive' }),
//   });

//   // --------------------------------------------------
//   // React Query: Update
//   // --------------------------------------------------
//   const updateMutation = useMutation({
//     mutationFn: async ({ id, data }: { id: string; data: typeof formData }) =>
//       axios.put(`/api/social-links/${id}`, data),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['admin-social-links'] });
//       toast({ title: 'Social link updated successfully' });
//       resetForm();
//       setIsDialogOpen(false);
//     },
//     onError: () => toast({ title: 'Failed to update link', variant: 'destructive' }),
//   });

//   // --------------------------------------------------
//   // React Query: Delete
//   // --------------------------------------------------
//   const deleteMutation = useMutation({
//     mutationFn: async (id: string) => axios.delete(`/api/social-links/${id}`),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['admin-social-links'] });
//       toast({ title: 'Social link deleted successfully' });
//     },
//     onError: () => toast({ title: 'Failed to delete link', variant: 'destructive' }),
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (editingItem) {
//       updateMutation.mutate({ id: editingItem._id, data: formData });
//     } else {
//       createMutation.mutate(formData);
//     }
//   };

//   return (
//     <>
//       <title>Admin | Social Links</title>

//       <div className="space-y-6">
//         {/* Header + Add Button */}
//         <div className="flex justify-between items-center">
//           <h1 className="text-3xl font-bold">Social Links</h1>

//           <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
//             <DialogTrigger asChild>
//               <Button onClick={resetForm}>
//                 <Plus className="mr-2 h-4 w-4" />
//                 Add Link
//               </Button>
//             </DialogTrigger>

//             {/* MODAL */}
//             <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
//               <DialogHeader>
//                 <DialogTitle>
//                   {editingItem ? 'Edit Social Link' : 'Add Social Link'}
//                 </DialogTitle>
//               </DialogHeader>

//               <form onSubmit={handleSubmit} className="space-y-4">
//                 {/* Platform */}
//                 <div>
//                   <Label htmlFor="platform">Platform *</Label>
//                   <Input
//                     id="platform"
//                     value={formData.platform}
//                     onChange={(e) =>
//                       setFormData({ ...formData, platform: e.target.value })
//                     }
//                     placeholder="Facebook, Instagram..."
//                     required
//                   />
//                 </div>

//                 {/* URL */}
//                 <div>
//                   <Label htmlFor="url">URL *</Label>
//                   <Input
//                     id="url"
//                     type="url"
//                     value={formData.url}
//                     onChange={(e) =>
//                       setFormData({ ...formData, url: e.target.value })
//                     }
//                     placeholder="https://..."
//                     required
//                   />
//                 </div>

//                 {/* ICON */}
//                 <div>
//                   <Label htmlFor="icon">Icon (Lucide Icon Name)</Label>
//                   <Input
//                     id="icon"
//                     value={formData.icon}
//                     onChange={(e) =>
//                       setFormData({ ...formData, icon: e.target.value })
//                     }
//                     placeholder="instagram, twitter, facebook"
//                   />
//                 </div>

//                 {/* Buttons */}
//                 <div className="flex gap-2">
//                   <Button type="submit">
//                     {editingItem ? 'Update' : 'Create'}
//                   </Button>

//                   <Button
//                     type="button"
//                     variant="outline"
//                     onClick={() => setIsDialogOpen(false)}
//                   >
//                     Cancel
//                   </Button>
//                 </div>
//               </form>
//             </DialogContent>
//           </Dialog>
//         </div>

//         {/* TABLE */}
//         <Card>
//           <CardHeader>
//             <CardTitle>All Social Links</CardTitle>
//           </CardHeader>

//           <CardContent>
//             {isLoading ? (
//               <p>Loading...</p>
//             ) : (
//               <Table>
//                 <TableHeader>
//                   <TableRow>
//                     <TableHead>Platform</TableHead>
//                     <TableHead>URL</TableHead>
//                     <TableHead>Icon</TableHead>
//                     <TableHead>Actions</TableHead>
//                   </TableRow>
//                 </TableHeader>

//                 <TableBody>
//                   {links?.map((item) => (
//                     <TableRow key={item._id}>
//                       <TableCell className="font-medium">{item.platform}</TableCell>

//                       <TableCell className="max-w-md truncate">
//                         {item.url}
//                       </TableCell>

//                       <TableCell>{item.icon || 'N/A'}</TableCell>

//                       <TableCell>
//                         <div className="flex gap-2">
//                           <Button
//                             size="icon"
//                             variant="ghost"
//                             onClick={() => handleEdit(item)}
//                           >
//                             <Pencil className="h-4 w-4" />
//                           </Button>

//                           <Button
//                             size="icon"
//                             variant="ghost"
//                             onClick={() => deleteMutation.mutate(item._id)}
//                           >
//                             <Trash2 className="h-4 w-4" />
//                           </Button>
//                         </div>
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             )}
//           </CardContent>
//         </Card>
//       </div>
//     </>
//   );
// }




// // src/pages/admin/SocialLinks.tsx
// import { useState } from "react";
// import axios from "axios";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import { useToast } from "@/hooks/use-toast";
// import { Plus, Pencil, Trash2 } from "lucide-react";

// interface SocialLink {
//   _id: string;
//   platform: string;
//   url: string;
//   icon?: string;
//   createdAt?: string;
//   updatedAt?: string;
// }

// export default function AdminSocialLinks() {
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const [editingItem, setEditingItem] = useState<SocialLink | null>(null);
//   const { toast } = useToast();
//   const queryClient = useQueryClient();

//   const [formData, setFormData] = useState({
//     platform: "",
//     url: "",
//     icon: "",
//   });

//   // Fetch - typed
//   const { data: linksRaw, isLoading, isError, error } = useQuery<SocialLink[]>(
//     {
//       queryKey: ["admin-social-links"] as const,
//       queryFn: async () => {
//         const res = await axios.get("/api/social-links");
//         return res.data;
//       },
//     }
//   );

//   // Always ensure an array (prevents runtime .map crash)
//   const links = Array.isArray(linksRaw) ? linksRaw : [];

//   // CREATE
//   const createMutation = useMutation({
//     mutationFn: async (data: typeof formData) => axios.post("/api/social-links", data),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["admin-social-links"] });
//       toast({ title: "Social link created successfully" });
//       setIsDialogOpen(false);
//       resetForm();
//     },
//     onError: () => toast({ title: "Failed to create link", variant: "destructive" }),
//   });

//   // UPDATE
//   const updateMutation = useMutation({
//     mutationFn: async ({ id, data }: { id: string; data: typeof formData }) =>
//       axios.put(`/api/social-links/${id}`, data),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["admin-social-links"] });
//       toast({ title: "Social link updated successfully" });
//       setIsDialogOpen(false);
//       resetForm();
//     },
//     onError: () => toast({ title: "Failed to update link", variant: "destructive" }),
//   });

//   // DELETE
//   const deleteMutation = useMutation({
//     mutationFn: async (id: string) => axios.delete(`/api/social-links/${id}`),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["admin-social-links"] });
//       toast({ title: "Social link deleted successfully" });
//     },
//     onError: () => toast({ title: "Failed to delete link", variant: "destructive" }),
//   });

//   const resetForm = () => {
//     setFormData({ platform: "", url: "", icon: "" });
//     setEditingItem(null);
//   };

//   const handleEdit = (item: SocialLink) => {
//     setEditingItem(item);
//     setFormData({ platform: item.platform, url: item.url, icon: item.icon || "" });
//     setIsDialogOpen(true);
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!formData.platform || !formData.url) {
//       toast({ title: "Platform and URL required", variant: "destructive" });
//       return;
//     }
//     if (editingItem) {
//       updateMutation.mutate({ id: editingItem._id, data: formData });
//     } else {
//       createMutation.mutate(formData);
//     }
//   };

//   return (
//     <>
//       <title>Admin | Social Links</title>

//       <div className="space-y-6">
//         <div className="flex justify-between items-center">
//           <h1 className="text-3xl font-bold">Social Links</h1>

//           <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
//             <DialogTrigger asChild>
//               <Button onClick={resetForm}>
//                 <Plus className="mr-2 h-4 w-4" />
//                 Add Link
//               </Button>
//             </DialogTrigger>

//             <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
//               <DialogHeader>
//                 <DialogTitle>{editingItem ? "Edit Social Link" : "Add Social Link"}</DialogTitle>
//               </DialogHeader>

//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div>
//                   <Label htmlFor="platform">Platform *</Label>
//                   <Input id="platform" value={formData.platform} onChange={(e) => setFormData({ ...formData, platform: e.target.value })} placeholder="Facebook, Instagram..." required />
//                 </div>

//                 <div>
//                   <Label htmlFor="url">URL *</Label>
//                   <Input id="url" type="url" value={formData.url} onChange={(e) => setFormData({ ...formData, url: e.target.value })} placeholder="https://..." required />
//                 </div>

//                 <div>
//                   <Label htmlFor="icon">Icon (Lucide icon name)</Label>
//                   <Input id="icon" value={formData.icon} onChange={(e) => setFormData({ ...formData, icon: e.target.value })} placeholder="instagram, twitter, facebook" />
//                 </div>

//                 <div className="flex gap-2">
//                   <Button type="submit">{editingItem ? "Update" : "Create"}</Button>
//                   <Button type="button" variant="outline" onClick={() => { setIsDialogOpen(false); resetForm(); }}>Cancel</Button>
//                 </div>
//               </form>
//             </DialogContent>
//           </Dialog>
//         </div>

//         <Card>
//           <CardHeader>
//             <CardTitle>All Social Links</CardTitle>
//           </CardHeader>

//           <CardContent>
//             {isLoading && <p>Loading social links...</p>}

//             {isError && <p className="text-red-500">Failed to load social links</p>}

//             {!isLoading && links.length === 0 && <p className="text-gray-500 text-center py-6">No social links yet</p>}

//             {!isLoading && links.length > 0 && (
//               <Table>
//                 <TableHeader>
//                   <TableRow>
//                     <TableHead>Platform</TableHead>
//                     <TableHead>URL</TableHead>
//                     <TableHead>Icon</TableHead>
//                     <TableHead>Actions</TableHead>
//                   </TableRow>
//                 </TableHeader>

//                 <TableBody>
//                   {links.map((item) => (
//                     <TableRow key={item._id}>
//                       <TableCell className="font-medium">{item.platform}</TableCell>
//                       <TableCell className="max-w-md truncate">{item.url}</TableCell>
//                       <TableCell>{item.icon || "N/A"}</TableCell>
//                       <TableCell>
//                         <div className="flex gap-2">
//                           <Button size="icon" variant="ghost" onClick={() => handleEdit(item)}><Pencil className="h-4 w-4" /></Button>
//                           <Button size="icon" variant="ghost" onClick={() => deleteMutation.mutate(item._id)}><Trash2 className="h-4 w-4" /></Button>
//                         </div>
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             )}
//           </CardContent>
//         </Card>
//       </div>
//     </>
//   );
// }






// src/pages/admin/SocialLinks.tsx
import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { Plus, Pencil, Trash2 } from "lucide-react";

const API_URL = "http://localhost:5000/api/social-links";

interface SocialLink {
  _id: string;
  platform: string;
  url: string;
  icon?: string;
  createdAt?: string;
  updatedAt?: string;
}

export default function AdminSocialLinks() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<SocialLink | null>(null);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const [formData, setFormData] = useState({
    platform: "",
    url: "",
    icon: "",
  });

  // ✅ FETCH
  const { data: linksRaw, isLoading, isError } = useQuery<SocialLink[]>({
    queryKey: ["admin-social-links"],
    queryFn: async () => {
      const res = await axios.get(API_URL);
      return res.data;
    },
  });

  // ✅ HARD SAFETY AGAINST .map CRASH
  const links = Array.isArray(linksRaw) ? linksRaw : [];

  // ✅ CREATE
  const createMutation = useMutation({
    mutationFn: async (data: typeof formData) =>
      axios.post(API_URL, data),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-social-links"] });
      toast({ title: "Social link created successfully" });
      setIsDialogOpen(false);
      resetForm();
    },

    onError: () =>
      toast({ title: "Failed to create link", variant: "destructive" }),
  });

  // ✅ UPDATE
  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: typeof formData }) =>
      axios.put(`${API_URL}/${id}`, data),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-social-links"] });
      toast({ title: "Social link updated successfully" });
      setIsDialogOpen(false);
      resetForm();
    },

    onError: () =>
      toast({ title: "Failed to update link", variant: "destructive" }),
  });

  // ✅ DELETE
  const deleteMutation = useMutation({
    mutationFn: async (id: string) =>
      axios.delete(`${API_URL}/${id}`),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-social-links"] });
      toast({ title: "Social link deleted successfully" });
    },

    onError: () =>
      toast({ title: "Failed to delete link", variant: "destructive" }),
  });

  const resetForm = () => {
    setFormData({ platform: "", url: "", icon: "" });
    setEditingItem(null);
  };

  const handleEdit = (item: SocialLink) => {
    setEditingItem(item);
    setFormData({
      platform: item.platform,
      url: item.url,
      icon: item.icon || "",
    });
    setIsDialogOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.platform || !formData.url) {
      toast({
        title: "Platform and URL required",
        variant: "destructive",
      });
      return;
    }

    if (editingItem) {
      updateMutation.mutate({ id: editingItem._id, data: formData });
    } else {
      createMutation.mutate(formData);
    }
  };

  return (
    <>
      <title>Admin | Social Links</title>

      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Social Links</h1>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={resetForm}>
                <Plus className="mr-2 h-4 w-4" />
                Add Link
              </Button>
            </DialogTrigger>

            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>
                  {editingItem ? "Edit Social Link" : "Add Social Link"}
                </DialogTitle>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="platform">Platform *</Label>
                  <Input
                    id="platform"
                    value={formData.platform}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        platform: e.target.value,
                      })
                    }
                    placeholder="Facebook, Instagram..."
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="url">URL *</Label>
                  <Input
                    id="url"
                    type="url"
                    value={formData.url}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        url: e.target.value,
                      })
                    }
                    placeholder="https://..."
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="icon">Icon (Lucide icon name)</Label>
                  <Input
                    id="icon"
                    value={formData.icon}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        icon: e.target.value,
                      })
                    }
                    placeholder="instagram, twitter, facebook"
                  />
                </div>

                <div className="flex gap-2">
                  <Button type="submit">
                    {editingItem ? "Update" : "Create"}
                  </Button>

                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setIsDialogOpen(false);
                      resetForm();
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Social Links</CardTitle>
          </CardHeader>

          <CardContent>
            {isLoading && <p>Loading social links...</p>}

            {isError && (
              <p className="text-red-500">Failed to load social links</p>
            )}

            {!isLoading && links.length === 0 && (
              <p className="text-gray-500 text-center py-6">
                No social links yet
              </p>
            )}

            {!isLoading && links.length > 0 && (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Platform</TableHead>
                    <TableHead>URL</TableHead>
                    <TableHead>Icon</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {links.map((item) => (
                    <TableRow key={item._id}>
                      <TableCell className="font-medium">
                        {item.platform}
                      </TableCell>

                      <TableCell className="max-w-md truncate">
                        {item.url}
                      </TableCell>

                      <TableCell>{item.icon || "N/A"}</TableCell>

                      <TableCell>
                        <div className="flex gap-2">
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => handleEdit(item)}
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>

                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() =>
                              deleteMutation.mutate(item._id)
                            }
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
