import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

export default function Checkout() {
  const { cart, getTotalPrice, clearCart } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [orderType, setOrderType] = useState("dine-in");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [tableNumber, setTableNumber] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    const payload = {
      items: cart.map((item) => ({
        name: item.title,
        price: Number(item.price),
        quantity: Number(item.quantity),
        image: item.image_url || null,
      })),
      totalPrice: getTotalPrice(),
      customer: {
        firstName: customerName,
        phone: customerPhone,
      },
      orderType,
      tableNumber: orderType === "dine-in" ? tableNumber : null,
    };

    try {
      const res = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Order failed");
      }

      toast({ title: "Order Successful", description: "Your order is now placed." });

      clearCart();
      navigate("/");
    } catch (err: any) {
      toast({
        title: "Order Failed",
        description: err.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0) {
    return (
      <Layout>
        <div className="text-center p-20">
          <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
          <Button asChild><a href="/menu">Go to Menu</a></Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8">Checkout</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader><CardTitle>Order Information</CardTitle></CardHeader>

              <CardContent>
                <form className="space-y-5" onSubmit={handleSubmit}>

                  <div>
                    <Label>Full Name *</Label>
                    <Input
                      placeholder="Enter your full name"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label>Phone Number *</Label>
                    <Input
                      placeholder="e.g. 0712345678"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label>Order Type *</Label>
                    <RadioGroup
                      value={orderType}
                      onValueChange={setOrderType}
                      className="flex space-x-6"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="dine-in" id="dinein" />
                        <Label htmlFor="dinein">Dine-In</Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="takeaway" id="takeaway" />
                        <Label htmlFor="takeaway">Takeaway</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {orderType === "dine-in" && (
                    <div>
                      <Label>Table Number *</Label>
                      <Input
                        placeholder="Enter table number"
                        value={tableNumber}
                        onChange={(e) => setTableNumber(e.target.value)}
                        required
                      />
                    </div>
                  )}

                  <Button disabled={loading} type="submit" className="w-full">
                    {loading ? "Placing Order..." : "Place Order"}
                  </Button>

                </form>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader><CardTitle>Order Summary</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span>{item.title} × {item.quantity}</span>
                    <span>KES {(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <div className="pt-4 border-t flex justify-between font-bold">
                  <span>Total</span>
                  <span>KES {getTotalPrice().toFixed(2)}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
