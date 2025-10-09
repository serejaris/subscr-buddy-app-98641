import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2, Calendar } from "lucide-react";
import type { Subscription } from "@/pages/App";

interface SubscriptionListProps {
  subscriptions: Subscription[];
  onDelete: (id: string) => void;
}

export const SubscriptionList = ({ subscriptions, onDelete }: SubscriptionListProps) => {
  if (subscriptions.length === 0) {
    return (
      <Card className="p-12 text-center bg-gradient-card border-border">
        <p className="text-muted-foreground text-lg">
          У вас пока нет подписок. Добавьте первую!
        </p>
      </Card>
    );
  }

  return (
    <div className="grid gap-4">
      {subscriptions.map((subscription) => (
        <Card
          key={subscription.id}
          className="p-6 bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-1">
              <div className={`w-12 h-12 ${subscription.color} rounded-xl flex items-center justify-center text-white font-bold text-xl`}>
                {subscription.name.charAt(0)}
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{subscription.name}</h3>
                <p className="text-sm text-muted-foreground">{subscription.category}</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-right">
                <p className="text-2xl font-bold">{subscription.price} ₽</p>
                <p className="text-sm text-muted-foreground">
                  {subscription.billingCycle === "monthly" ? "в месяц" : "в год"}
                </p>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">
                  {new Date(subscription.nextBillingDate).toLocaleDateString("ru-RU")}
                </span>
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => onDelete(subscription.id)}
                className="text-destructive hover:text-destructive hover:bg-destructive/10"
              >
                <Trash2 className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
