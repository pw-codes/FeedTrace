import React from 'react';
import { cn } from '@/lib/utils';
import { COLORS } from '@/lib/design-system';

interface AcknowledgementRowProps {
  farmName: string;
  location: string;
  status: 'ACKNOWLEDGED' | 'PENDING';
  quantity: string;
  updatedAt: string;
}

export function AcknowledgementRow({ farmName, location, status, quantity, updatedAt }: AcknowledgementRowProps) {
  return (
    <tr className="hover:bg-slate-50 transition-colors text-sm">
      <td className="px-6 py-4 font-medium text-slate-900">{farmName}</td>
      <td className="px-6 py-4 text-slate-500">{location}</td>
      <td className="px-6 py-4">
        <span className={cn(
          "text-[10px] font-bold px-2 py-1 rounded-sm uppercase",
          status === 'ACKNOWLEDGED' ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
        )}>
          {status}
        </span>
      </td>
      <td className="px-6 py-4 font-mono text-slate-600">{quantity}</td>
      <td className="px-6 py-4 text-xs text-slate-400">{updatedAt}</td>
    </tr>
  );
}
