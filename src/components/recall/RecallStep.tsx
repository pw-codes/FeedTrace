import React from 'react';
import { cn } from '@/lib/utils';
import { COLORS } from '@/lib/design-system';

interface RecallStepProps {
  step: number;
  label: string;
  status: 'completed' | 'active' | 'pending';
  description?: string;
}

export function RecallStep({ step, label, status, description }: RecallStepProps) {
  return (
    <div className={cn(
      "flex gap-4 relative",
      status === 'pending' && "opacity-50"
    )}>
      <div className="flex flex-col items-center">
        <div className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-colors",
          status === 'completed' ? "bg-green-600 border-green-600 text-white" :
          status === 'active' ? "bg-white border-forest-deep text-forest-deep ring-4 ring-forest-deep/20" :
          "bg-white border-slate-300 text-slate-400"
        )}>
          {status === 'completed' ? '✓' : step}
        </div>
        {step !== 10 && (
          <div className={cn(
            "w-0.5 h-12 my-1",
            status === 'completed' ? "bg-green-600" : "bg-slate-200"
          )} />
        )}
      </div>
      <div className="pb-8">
        <h4 className={cn(
          "text-sm font-bold",
          status === 'active' ? "text-slate-900" : "text-slate-500"
        )}>
          {label}
        </h4>
        {description && <p className="text-xs text-slate-400 mt-1">{description}</p>}
      </div>
    </div>
  );
}
