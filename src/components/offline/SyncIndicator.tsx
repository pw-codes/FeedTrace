import React from 'react';
import { cn } from '@/lib/utils';
import { COLORS } from '@/lib/design-system';

interface SyncIndicatorProps {
  status: 'ONLINE' | 'OFFLINE' | 'SYNCING' | 'SYNC_ERROR';
  pendingCount?: number;
}

export function SyncIndicator({ status, pendingCount }: SyncIndicatorProps) {
  const statusConfig = {
    ONLINE: {
      color: 'text-green-600 bg-green-50',
      label: 'Connected',
      icon: <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />,
    },
    OFFLINE: {
      color: 'text-slate-500 bg-slate-100',
      label: 'Offline Mode',
      icon: <div className="w-2 h-2 rounded-full bg-slate-400" />,
    },
    SYNCING: {
      color: 'text-blue-600 bg-blue-50',
      label: 'Syncing Data...',
      icon: <div className="w-2 h-2 rounded-full bg-blue-500 animate-spin" />,
    },
    SYNC_ERROR: {
      color: 'text-red-600 bg-red-50',
      label: 'Sync Error',
      icon: <div className="w-2 h-2 rounded-full bg-red-500" />,
    },
  };

  const config = statusConfig[status];

  return (
    <div className={cn(
      "flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all",
      config.color
    )}>
      {config.icon}
      <span>{config.label}</span>
      {pendingCount && pendingCount > 0 && (
        <span className="ml-1 pl-1 border-l border-current opacity-60">
          {pendingCount} pending
        </span>
      )}
    </div>
  );
}
