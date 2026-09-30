import React from 'react';
import { cn } from '@/lib/utils';
import { COLORS } from '@/lib/design-system';

interface StorageChartProps {
  data: { date: string; value: number }[];
  label: string;
  unit: string;
  threshold?: number;
  color?: string;
}

export function StorageChart({ data, label, unit, threshold, color = COLORS.primary.DEFAULT }: StorageChartProps) {
  const values = data.map(d => d.value);
  const min = Math.min(...values, threshold || 0);
  const max = Math.max(...values, threshold || 0);
  const range = max - min;

  return (
    <div className="p-6 bg-white border border-slate-200 rounded-md shadow-sm h-full">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-sm font-semibold text-slate-800">{label}</h3>
          <p className="text-xs text-slate-500">Trend analysis over last 10 days</p>
        </div>
        <div className="text-right">
          <span className="text-2xl font-bold font-mono">{values[values.length - 1]}</span>
          <span className="text-xs font-medium text-slate-500 ml-1">{unit}</span>
        </div>
      </div>

      <div className="relative h-40 w-full flex items-end gap-2 px-2">
        {/* Threshold Line */}
        {threshold && (
          <div
            className="absolute w-full border-t-2 border-dashed border-red-400 z-10 pointer-events-none"
            style={{
              bottom: `${((threshold - min) / range) * 100}%`,
            }}
          >
            <span className="absolute right-0 -top-5 text-[10px] font-bold text-red-500 uppercase">
              Threshold {threshold}{unit}
            </span>
          </div>
        )}

        {data.map((d, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-2 group relative">
            <div
              className={cn(
                "w-full rounded-t-sm transition-all duration-500 group-hover:opacity-80",
                d.value > (threshold || Infinity) ? 'bg-red-500' : 'bg-forest-deep'
              )}
              style={{
                height: `${((d.value - min) / range) * 100}%`,
                backgroundColor: d.value > (threshold || Infinity) ? '#EF4444' : color
              }}
            />
            <span className="text-[10px] text-slate-400 font-mono">{d.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
