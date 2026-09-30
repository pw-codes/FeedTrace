import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AlertIconProps {
  severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  className?: string;
}

export function AlertIcon({ severity, className }: AlertIconProps) {
  const colors = {
    LOW: 'text-blue-500 bg-blue-50',
    MEDIUM: 'text-amber-500 bg-amber-50',
    HIGH: 'text-orange-600 bg-orange-50',
    CRITICAL: 'text-red-600 bg-red-50',
  };

  return (
    <div className={cn(
      "p-2 rounded-full",
      colors[severity],
      className
    )}>
      <AlertTriangle size={20} />
    </div>
  );
}
