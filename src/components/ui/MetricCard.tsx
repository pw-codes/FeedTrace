import { cn } from "@/lib/utils";
import { COLORS } from "@/lib/design-system";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  label: string;
  value: string | number;
  description?: string;
  trend?: "up" | "down" | "neutral";
  status?: keyof typeof COLORS.status;
  className?: string;
  icon?: LucideIcon;
}

export function MetricCard({
  label,
  value,
  description,
  trend,
  status,
  className,
  icon: Icon,
}: MetricCardProps) {
  return (
    <div
      className={cn(
        "p-4 bg-white border border-slate-200 rounded-md shadow-sm",
        className,
      )}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">
            {label}
          </p>
        </div>
        {Icon && <Icon size={20} className="text-slate-400 ml-2" />}
      </div>
      <div className="flex items-baseline gap-2">
        <h3 className="text-2xl font-bold text-slate-900 font-mono">{value}</h3>
        {trend && (
          <span
            className={cn(
              "text-xs font-medium",
              trend === "up"
                ? "text-red-600"
                : trend === "down"
                  ? "text-green-600"
                  : "text-slate-400",
            )}
          >
            {trend === "up" ? "↑" : trend === "down" ? "↓" : "→"}
          </span>
        )}
      </div>
      {description && (
        <p className="text-xs text-slate-500 mt-1">{description}</p>
      )}
      {status && (
        <div className="mt-3 h-1 w-full rounded-full bg-slate-100 overflow-hidden">
          <div
            className="h-full transition-all duration-500"
            style={{ backgroundColor: COLORS.status[status], width: "100%" }}
          />
        </div>
      )}
    </div>
  );
}
