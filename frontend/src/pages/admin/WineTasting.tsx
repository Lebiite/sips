// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Textarea } from '@/components/ui/textarea';
// import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
// import axios from 'axios';
// import { useToast } from '@/hooks/use-toast';
// import { Plus, Pencil, Trash2 } from 'lucide-react';

// export default function AdminWineTasting() {
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const [editingItem, setEditingItem] = useState<any>(null);
//   const { toast } = useToast();
//   const queryClient = useQueryClient();

//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     event_date: '',
//     max_participants: '',
//     price: '',
//     wines_featured: '',
//   });

//   // =============================
//   // GET EVENTS (MongoDB)
//   // =============================
//   const { data: events, isLoading } = useQuery({
//     queryKey: ['admin-wine-tasting'],
//     queryFn: async () => {
//       const res = await axios.get('/api/wine-tasting');
//       return res.data;
//     },
//   });

//   // =============================
//   // CREATE EVENT
//   // =============================
//   const createMutation = useMutation({
//     mutationFn: async (data: any) => {
//       const payload = {
//         ...data,
//         max_participants: data.max_participants ? parseInt(data.max_participants) : null,
//         price: data.price ? parseFloat(data.price) : null,
//         wines_featured: data.wines_featured
//           ? data.wines_featured.split(',').map((w: string) => w.trim())
//           : [],
//       };
//       await axios.post('/api/wine-tasting', payload);
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['admin-wine-tasting'] });
//       toast({ title: 'Wine tasting event created successfully' });
//       setIsDialogOpen(false);
//       resetForm();
//     },
//   });

//   // =============================
//   // UPDATE EVENT
//   // =============================
//   const updateMutation = useMutation({
//     mutationFn: async ({ id, data }: { id: string; data: any }) => {
//       const payload = {
//         ...data,
//         max_participants: data.max_participants ? parseInt(data.max_participants) : null,
//         price: data.price ? parseFloat(data.price) : null,
//         wines_featured: data.wines_featured
//           ? data.wines_featured.split(',').map((w: string) => w.trim())
//           : [],
//       };
//       await axios.put(`/api/wine-tasting/${id}`, payload);
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['admin-wine-tasting'] });
//       toast({ title: 'Wine tasting event updated successfully' });
//       setIsDialogOpen(false);
//       resetForm();
//     },
//   });

//   // =============================
//   // DELETE EVENT
//   // =============================
//   const deleteMutation = useMutation({
//     mutationFn: async (id: string) => {
//       await axios.delete(`/api/wine-tasting/${id}`);
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['admin-wine-tasting'] });
//       toast({ title: 'Wine tasting event deleted successfully' });
//     },
//   });

//   // =============================
//   // HELPERS
//   // =============================
//   const resetForm = () => {
//     setFormData({
//       title: '',
//       description: '',
//       event_date: '',
//       max_participants: '',
//       price: '',
//       wines_featured: '',
//     });
//     setEditingItem(null);
//   };

//   const handleEdit = (item: any) => {
//     setEditingItem(item);
//     setFormData({
//       title: item.title,
//       description: item.description || '',
//       event_date: item.event_date?.split('T')[0] || '',
//       max_participants: item.max_participants?.toString() || '',
//       price: item.price?.toString() || '',
//       wines_featured: item.wines_featured?.join(', ') || '',
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
//       <title>Wine Tasting - Admin</title>

//       <div className="space-y-6">
//         <div className="flex justify-between items-center">
//           <h1 className="text-3xl font-bold">Wine Tasting Events</h1>

//           <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
//             <DialogTrigger asChild>
//               <Button onClick={resetForm}>
//                 <Plus className="mr-2 h-4 w-4" />
//                 Add Event
//               </Button>
//             </DialogTrigger>

//             <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
//               <DialogHeader>
//                 <DialogTitle>{editingItem ? 'Edit' : 'Add'} Wine Tasting Event</DialogTitle>
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
//                   <Label htmlFor="event_date">Event Date *</Label>
//                   <Input
//                     id="event_date"
//                     type="date"
//                     value={formData.event_date}
//                     onChange={(e) => setFormData({ ...formData, event_date: e.target.value })}
//                     required
//                   />
//                 </div>

//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <Label htmlFor="max_participants">Max Participants</Label>
//                     <Input
//                       id="max_participants"
//                       type="number"
//                       value={formData.max_participants}
//                       onChange={(e) => setFormData({ ...formData, max_participants: e.target.value })}
//                     />
//                   </div>

//                   <div>
//                     <Label htmlFor="price">Price</Label>
//                     <Input
//                       id="price"
//                       type="number"
//                       step="0.01"
//                       value={formData.price}
//                       onChange={(e) => setFormData({ ...formData, price: e.target.value })}
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <Label htmlFor="wines_featured">Wines Featured (comma-separated)</Label>
//                   <Input
//                     id="wines_featured"
//                     value={formData.wines_featured}
//                     onChange={(e) => setFormData({ ...formData, wines_featured: e.target.value })}
//                     placeholder="Chardonnay, Pinot Noir, Merlot"
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
//             <CardTitle>All Wine Tasting Events</CardTitle>
//           </CardHeader>
//           <CardContent>
//             {isLoading ? (
//               <p>Loading...</p>
//             ) : (
//               <Table>
//                 <TableHeader>
//                   <TableRow>
//                     <TableHead>Title</TableHead>
//                     <TableHead>Date</TableHead>
//                     <TableHead>Price</TableHead>
//                     <TableHead>Max Participants</TableHead>
//                     <TableHead>Actions</TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   {events?.map((item) => (
//                     <TableRow key={item._id}>
//                       <TableCell className="font-medium">{item.title}</TableCell>
//                       <TableCell>{new Date(item.event_date).toLocaleDateString()}</TableCell>
//                       <TableCell>{item.price ? `$${Number(item.price).toFixed(2)}` : 'N/A'}</TableCell>
//                       <TableCell>{item.max_participants || 'N/A'}</TableCell>
//                       <TableCell>
//                         <div className="flex gap-2">
//                           <Button size="icon" variant="ghost" onClick={() => handleEdit(item)}>
//                             <Pencil className="h-4 w-4" />
//                           </Button>
//                           <Button size="icon" variant="ghost" onClick={() => deleteMutation.mutate(item._id)}>
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
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Textarea } from '@/components/ui/textarea';
// import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
// import axios from 'axios';
// import { useToast } from '@/hooks/use-toast';
// import { Plus, Pencil, Trash2 } from 'lucide-react';

// export default function AdminWineTasting() {
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const [editingItem, setEditingItem] = useState<any>(null);
//   const { toast } = useToast();
//   const queryClient = useQueryClient();

//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     event_date: '',
//     max_participants: '',
//     price: '',
//     wines_featured: '',
//   });

//   // =============================
//   // ✅ GET EVENTS (BULLETPROOF)
//   // =============================
//   const { data: events = [], isLoading, isError } = useQuery({
//     queryKey: ['admin-wine-tasting'],
//     queryFn: async () => {
//       const res = await axios.get('/api/wine-tasting');

//       // ✅ FORCE ARRAY NO MATTER WHAT
//       if (Array.isArray(res.data)) return res.data;
//       if (Array.isArray(res.data?.data)) return res.data.data;

//       return [];
//     },
//   });

//   // =============================
//   // ✅ CREATE EVENT
//   // =============================
//   const createMutation = useMutation({
//     mutationFn: async (data: any) => {
//       const payload = {
//         ...data,
//         max_participants: data.max_participants ? parseInt(data.max_participants) : null,
//         price: data.price ? parseFloat(data.price) : null,
//         wines_featured: data.wines_featured
//           ? data.wines_featured.split(',').map((w: string) => w.trim())
//           : [],
//       };
//       await axios.post('/api/wine-tasting', payload);
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['admin-wine-tasting'] });
//       toast({ title: 'Wine tasting event created successfully' });
//       setIsDialogOpen(false);
//       resetForm();
//     },
//   });

//   // =============================
//   // ✅ UPDATE EVENT
//   // =============================
//   const updateMutation = useMutation({
//     mutationFn: async ({ id, data }: { id: string; data: any }) => {
//       const payload = {
//         ...data,
//         max_participants: data.max_participants ? parseInt(data.max_participants) : null,
//         price: data.price ? parseFloat(data.price) : null,
//         wines_featured: data.wines_featured
//           ? data.wines_featured.split(',').map((w: string) => w.trim())
//           : [],
//       };
//       await axios.put(`/api/wine-tasting/${id}`, payload);
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['admin-wine-tasting'] });
//       toast({ title: 'Wine tasting event updated successfully' });
//       setIsDialogOpen(false);
//       resetForm();
//     },
//   });

//   // =============================
//   // ✅ DELETE EVENT
//   // =============================
//   const deleteMutation = useMutation({
//     mutationFn: async (id: string) => {
//       await axios.delete(`/api/wine-tasting/${id}`);
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['admin-wine-tasting'] });
//       toast({ title: 'Wine tasting event deleted successfully' });
//     },
//   });

//   // =============================
//   // ✅ HELPERS
//   // =============================
//   const resetForm = () => {
//     setFormData({
//       title: '',
//       description: '',
//       event_date: '',
//       max_participants: '',
//       price: '',
//       wines_featured: '',
//     });
//     setEditingItem(null);
//   };

//   const handleEdit = (item: any) => {
//     setEditingItem(item);
//     setFormData({
//       title: item.title || '',
//       description: item.description || '',
//       event_date: item.event_date?.split('T')[0] || '',
//       max_participants: item.max_participants?.toString() || '',
//       price: item.price?.toString() || '',
//       wines_featured: item.wines_featured?.join(', ') || '',
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
//       <title>Wine Tasting - Admin</title>

//       <div className="space-y-6">
//         <div className="flex justify-between items-center">
//           <h1 className="text-3xl font-bold">Wine Tasting Events</h1>

//           <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
//             <DialogTrigger asChild>
//               <Button onClick={resetForm}>
//                 <Plus className="mr-2 h-4 w-4" />
//                 Add Event
//               </Button>
//             </DialogTrigger>

//             <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
//               <DialogHeader>
//                 <DialogTitle>{editingItem ? 'Edit' : 'Add'} Wine Tasting Event</DialogTitle>
//               </DialogHeader>

//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div>
//                   <Label>Title *</Label>
//                   <Input value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} required />
//                 </div>

//                 <div>
//                   <Label>Event Date *</Label>
//                   <Input type="date" value={formData.event_date} onChange={(e) => setFormData({ ...formData, event_date: e.target.value })} required />
//                 </div>

//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <Label>Max Participants</Label>
//                     <Input type="number" value={formData.max_participants} onChange={(e) => setFormData({ ...formData, max_participants: e.target.value })} />
//                   </div>

//                   <div>
//                     <Label>Price</Label>
//                     <Input type="number" step="0.01" value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} />
//                   </div>
//                 </div>

//                 <div>
//                   <Label>Wines Featured</Label>
//                   <Input value={formData.wines_featured} onChange={(e) => setFormData({ ...formData, wines_featured: e.target.value })} />
//                 </div>

//                 <div>
//                   <Label>Description</Label>
//                   <Textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
//                 </div>

//                 <div className="flex gap-2">
//                   <Button type="submit">Save</Button>
//                   <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
//                 </div>
//               </form>
//             </DialogContent>
//           </Dialog>
//         </div>

//         <Card>
//           <CardHeader>
//             <CardTitle>All Wine Tasting Events</CardTitle>
//           </CardHeader>
//           <CardContent>
//             {isLoading ? (
//               <p>Loading...</p>
//             ) : isError ? (
//               <p className="text-red-500">Failed to load events.</p>
//             ) : (
//               <Table>
//                 <TableHeader>
//                   <TableRow>
//                     <TableHead>Title</TableHead>
//                     <TableHead>Date</TableHead>
//                     <TableHead>Price</TableHead>
//                     <TableHead>Max Participants</TableHead>
//                     <TableHead>Actions</TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   {Array.isArray(events) && events.length > 0 ? (
//                     events.map((item: any) => (
//                       <TableRow key={item._id}>
//                         <TableCell>{item.title}</TableCell>
//                         <TableCell>{new Date(item.event_date).toLocaleDateString()}</TableCell>
//                         <TableCell>{item.price ? `$${Number(item.price).toFixed(2)}` : 'N/A'}</TableCell>
//                         <TableCell>{item.max_participants || 'N/A'}</TableCell>
//                         <TableCell>
//                           <div className="flex gap-2">
//                             <Button size="icon" variant="ghost" onClick={() => handleEdit(item)}>
//                               <Pencil className="h-4 w-4" />
//                             </Button>
//                             <Button size="icon" variant="ghost" onClick={() => deleteMutation.mutate(item._id)}>
//                               <Trash2 className="h-4 w-4" />
//                             </Button>
//                           </div>
//                         </TableCell>
//                       </TableRow>
//                     ))
//                   ) : (
//                     <TableRow>
//                       <TableCell colSpan={5} className="text-center">
//                         No wine tasting events found.
//                       </TableCell>
//                     </TableRow>
//                   )}
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
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useToast } from '@/hooks/use-toast';
import { Plus, Pencil, Trash2 } from 'lucide-react';

const API = 'http://localhost:5000'; // ✅ ✅ ✅ FIXED

export default function AdminWineTasting() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    event_date: '',
    max_participants: '',
    price: '',
    wines_featured: '',
  });

  // =============================
  // ✅ GET EVENTS
  // =============================
  const { data: events = [], isLoading, isError } = useQuery({
    queryKey: ['admin-wine-tasting'],
    queryFn: async () => {
      const res = await axios.get(`${API}/api/wine-tasting`);
      return Array.isArray(res.data) ? res.data : [];
    },
  });

  // =============================
  // ✅ CREATE EVENT
  // =============================
  const createMutation = useMutation({
    mutationFn: async (data: any) => {
      const payload = {
        ...data,
        max_participants: data.max_participants ? parseInt(data.max_participants) : null,
        price: data.price ? parseFloat(data.price) : null,
        wines_featured: data.wines_featured
          ? data.wines_featured.split(',').map((w: string) => w.trim())
          : [],
      };

      await axios.post(`${API}/api/wine-tasting`, payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-wine-tasting'] });
      toast({ title: 'Wine tasting event created successfully' });
      setIsDialogOpen(false);
      resetForm();
    },
  });

  // =============================
  // ✅ UPDATE EVENT
  // =============================
  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: any }) => {
      const payload = {
        ...data,
        max_participants: data.max_participants ? parseInt(data.max_participants) : null,
        price: data.price ? parseFloat(data.price) : null,
        wines_featured: data.wines_featured
          ? data.wines_featured.split(',').map((w: string) => w.trim())
          : [],
      };

      await axios.put(`${API}/api/wine-tasting/${id}`, payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-wine-tasting'] });
      toast({ title: 'Wine tasting event updated successfully' });
      setIsDialogOpen(false);
      resetForm();
    },
  });

  // =============================
  // ✅ DELETE EVENT
  // =============================
  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      await axios.delete(`${API}/api/wine-tasting/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-wine-tasting'] });
      toast({ title: 'Wine tasting event deleted successfully' });
    },
  });

  // =============================
  // ✅ HELPERS
  // =============================
  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      event_date: '',
      max_participants: '',
      price: '',
      wines_featured: '',
    });
    setEditingItem(null);
  };

  const handleEdit = (item: any) => {
    setEditingItem(item);
    setFormData({
      title: item.title || '',
      description: item.description || '',
      event_date: item.event_date?.split('T')[0] || '',
      max_participants: item.max_participants?.toString() || '',
      price: item.price?.toString() || '',
      wines_featured: item.wines_featured?.join(', ') || '',
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
      <title>Wine Tasting - Admin</title>

      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Wine Tasting Events</h1>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={resetForm}>
                <Plus className="mr-2 h-4 w-4" />
                Add Event
              </Button>
            </DialogTrigger>

            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>{editingItem ? 'Edit' : 'Add'} Wine Tasting Event</DialogTitle>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label>Title *</Label>
                  <Input value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} required />
                </div>

                <div>
                  <Label>Event Date *</Label>
                  <Input type="date" value={formData.event_date} onChange={(e) => setFormData({ ...formData, event_date: e.target.value })} required />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Max Participants</Label>
                    <Input type="number" value={formData.max_participants} onChange={(e) => setFormData({ ...formData, max_participants: e.target.value })} />
                  </div>

                  <div>
                    <Label>Price</Label>
                    <Input type="number" step="0.01" value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} />
                  </div>
                </div>

                <div>
                  <Label>Wines Featured</Label>
                  <Input value={formData.wines_featured} onChange={(e) => setFormData({ ...formData, wines_featured: e.target.value })} />
                </div>

                <div>
                  <Label>Description</Label>
                  <Textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
                </div>

                <div className="flex gap-2">
                  <Button type="submit">Save</Button>
                  <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Wine Tasting Events</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <p>Loading...</p>
            ) : isError ? (
              <p className="text-red-500">Failed to load events.</p>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Max Participants</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {events.length > 0 ? (
                    events.map((item: any) => (
                      <TableRow key={item._id}>
                        <TableCell>{item.title}</TableCell>
                        <TableCell>{new Date(item.event_date).toLocaleDateString()}</TableCell>
                        <TableCell>{item.price ? `$${Number(item.price).toFixed(2)}` : 'N/A'}</TableCell>
                        <TableCell>{item.max_participants || 'N/A'}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button size="icon" variant="ghost" onClick={() => handleEdit(item)}>
                              <Pencil className="h-4 w-4" />
                            </Button>
                            <Button size="icon" variant="ghost" onClick={() => deleteMutation.mutate(item._id)}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center">
                        No wine tasting events found.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
