import React from 'react';
import { cn } from '@/lib/utils';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { FeedBatch } from '@/types';
import { Search, Filter, Download, Plus } from 'lucide-react';
import { COLORS } from '@/lib/design-system';

interface BatchTableProps {
  batches: FeedBatch[];
}

export function BatchTable({ batches }: BatchTableProps) {
  return (
    <div className="overflow-x-auto bg-white border border-slate-200 rounded-md shadow-sm">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-200">
            <th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Batch ID</th>
            <th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Feed Type</th>
            <th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
            <th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Current Owner</th>
            <th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Risk</th>
            <th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Last Tested</th>
            <th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {batches.map((batch) => (
            <tr key={batch.id} className="hover:bg-slate-50 transition-colors group">
              <td className="px-4 py-3 text-sm font-mono font-medium text-slate-900">
                {batch.batch_id}
              </td>
              <td className="px-4 py-3 text-sm text-slate-600">
                {batch.feed_type.replace('_', ' ')}
              </td>
              <td className="px-4 py-3">
                <StatusBadge status={batch.status} label={batch.status} />
              </td>
              <td className="px-4 py-3 text-sm text-slate-600">
                {batch.current_owner_id}
              </td>
              <td className="px-4 py-3">
                <span className={cn(
                  "text-xs font-bold px-2 py-0.5 rounded-sm",
                  batch.risk_level === 'CRITICAL' ? 'bg-red-100 text-red-700' :
                  batch.risk_level === 'HIGH' ? 'bg-orange-100 text-orange-700' :
                  batch.risk_level === 'MEDIUM' ? 'bg-amber-100 text-amber-700' :
                  'bg-green-100 text-green-700'
                )}>
                  {batch.risk_level}
                </span>
              </td>
              <td className="px-4 py-3 text-sm text-slate-500">
                {batch.last_tested_at || 'Not tested'}
              </td>
              <td className="px-4 py-3 text-right">
                <button className="text-xs font-medium text-slate-400 hover:text-slate-900 transition-colors underline">
                  View Passport
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
