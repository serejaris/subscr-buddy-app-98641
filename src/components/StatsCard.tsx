import { Card } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend?: string;
}

export const StatsCard = ({ title, value, icon, trend }: StatsCardProps) => {
  return (
    <Card className="p-6 bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-muted-foreground font-medium">{title}</p>
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
          {icon}
        </div>
      </div>
      <p className="text-3xl font-bold mb-1">{value}</p>
      {trend && <p className="text-xs text-accent">{trend}</p>}
    </Card>
  );
};
