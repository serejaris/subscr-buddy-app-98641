import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { Subscription } from "@/pages/App";

interface AddSubscriptionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAdd: (subscription: Omit<Subscription, "id">) => void;
}

const colors = [
  { name: "Красный", value: "bg-red-500" },
  { name: "Синий", value: "bg-blue-500" },
  { name: "Зеленый", value: "bg-green-500" },
  { name: "Фиолетовый", value: "bg-purple-500" },
  { name: "Оранжевый", value: "bg-orange-500" },
  { name: "Розовый", value: "bg-pink-500" },
];

export const AddSubscriptionDialog = ({ open, onOpenChange, onAdd }: AddSubscriptionDialogProps) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    billingCycle: "monthly" as "monthly" | "yearly",
    nextBillingDate: "",
    category: "",
    color: "bg-blue-500",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({
      name: formData.name,
      price: parseFloat(formData.price),
      billingCycle: formData.billingCycle,
      nextBillingDate: formData.nextBillingDate,
      category: formData.category,
      color: formData.color,
    });
    setFormData({
      name: "",
      price: "",
      billingCycle: "monthly",
      nextBillingDate: "",
      category: "",
      color: "bg-blue-500",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl">Добавить подписку</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Название</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Netflix, Spotify..."
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="price">Цена (₽)</Label>
              <Input
                id="price"
                type="number"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                placeholder="599"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="billingCycle">Период</Label>
              <Select
                value={formData.billingCycle}
                onValueChange={(value: "monthly" | "yearly") =>
                  setFormData({ ...formData, billingCycle: value })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="monthly">Месяц</SelectItem>
                  <SelectItem value="yearly">Год</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="nextBillingDate">Следующий платеж</Label>
            <Input
              id="nextBillingDate"
              type="date"
              value={formData.nextBillingDate}
              onChange={(e) => setFormData({ ...formData, nextBillingDate: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Категория</Label>
            <Input
              id="category"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              placeholder="Развлечения, Музыка..."
              required
            />
          </div>

          <div className="space-y-2">
            <Label>Цвет</Label>
            <div className="grid grid-cols-6 gap-2">
              {colors.map((color) => (
                <button
                  key={color.value}
                  type="button"
                  onClick={() => setFormData({ ...formData, color: color.value })}
                  className={`w-full aspect-square rounded-lg ${color.value} ${
                    formData.color === color.value ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : ""
                  } transition-all duration-200 hover:scale-110`}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="flex-1">
              Отмена
            </Button>
            <Button type="submit" variant="hero" className="flex-1">
              Добавить
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
