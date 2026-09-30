import React from 'react';
import { cn } from '@/lib/utils';
import { COLORS } from '@/lib/design-system';

interface FarmerActionCardProps {
  label: string;
  icon: React.ReactNode;
  color: string;
  onClick?: () => void;
}

export function FarmerActionCard({ label, icon, color, onClick }: FarmerActionCardProps) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center justify-center p-6 rounded-2xl border-2 border-transparent active:scale-95 transition-all shadow-sm bg-white"
    >
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-inner"
        style={{ backgroundColor: `${color}20`, color: color }}
      >
        {React.cloneElement(icon as React.ReactElement, { size: 32 })}
      </div>
      <span className="text-lg font-bold text-slate-800">{label}</span>
    </button>
  );
}
