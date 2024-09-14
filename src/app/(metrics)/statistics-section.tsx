import { StatisticCard } from "@/components/app/statistic-card";
import { CreditCardIcon, DollarSignIcon, UsersIcon } from "lucide-react";

export function StatisticsSection() {
  return (
    <section
      id="statistics"
      className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
    >
      <StatisticCard
        title="Valor de vendas"
        value="R$4.231,89"
        percentage={20.1}
        icon={DollarSignIcon}
        className="animate-in slide-in-from-bottom-8 fade-in duration-1000"
      />
      <StatisticCard
        title="Vendas - Inteira"
        value="+2,350"
        percentage={180.1}
        icon={UsersIcon}
        className="animate-in slide-in-from-bottom-8 fade-in duration-700"
      />
      <StatisticCard
        title="Vendas - Meia-entrada"
        value="+2,234"
        percentage={19}
        icon={CreditCardIcon}
        className="animate-in slide-in-from-bottom-8 fade-in duration-500"
      />
    </section>
  );
}
