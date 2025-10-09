import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, TrendingUp } from "lucide-react";
import { SubscriptionList } from "@/components/SubscriptionList";
import { AddSubscriptionDialog } from "@/components/AddSubscriptionDialog";
import { StatsCard } from "@/components/StatsCard";

export interface Subscription {
  id: string;
  name: string;
  price: number;
  billingCycle: "monthly" | "yearly";
  nextBillingDate: string;
  category: string;
  color: string;
}

const AppPage = () => {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([
    {
      id: "1",
      name: "Netflix",
      price: 599,
      billingCycle: "monthly",
      nextBillingDate: "2025-11-15",
      category: "Развлечения",
      color: "bg-red-500",
    },
    {
      id: "2",
      name: "Spotify",
      price: 169,
      billingCycle: "monthly",
      nextBillingDate: "2025-11-10",
      category: "Музыка",
      color: "bg-green-500",
    },
    {
      id: "3",
      name: "YouTube Premium",
      price: 199,
      billingCycle: "monthly",
      nextBillingDate: "2025-11-20",
      category: "Развлечения",
      color: "bg-red-600",
    },
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddSubscription = (subscription: Omit<Subscription, "id">) => {
    const newSubscription = {
      ...subscription,
      id: Date.now().toString(),
    };
    setSubscriptions([...subscriptions, newSubscription]);
    setIsDialogOpen(false);
  };

  const handleDeleteSubscription = (id: string) => {
    setSubscriptions(subscriptions.filter((sub) => sub.id !== id));
  };

  const totalMonthly = subscriptions
    .filter((sub) => sub.billingCycle === "monthly")
    .reduce((sum, sub) => sum + sub.price, 0);

  const totalYearly = subscriptions
    .filter((sub) => sub.billingCycle === "yearly")
    .reduce((sum, sub) => sum + sub.price, 0);

  const totalCost = totalMonthly + totalYearly / 12;

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="container max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-4xl font-bold mb-2">Мои подписки</h1>
            <p className="text-muted-foreground">
              Управляйте всеми подписками в одном месте
            </p>
          </div>
          <Button onClick={() => setIsDialogOpen(true)} variant="hero" size="lg">
            <Plus className="mr-2" />
            Добавить подписку
          </Button>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6">
          <StatsCard
            title="Всего подписок"
            value={subscriptions.length.toString()}
            icon={<TrendingUp className="w-5 h-5" />}
          />
          <StatsCard
            title="Ежемесячно"
            value={`${totalMonthly.toFixed(0)} ₽`}
            icon={<TrendingUp className="w-5 h-5" />}
            trend="+12% от прошлого месяца"
          />
          <StatsCard
            title="В среднем за месяц"
            value={`${totalCost.toFixed(0)} ₽`}
            icon={<TrendingUp className="w-5 h-5" />}
          />
        </div>

        {/* Subscriptions List */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Активные подписки</h2>
          <SubscriptionList
            subscriptions={subscriptions}
            onDelete={handleDeleteSubscription}
          />
        </div>

        {/* Add Subscription Dialog */}
        <AddSubscriptionDialog
          open={isDialogOpen}
          onOpenChange={setIsDialogOpen}
          onAdd={handleAddSubscription}
        />
      </div>
    </div>
  );
};

export default AppPage;
