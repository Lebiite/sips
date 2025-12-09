// import { useState } from 'react';
// import axios from 'axios';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Textarea } from '@/components/ui/textarea';
// import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
// import { useToast } from '@/hooks/use-toast';
// import { Plus, Pencil, Trash2 } from 'lucide-react';

// export default function AdminHighlights() {
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const [editingItem, setEditingItem] = useState<any>(null);
//   const { toast } = useToast();
//   const queryClient = useQueryClient();

//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     icon: '',
//     order_index: '',
//   });

//   // Load highlights from backend API
//   const { data: highlights, isLoading } = useQuery({
//     queryKey: ['admin-highlights'],
//     queryFn: async () => {
//       const res = await axios.get('/api/highlights');
//       return res.data;
//     },
//   });

//   // Create mutation
//   const createMutation = useMutation({
//     mutationFn: async (data: any) => {
//       const payload = {
//         ...data,
//         order_index: data.order_index ? parseInt(data.order_index) : null,
//       };
//       await axios.post('/api/highlights', payload);
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['admin-highlights'] });
//       toast({ title: 'Highlight created successfully' });
//       setIsDialogOpen(false);
//       resetForm();
//     },
//   });

//   // Update mutation
//   const updateMutation = useMutation({
//     mutationFn: async ({ id, data }: { id: string; data: any }) => {
//       const payload = {
//         ...data,
//         order_index: data.order_index ? parseInt(data.order_index) : null,
//       };
//       await axios.put(`/api/highlights/${id}`, payload);
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['admin-highlights'] });
//       toast({ title: 'Highlight updated successfully' });
//       setIsDialogOpen(false);
//       resetForm();
//     },
//   });

//   // Delete mutation
//   const deleteMutation = useMutation({
//     mutationFn: async (id: string) => {
//       await axios.delete(`/api/highlights/${id}`);
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['admin-highlights'] });
//       toast({ title: 'Highlight deleted successfully' });
//     },
//   });

//   const resetForm = () => {
//     setFormData({
//       title: '',
//       description: '',
//       icon: '',
//       order_index: '',
//     });
//     setEditingItem(null);
//   };

//   const handleEdit = (item: any) => {
//     setEditingItem(item);
//     setFormData({
//       title: item.title,
//       description: item.description || '',
//       icon: item.icon || '',
//       order_index: item.order_index?.toString() || '',
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
//       <title>Homepage Highlights - Admin</title>

//       <div className="space-y-6">
//         <div className="flex justify-between items-center">
//           <h1 className="text-3xl font-bold">Homepage Highlights</h1>

//           <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
//             <DialogTrigger asChild>
//               <Button onClick={resetForm}>
//                 <Plus className="mr-2 h-4 w-4" />
//                 Add Highlight
//               </Button>
//             </DialogTrigger>

//             <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
//               <DialogHeader>
//                 <DialogTitle>{editingItem ? 'Edit' : 'Add'} Highlight</DialogTitle>
//               </DialogHeader>

//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div>
//                   <Label htmlFor="title">Title *</Label>
//                   <Input
//                     id="title"
//                     value={formData.title}
//                     onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//                     required
//                   />
//                 </div>

//                 <div>
//                   <Label htmlFor="description">Description</Label>
//                   <Textarea
//                     id="description"
//                     value={formData.description}
//                     onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//                     rows={3}
//                   />
//                 </div>

//                 <div>
//                   <Label htmlFor="icon">Icon (Lucide icon name)</Label>
//                   <Input
//                     id="icon"
//                     value={formData.icon}
//                     onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
//                     placeholder="e.g., Sparkles, Star, Heart"
//                   />
//                 </div>

//                 <div>
//                   <Label htmlFor="order_index">Order Index</Label>
//                   <Input
//                     id="order_index"
//                     type="number"
//                     value={formData.order_index}
//                     onChange={(e) =>
//                       setFormData({ ...formData, order_index: e.target.value })
//                     }
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
//             <CardTitle>All Highlights</CardTitle>
//           </CardHeader>
//           <CardContent>
//             {isLoading ? (
//               <p>Loading...</p>
//             ) : (
//               <Table>
//                 <TableHeader>
//                   <TableRow>
//                     <TableHead>Order</TableHead>
//                     <TableHead>Title</TableHead>
//                     <TableHead>Icon</TableHead>
//                     <TableHead>Description</TableHead>
//                     <TableHead>Actions</TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   {highlights?.map((item: any) => (
//                     <TableRow key={item._id}>
//                       <TableCell>{item.order_index || 'N/A'}</TableCell>
//                       <TableCell className="font-medium">{item.title}</TableCell>
//                       <TableCell>{item.icon || 'N/A'}</TableCell>
//                       <TableCell className="max-w-md truncate">
//                         {item.description || '—'}
//                       </TableCell>
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



// import { useState } from 'react';
// import axios from 'axios';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Textarea } from '@/components/ui/textarea';
// import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
// import { useToast } from '@/hooks/use-toast';
// import { Plus, Pencil, Trash2 } from 'lucide-react';

// export default function AdminHighlights() {
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const [editingItem, setEditingItem] = useState<any>(null);
//   const { toast } = useToast();
//   const queryClient = useQueryClient();

//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     icon: '',
//     order_index: '',
//   });

//   // ✅ ✅ ✅ FIXED: Always returns an ARRAY now
//   const { data: highlights = [], isLoading } = useQuery({
//     queryKey: ['admin-highlights'],
//     queryFn: async () => {
//       const res = await axios.get('/api/highlights');
//       return res.data.data; // ✅ THIS FIX PREVENTS THE CRASH
//     },
//   });

//   // Create mutation
//   const createMutation = useMutation({
//     mutationFn: async (data: any) => {
//       const payload = {
//         ...data,
//         order_index: data.order_index ? parseInt(data.order_index) : null,
//       };
//       await axios.post('/api/highlights', payload);
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['admin-highlights'] });
//       toast({ title: 'Highlight created successfully' });
//       setIsDialogOpen(false);
//       resetForm();
//     },
//   });

//   // Update mutation
//   const updateMutation = useMutation({
//     mutationFn: async ({ id, data }: { id: string; data: any }) => {
//       const payload = {
//         ...data,
//         order_index: data.order_index ? parseInt(data.order_index) : null,
//       };
//       await axios.put(`/api/highlights/${id}`, payload);
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['admin-highlights'] });
//       toast({ title: 'Highlight updated successfully' });
//       setIsDialogOpen(false);
//       resetForm();
//     },
//   });

//   // Delete mutation
//   const deleteMutation = useMutation({
//     mutationFn: async (id: string) => {
//       await axios.delete(`/api/highlights/${id}`);
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['admin-highlights'] });
//       toast({ title: 'Highlight deleted successfully' });
//     },
//   });

//   const resetForm = () => {
//     setFormData({
//       title: '',
//       description: '',
//       icon: '',
//       order_index: '',
//     });
//     setEditingItem(null);
//   };

//   const handleEdit = (item: any) => {
//     setEditingItem(item);
//     setFormData({
//       title: item.title,
//       description: item.description || '',
//       icon: item.icon || '',
//       order_index: item.order_index?.toString() || '',
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
//       <title>Homepage Highlights - Admin</title>

//       <div className="space-y-6">
//         <div className="flex justify-between items-center">
//           <h1 className="text-3xl font-bold">Homepage Highlights</h1>

//           <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
//             <DialogTrigger asChild>
//               <Button onClick={resetForm}>
//                 <Plus className="mr-2 h-4 w-4" />
//                 Add Highlight
//               </Button>
//             </DialogTrigger>

//             <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
//               <DialogHeader>
//                 <DialogTitle>{editingItem ? 'Edit' : 'Add'} Highlight</DialogTitle>
//               </DialogHeader>

//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div>
//                   <Label htmlFor="title">Title *</Label>
//                   <Input
//                     id="title"
//                     value={formData.title}
//                     onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//                     required
//                   />
//                 </div>

//                 <div>
//                   <Label htmlFor="description">Description</Label>
//                   <Textarea
//                     id="description"
//                     value={formData.description}
//                     onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//                     rows={3}
//                   />
//                 </div>

//                 <div>
//                   <Label htmlFor="icon">Icon (Lucide icon name)</Label>
//                   <Input
//                     id="icon"
//                     value={formData.icon}
//                     onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
//                     placeholder="e.g., Sparkles, Star, Heart"
//                   />
//                 </div>

//                 <div>
//                   <Label htmlFor="order_index">Order Index</Label>
//                   <Input
//                     id="order_index"
//                     type="number"
//                     value={formData.order_index}
//                     onChange={(e) =>
//                       setFormData({ ...formData, order_index: e.target.value })
//                     }
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
//             <CardTitle>All Highlights</CardTitle>
//           </CardHeader>
//           <CardContent>
//             {isLoading ? (
//               <p>Loading...</p>
//             ) : (
//               <Table>
//                 <TableHeader>
//                   <TableRow>
//                     <TableHead>Order</TableHead>
//                     <TableHead>Title</TableHead>
//                     <TableHead>Icon</TableHead>
//                     <TableHead>Description</TableHead>
//                     <TableHead>Actions</TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   {highlights.map((item: any) => (
//                     <TableRow key={item._id}>
//                       <TableCell>{item.order_index || 'N/A'}</TableCell>
//                       <TableCell className="font-medium">{item.title}</TableCell>
//                       <TableCell>{item.icon || 'N/A'}</TableCell>
//                       <TableCell className="max-w-md truncate">
//                         {item.description || '—'}
//                       </TableCell>
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



import { useState } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';
import { Plus, Pencil, Trash2 } from 'lucide-react';

export default function AdminHighlights() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    icon: '',
    order_index: '',
  });

  // ✅ ✅ ✅ FIXED: Always returns an ARRAY now
  const { data: highlights = [], isLoading } = useQuery({
    queryKey: ['admin-highlights'],
    queryFn: async () => {
      const res = await axios.get('/api/highlights');
      return res.data.data; // ✅ THIS FIX PREVENTS THE CRASH
    },
  });

  // Create mutation
  const createMutation = useMutation({
    mutationFn: async (data: any) => {
      const payload = {
        ...data,
        order_index: data.order_index ? parseInt(data.order_index) : null,
      };
      await axios.post('/api/highlights', payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-highlights'] });
      toast({ title: 'Highlight created successfully' });
      setIsDialogOpen(false);
      resetForm();
    },
  });

  // Update mutation
  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: any }) => {
      const payload = {
        ...data,
        order_index: data.order_index ? parseInt(data.order_index) : null,
      };
      await axios.put(`/api/highlights/${id}`, payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-highlights'] });
      toast({ title: 'Highlight updated successfully' });
      setIsDialogOpen(false);
      resetForm();
    },
  });

  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      await axios.delete(`/api/highlights/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-highlights'] });
      toast({ title: 'Highlight deleted successfully' });
    },
  });

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      icon: '',
      order_index: '',
    });
    setEditingItem(null);
  };

  const handleEdit = (item: any) => {
    setEditingItem(item);
    setFormData({
      title: item.title,
      description: item.description || '',
      icon: item.icon || '',
      order_index: item.order_index?.toString() || '',
    });
    setIsDialogOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingItem) {
      updateMutation.mutate({ id: editingItem._id, data: formData });
    } else {
      createMutation.mutate(formData);
    }
  };

  return (
    <>
      <title>Homepage Highlights - Admin</title>

      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Homepage Highlights</h1>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={resetForm}>
                <Plus className="mr-2 h-4 w-4" />
                Add Highlight
              </Button>
            </DialogTrigger>

            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>{editingItem ? 'Edit' : 'Add'} Highlight</DialogTitle>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="title">Title *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="icon">Icon (Lucide icon name)</Label>
                  <Input
                    id="icon"
                    value={formData.icon}
                    onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                    placeholder="e.g., Sparkles, Star, Heart"
                  />
                </div>

                <div>
                  <Label htmlFor="order_index">Order Index</Label>
                  <Input
                    id="order_index"
                    type="number"
                    value={formData.order_index}
                    onChange={(e) =>
                      setFormData({ ...formData, order_index: e.target.value })
                    }
                  />
                </div>

                <div className="flex gap-2">
                  <Button type="submit">Save</Button>
                  <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                    Cancel
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Highlights</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Icon</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {highlights.map((item: any) => (
                    <TableRow key={item._id}>
                      <TableCell>{item.order_index || 'N/A'}</TableCell>
                      <TableCell className="font-medium">{item.title}</TableCell>
                      <TableCell>{item.icon || 'N/A'}</TableCell>
                      <TableCell className="max-w-md truncate">
                        {item.description || '—'}
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="icon" variant="ghost" onClick={() => handleEdit(item)}>
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => deleteMutation.mutate(item._id)}
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
