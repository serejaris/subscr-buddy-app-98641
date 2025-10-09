import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, DollarSign, Calendar, Bell, TrendingDown } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        
        <div className="container relative z-10 px-4 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                Управление подписками
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Контролируйте свои{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                подписки
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Отслеживайте все подписки в одном месте. Экономьте деньги и никогда не забывайте об оплате.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button asChild variant="hero" size="lg">
                <Link to="/app">
                  Начать бесплатно <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#features">Узнать больше</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Почему выбирают нас?
            </h2>
            <p className="text-xl text-muted-foreground">
              Простой и эффективный способ управления подписками
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<DollarSign className="w-8 h-8" />}
              title="Экономия денег"
              description="Отслеживайте расходы и находите неиспользуемые подписки"
            />
            <FeatureCard
              icon={<Calendar className="w-8 h-8" />}
              title="Напоминания"
              description="Получайте уведомления о предстоящих платежах"
            />
            <FeatureCard
              icon={<TrendingDown className="w-8 h-8" />}
              title="Аналитика"
              description="Визуализация расходов и трендов по месяцам"
            />
            <FeatureCard
              icon={<Bell className="w-8 h-8" />}
              title="Уведомления"
              description="Не пропускайте важные даты оплаты"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="bg-gradient-card rounded-3xl p-12 text-center shadow-card border border-border">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Готовы взять контроль?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Начните отслеживать свои подписки прямо сейчас
            </p>
            <Button asChild variant="hero" size="lg">
              <Link to="/app">
                Начать сейчас <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="container max-w-6xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 SubTracker. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className="bg-gradient-card rounded-2xl p-6 border border-border shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default Index;
