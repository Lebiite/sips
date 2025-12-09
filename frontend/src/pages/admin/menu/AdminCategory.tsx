// src/pages/admin/AdminCategory.tsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card"; // your components (keep if available)
import { Button } from "@/components/ui/button"; // optional - fallback to button classes if missing

// Simple Modal implemented with basic markup + Tailwind
function Modal({ open, onClose, title, children }: any) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative z-10 max-w-2xl w-full bg-white rounded shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-900">Close</button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default function AdminCategory() {
  const { slug } = useParams<{ slug: string }>();
  const queryClient = useQueryClient();

  const [showCreate, setShowCreate] = useState(false);
  const [editingItem, setEditingItem] = useState<any | null>(null);
  const [categoryId, setCategoryId] = useState<string>("");

  // fetch items for this category (your route: GET /api/menu/:slug)
  const { data, isLoading, error } = useQuery({
    queryKey: ["menu-items", slug],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/api/menu/${slug}`);
      if (!res.ok) throw new Error("Failed to load items");
      return res.json();
    },
    enabled: !!slug,
  });

  // fetch categories to auto-resolve categoryId when creating
  useEffect(() => {
    async function loadCategories() {
      try {
        const res = await fetch(`http://localhost:5000/api/categories`);
        if (!res.ok) return;
        const cats = await res.json();
        const found = cats.find((c: any) => c.slug === slug);
        if (found) setCategoryId(found._id);
      } catch (e) {
        // ignore
      }
    }
    loadCategories();
  }, [slug]);

  const items: any[] = Array.isArray(data) ? data : [];

  /* ----------------- MUTATIONS ----------------- */

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const res = await fetch(`http://localhost:5000/api/menu/items/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Delete failed");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["menu-items", slug] });
    },
  });

  const createMutation = useMutation({
    mutationFn: async (formData: FormData) => {
      const res = await fetch(`http://localhost:5000/api/menu/items`, {
        method: "POST",
        body: formData,
      });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Create failed");
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["menu-items", slug] });
      setShowCreate(false);
    },
  });

  const updateMutation = useMutation({
    mutationFn: async (formData: FormData) => {
      const id = formData.get("id") as string;
      const res = await fetch(`http://localhost:5000/api/menu/items/${id}`, {
        method: "PUT",
        body: formData,
      });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Update failed");
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["menu-items", slug] });
      setEditingItem(null);
    },
  });

  /* ----------------- UI ----------------- */

  if (isLoading) return <div className="p-10 text-center">Loading...</div>;
  if (error) return <div className="p-10 text-center">Failed to load</div>;

  return (
    <div className="py-12 px-6 min-h-screen bg-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">{(slug || "").replace("-", " ").toUpperCase()}</h1>
        <div>
          <button
            onClick={() => setShowCreate(true)}
            className="px-4 py-2 bg-green-600 text-white rounded shadow"
          >
            + Add Item
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {items.map((item: any) => (
          <Card key={item._id} className="shadow hover:shadow-lg transition">
            <CardContent className="p-4 space-y-3">
              {item.image_url ? (
                <img
                  src={`http://localhost:5000${item.image_url}`}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded"
                />
              ) : (
                <div className="w-full h-40 bg-gray-100 flex items-center justify-center text-gray-400 rounded">
                  No image
                </div>
              )}

              <div>
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-sm text-gray-500">{item.description}</p>
                <p className="font-bold mt-2">KES {item.price}</p>
              </div>

              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => setEditingItem(item)}
                  className="flex-1 bg-blue-600 text-white py-2 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() => {
                    if (!confirm("Delete this item?")) return;
                    deleteMutation.mutate(item._id);
                  }}
                  className="flex-1 bg-red-500 text-white py-2 rounded"
                >
                  Delete
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CREATE MODAL */}
      <Modal open={showCreate} onClose={() => setShowCreate(false)} title="Create Menu Item">
        <CreateForm
          defaultCategoryId={categoryId}
          onSubmit={(fd: FormData) => createMutation.mutate(fd)}
          onCancel={() => setShowCreate(false)}
        />
      </Modal>

      {/* EDIT MODAL */}
      <Modal open={!!editingItem} onClose={() => setEditingItem(null)} title="Edit Menu Item">
        {editingItem && (
          <EditForm
            item={editingItem}
            onSubmit={(fd: FormData) => updateMutation.mutate(fd)}
            onCancel={() => setEditingItem(null)}
          />
        )}
      </Modal>
    </div>
  );
}

/* ----------------- Create Form Component ----------------- */
function CreateForm({ defaultCategoryId, onSubmit, onCancel }: any) {
  const [file, setFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setSubmitting(true);
    const form = new FormData(e.target);
    if (defaultCategoryId) form.set("categoryId", defaultCategoryId);
    if (file) form.set("image", file);
    try {
      await onSubmit(form);
      e.target.reset();
    } catch (err) {
      alert(String(err));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input name="title" placeholder="Title" className="border p-2 w-full" required />
      <textarea name="description" placeholder="Description" className="border p-2 w-full" />
      <input name="price" placeholder="Price" type="number" className="border p-2 w-full" required />
      <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
      <div className="flex gap-2">
        <button type="submit" disabled={submitting} className="flex-1 bg-green-600 text-white py-2 rounded">
          {submitting ? "Creating..." : "Create"}
        </button>
        <button type="button" onClick={onCancel} className="flex-1 bg-gray-200 py-2 rounded">
          Cancel
        </button>
      </div>
    </form>
  );
}

/* ----------------- Edit Form Component ----------------- */
function EditForm({ item, onSubmit, onCancel }: any) {
  const [file, setFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setSubmitting(true);
    const form = new FormData(e.target);
    form.set("id", item._id);
    if (file) form.set("image", file);
    try {
      await onSubmit(form);
    } catch (err) {
      alert(String(err));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input name="title" defaultValue={item.title} placeholder="Title" className="border p-2 w-full" />
      <input name="price" defaultValue={item.price} type="number" className="border p-2 w-full" />
      <textarea name="description" defaultValue={item.description} className="border p-2 w-full" />
      <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
      <div className="flex gap-2">
        <button type="submit" disabled={submitting} className="flex-1 bg-blue-600 text-white py-2 rounded">
          {submitting ? "Saving..." : "Save"}
        </button>
        <button type="button" onClick={onCancel} className="flex-1 bg-gray-200 py-2 rounded">
          Cancel
        </button>
      </div>
    </form>
  );
}
