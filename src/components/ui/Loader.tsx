import React from 'react';
import { cn } from '@/lib/utils';
import { COLORS } from '@/lib/design-system';

interface LoaderProps {
  label?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Loader({ label, size = 'md' }: LoaderProps) {
  const sizeClasses = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4',
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div
        className={cn(
          "rounded-full border-slate-200 border-t-forest-deep animate-spin",
          sizeClasses[size]
        )}
        style={{ borderTopColor: COLORS.primary.DEFAULT }}
      />
      {label && <p className="text-xs font-medium text-slate-500 animate-pulse">{label}</p>}
    </div>
  );
}
