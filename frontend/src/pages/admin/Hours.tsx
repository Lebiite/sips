import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';
import { Plus, Pencil, Trash2 } from 'lucide-react';

export default function AdminHours() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const [formData, setFormData] = useState({
    day_of_week: "",
    open_time: "",
    close_time: "",
    is_closed: false,
  });

  // FETCH HOURS (MongoDB)
  const { data: hours, isLoading } = useQuery({
    queryKey: ['admin-hours'],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/api/hours");
      if (!res.ok) throw new Error("Failed to load hours");
      return res.json();
    }
  });

  // CREATE
  const createMutation = useMutation({
    mutationFn: async (payload: any) => {
      const res = await fetch("http://localhost:5000/api/hours", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed to create entry");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-hours'] });
      toast({ title: "Opening hours created successfully" });
      setIsDialogOpen(false);
      resetForm();
    }
  });

  // UPDATE
  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: any) => {
      const res = await fetch(`http://localhost:5000/api/hours/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to update entry");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-hours'] });
      toast({ title: "Opening hours updated" });
      setIsDialogOpen(false);
      resetForm();
    }
  });

  // DELETE
  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const res = await fetch(`http://localhost:5000/api/hours/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete entry");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-hours'] });
      toast({ title: "Opening hours deleted" });
    }
  });

  const resetForm = () => {
    setFormData({
      day_of_week: "",
      open_time: "",
      close_time: "",
      is_closed: false,
    });
    setEditingItem(null);
  };

  const handleEdit = (item: any) => {
    setEditingItem(item);
    setFormData({
      day_of_week: item.day_of_week,
      open_time: item.open_time || "",
      close_time: item.close_time || "",
      is_closed: item.is_closed,
    });
    setIsDialogOpen(true);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (editingItem) {
      updateMutation.mutate({ id: editingItem._id, data: formData });
    } else {
      createMutation.mutate(formData);
    }
  };

  return (
    <>
      <title>Opening Hours - Admin</title>

      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Opening Hours</h1>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={resetForm}>
                <Plus className="mr-2 h-4 w-4" /> Add Hours
              </Button>
            </DialogTrigger>

            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>{editingItem ? "Edit" : "Add"} Opening Hours</DialogTitle>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label>Day of Week *</Label>
                  <Input value={formData.day_of_week}
                    onChange={(e) => setFormData({ ...formData, day_of_week: e.target.value })}
                    required />
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    checked={formData.is_closed}
                    onCheckedChange={(v) => setFormData({ ...formData, is_closed: v })}
                  />
                  <Label>Closed</Label>
                </div>

                {!formData.is_closed && (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Open Time</Label>
                      <Input type="time" value={formData.open_time}
                        onChange={(e) => setFormData({ ...formData, open_time: e.target.value })} />
                    </div>

                    <div>
                      <Label>Close Time</Label>
                      <Input type="time" value={formData.close_time}
                        onChange={(e) => setFormData({ ...formData, close_time: e.target.value })} />
                    </div>
                  </div>
                )}

                <div className="flex gap-2">
                  <Button type="submit">Save</Button>
                  <Button variant="outline" type="button" onClick={() => setIsDialogOpen(false)}>
                    Cancel
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Opening Hours</CardTitle>
          </CardHeader>

          <CardContent>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Day</TableHead>
                    <TableHead>Open</TableHead>
                    <TableHead>Close</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {hours?.map((item: any) => (
                    <TableRow key={item._id}>
                      <TableCell>{item.day_of_week}</TableCell>
                      <TableCell>{item.is_closed ? "-" : item.open_time}</TableCell>
                      <TableCell>{item.is_closed ? "-" : item.close_time}</TableCell>

                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${item.is_closed ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"}`}>
                          {item.is_closed ? "Closed" : "Open"}
                        </span>
                      </TableCell>

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
