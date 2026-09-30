import { cn } from '@/lib/utils';
import { COLORS } from '@/lib/design-system';

interface StatusBadgeProps {
  status: keyof typeof COLORS.status;
  label: string;
  className?: string;
}

export function StatusBadge({ status, label, className }: StatusBadgeProps) {
  const color = COLORS.status[status] || COLORS.status.pending;

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-sm text-xs font-medium border-l-4 transition-colors",
        "bg-white",
        className
      )}
      style={{
        borderColor: color,
        color: COLORS.text.main,
        borderLeftWidth: '4px'
      }}
    >
      <span
        className="w-2 h-2 rounded-full mr-2"
        style={{ backgroundColor: color }}
      />
      {label}
    </span>
  );
}
