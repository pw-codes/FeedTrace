import React from 'react';
import { cn } from '@/lib/utils';
import { COLORS } from '@/lib/design-system';

interface TraceNodeProps {
  label: string;
  sublabel?: string;
  type: 'MANUFACTURER' | 'DISTRIBUTOR' | 'COOPERATIVE' | 'FARM';
  count?: number;
  isActive?: boolean;
}

function TraceNode({ label, sublabel, type, count, isActive }: TraceNodeProps) {
  const nodeColors = {
    MANUFACTURER: 'border-slate-900 bg-slate-900 text-white',
    DISTRIBUTOR: 'border-slate-600 bg-slate-100 text-slate-900',
    COOPERATIVE: 'border-forest-deep bg-forest-deep text-white',
    FARM: 'border-slate-300 bg-white text-slate-900',
  };

  return (
    <div className={cn(
      "relative p-4 rounded-md border-2 transition-all shadow-sm min-w-[200px] text-center",
      nodeColors[type],
      isActive && "ring-4 ring-amber-400 ring-offset-2 scale-105"
    )}>
      <span className="text-[10px] font-bold uppercase tracking-tighter opacity-70 block mb-1">
        {type}
      </span>
      <h4 className="font-bold text-sm">{label}</h4>
      {sublabel && <p className="text-[11px] opacity-80">{sublabel}</p>}
      {count && (
        <div className="mt-2 pt-2 border-t border-current/20 flex justify-center items-center gap-1 text-xs font-bold">
          <span>{count} Recipients</span>
        </div>
      )}
    </div>
  );
}

export function TraceGraph() {
  return (
    <div className="flex flex-col items-center gap-12 py-12 overflow-x-auto">
      {/* Level 1: Manufacturer */}
      <TraceNode
        type="MANUFACTURER"
        label="ABC Feed Industries"
        sublabel="Batch MF-260921-047"
      />

      <div className="h-12 w-0.5 bg-slate-300 relative">
        <div className="absolute bottom-0 -left-1 w-2 h-2 rounded-full bg-slate-300" />
      </div>

      {/* Level 2: Distributor */}
      <TraceNode
        type="DISTRIBUTOR"
        label="XYZ Distribution"
        sublabel="Regional Logistics Hub"
      />

      <div className="h-12 w-0.5 bg-slate-300 relative">
        <div className="absolute bottom-0 -left-1 w-2 h-2 rounded-full bg-slate-300" />
      </div>

      {/* Level 3: Cooperative */}
      <TraceNode
        type="COOPERATIVE"
        label="Pune Dairy Cooperative"
        sublabel="District Center"
        isActive
      />

      {/* Connector to Farms */}
      <div className="relative w-full max-w-4xl flex justify-center">
        <div className="absolute top-0 left-1/2 w-0.5 h-12 bg-slate-300" />
        <div className="absolute top-12 left-0 right-0 h-0.5 bg-slate-300" />
      </div>

      {/* Level 4: Farms */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl">
        <TraceNode type="FARM" label="Farm 001" sublabel="North Sector" count={1} />
        <TraceNode type="FARM" label="Farm 002" sublabel="North Sector" count={1} />
        <TraceNode type="FARM" label="Farm 003" sublabel="East Sector" count={1} />
        <TraceNode type="FARM" label="Farm 004" sublabel="South Sector" count={1} />
      </div>
    </div>
  );
}
