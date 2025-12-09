// import { useState } from 'react';
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

// export default function AdminWaterAerobics() {
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const [editingItem, setEditingItem] = useState<any>(null);
//   const { toast } = useToast();
//   const queryClient = useQueryClient();

//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     schedule: '',
//     instructor: '',
//     max_participants: '',
//   });

//   // ================================
//   // FETCH ALL WATER AEROBICS ITEMS
//   // ================================
//   const { data: schedules, isLoading } = useQuery({
//     queryKey: ['admin-water-aerobics'],
//     queryFn: async () => {
//       const res = await fetch('/api/water-aerobics');
//       if (!res.ok) throw new Error('Failed to load water aerobics');
//       return res.json();
//     },
//   });

//   // ================================
//   // CREATE NEW ITEM
//   // ================================
//   const createMutation = useMutation({
//     mutationFn: async (data: any) => {
//       const payload = {
//         ...data,
//         max_participants: data.max_participants ? parseInt(data.max_participants) : null,
//       };

//       const res = await fetch('/api/water-aerobics', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(payload),
//       });

//       if (!res.ok) throw new Error('Failed to create item');
//       return res.json();
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['admin-water-aerobics'] });
//       toast({ title: 'Water aerobics schedule created successfully' });
//       setIsDialogOpen(false);
//       resetForm();
//     },
//   });

//   // ================================
//   // UPDATE ITEM
//   // ================================
//   const updateMutation = useMutation({
//     mutationFn: async ({ id, data }: { id: string; data: any }) => {
//       const payload = {
//         ...data,
//         max_participants: data.max_participants ? parseInt(data.max_participants) : null,
//       };

//       const res = await fetch(`/api/water-aerobics/${id}`, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(payload),
//       });

//       if (!res.ok) throw new Error('Failed to update item');
//       return res.json();
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['admin-water-aerobics'] });
//       toast({ title: 'Water aerobics schedule updated successfully' });
//       setIsDialogOpen(false);
//       resetForm();
//     },
//   });

//   // ================================
//   // DELETE ITEM
//   // ================================
//   const deleteMutation = useMutation({
//     mutationFn: async (id: string) => {
//       const res = await fetch(`/api/water-aerobics/${id}`, {
//         method: 'DELETE',
//       });
//       if (!res.ok) throw new Error('Failed to delete item');
//       return res.json();
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['admin-water-aerobics'] });
//       toast({ title: 'Water aerobobics schedule deleted successfully' });
//     },
//   });

//   // ================================
//   // FORM HELPERS
//   // ================================
//   const resetForm = () => {
//     setFormData({
//       title: '',
//       description: '',
//       schedule: '',
//       instructor: '',
//       max_participants: '',
//     });
//     setEditingItem(null);
//   };

//   const handleEdit = (item: any) => {
//     setEditingItem(item);
//     setFormData({
//       title: item.title,
//       description: item.description || '',
//       schedule: item.schedule,
//       instructor: item.instructor || '',
//       max_participants: item.max_participants?.toString() || '',
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
//       <title>Water Aerobics - Admin</title>

//       <div className="space-y-6">
//         <div className="flex justify-between items-center">
//           <h1 className="text-3xl font-bold">Water Aerobics Schedules</h1>

//           <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
//             <DialogTrigger asChild>
//               <Button onClick={resetForm}>
//                 <Plus className="mr-2 h-4 w-4" />
//                 Add Schedule
//               </Button>
//             </DialogTrigger>

//             <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
//               <DialogHeader>
//                 <DialogTitle>{editingItem ? 'Edit' : 'Add'} Water Aerobics Schedule</DialogTitle>
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
//                   <Label htmlFor="schedule">Schedule *</Label>
//                   <Input
//                     id="schedule"
//                     value={formData.schedule}
//                     onChange={(e) => setFormData({ ...formData, schedule: e.target.value })}
//                     placeholder="e.g., Tue, Thu 9:00 AM"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <Label htmlFor="instructor">Instructor</Label>
//                   <Input
//                     id="instructor"
//                     value={formData.instructor}
//                     onChange={(e) => setFormData({ ...formData, instructor: e.target.value })}
//                   />
//                 </div>

//                 <div>
//                   <Label htmlFor="max_participants">Max Participants</Label>
//                   <Input
//                     id="max_participants"
//                     type="number"
//                     value={formData.max_participants}
//                     onChange={(e) =>
//                       setFormData({ ...formData, max_participants: e.target.value })
//                     }
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
//             <CardTitle>All Water Aerobics Schedules</CardTitle>
//           </CardHeader>
//           <CardContent>
//             {isLoading ? (
//               <p>Loading...</p>
//             ) : (
//               <Table>
//                 <TableHeader>
//                   <TableRow>
//                     <TableHead>Title</TableHead>
//                     <TableHead>Schedule</TableHead>
//                     <TableHead>Instructor</TableHead>
//                     <TableHead>Max Participants</TableHead>
//                     <TableHead>Actions</TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   {schedules?.map((item: any) => (
//                     <TableRow key={item._id}>
//                       <TableCell className="font-medium">{item.title}</TableCell>
//                       <TableCell>{item.schedule}</TableCell>
//                       <TableCell>{item.instructor || 'N/A'}</TableCell>
//                       <TableCell>{item.max_participants || 'N/A'}</TableCell>
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
import { Plus, Pencil, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function AdminWaterAerobics() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    schedule: '',
    instructor: '',
    max_participants: '',
  });

  // ✅ FETCH
  const { data: schedules, isLoading } = useQuery({
    queryKey: ['admin-water-aerobics'],
    queryFn: async () => {
      const res = await axios.get('http://localhost:5000/api/water-aerobics');
      return res.data;
    },
  });

  // ✅ CREATE
  const createMutation = useMutation({
    mutationFn: async (data: any) => {
      const payload = {
        ...data,
        max_participants: data.max_participants ? parseInt(data.max_participants) : null,
      };

      await axios.post('http://localhost:5000/api/water-aerobics', payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-water-aerobics'] });
      toast({ title: 'Water aerobics created successfully' });
      setIsDialogOpen(false);
      resetForm();
    },
  });

  // ✅ UPDATE
  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: any }) => {
      const payload = {
        ...data,
        max_participants: data.max_participants ? parseInt(data.max_participants) : null,
      };

      await axios.put(`http://localhost:5000/api/water-aerobics/${id}`, payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-water-aerobics'] });
      toast({ title: 'Water aerobics updated successfully' });
      setIsDialogOpen(false);
      resetForm();
    },
  });

  // ✅ DELETE
  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      await axios.delete(`http://localhost:5000/api/water-aerobics/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-water-aerobics'] });
      toast({ title: 'Water aerobics deleted successfully' });
    },
  });

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      schedule: '',
      instructor: '',
      max_participants: '',
    });
    setEditingItem(null);
  };

  const handleEdit = (item: any) => {
    setEditingItem(item);
    setFormData({
      title: item.title,
      description: item.description || '',
      schedule: item.schedule,
      instructor: item.instructor || '',
      max_participants: item.max_participants?.toString() || '',
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
      <title>Water Aerobics - Admin</title>

      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Water Aerobics Schedules</h1>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={resetForm}>
                <Plus className="mr-2 h-4 w-4" />
                Add Schedule
              </Button>
            </DialogTrigger>

            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>{editingItem ? 'Edit' : 'Add'} Water Aerobics</DialogTitle>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label>Title *</Label>
                  <Input value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} required />
                </div>

                <div>
                  <Label>Schedule *</Label>
                  <Input value={formData.schedule} onChange={(e) => setFormData({ ...formData, schedule: e.target.value })} required />
                </div>

                <div>
                  <Label>Instructor</Label>
                  <Input value={formData.instructor} onChange={(e) => setFormData({ ...formData, instructor: e.target.value })} />
                </div>

                <div>
                  <Label>Max Participants</Label>
                  <Input type="number" value={formData.max_participants} onChange={(e) => setFormData({ ...formData, max_participants: e.target.value })} />
                </div>

                <div>
                  <Label>Description</Label>
                  <Textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
                </div>

                <Button type="submit">Save</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Water Aerobics</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? 'Loading...' : (
              <Table>
                <TableBody>
                  {schedules?.map((item: any) => (
                    <TableRow key={item._id}>
                      <TableCell>{item.title}</TableCell>
                      <TableCell>{item.schedule}</TableCell>
                      <TableCell>{item.instructor || 'N/A'}</TableCell>
                      <TableCell>
                        <Button onClick={() => handleEdit(item)} size="icon" variant="ghost"><Pencil /></Button>
                        <Button onClick={() => deleteMutation.mutate(item._id)} size="icon" variant="ghost"><Trash2 /></Button>
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
