import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { MetricCard } from '@/components/ui/MetricCard';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { AlertTriangle, CheckCircle2, Clock, Flag, Boxes } from 'lucide-react';
import { COLORS } from '@/lib/design-system';

export default function Dashboard() {
  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
              Command Center
            </h1>
            <p className="text-slate-500 text-sm">
              Operational overview for Pune Dairy Cooperative
            </p>
          </div>
          <div className="flex gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Online: Connected to Cloud
            </div>
          </div>
        </header>

        {/* Operational Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <MetricCard
            label="Active Batches"
            value="128"
            description="Across 4 regions"
          />
          <MetricCard
            label="Verified"
            value="119"
            description="Ready for distribution"
            status="verified"
          />
          <MetricCard
            label="At Risk"
            value="7"
            description="Storage warnings"
            status="monitor"
            trend="up"
          />
          <MetricCard
            label="Flagged"
            value="2"
            description="Requires investigation"
            status="flagged"
            trend="up"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Critical Alerts */}
          <div className="lg:col-span-2 space-y-6">
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
                  <AlertTriangle size={20} className="text-amber-500" />
                  Active Incidents
                </h2>
                <button className="text-xs font-medium text-slate-500 hover:text-slate-900 underline">
                  View All
                </button>
              </div>

              <div className="space-y-3">
                {/* Mock Incident 1 */}
                <div className="p-4 bg-white border border-slate-200 rounded-md hover:border-amber-300 transition-colors group cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <span className="text-xs font-mono text-slate-400 uppercase">INC-2026-0091</span>
                      <h3 className="font-semibold text-slate-900 group-hover:text-slate-700">
                        Abnormal Moisture Result
                      </h3>
                    </div>
                    <StatusBadge status="flagged" label="FLAGGED" />
                  </div>
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Boxes size={14} /> MF-260921-047
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} /> 2h ago
                    </span>
                    <span className="flex items-center gap-1 font-medium text-red-600">
                      <Flag size={14} /> High Severity
                    </span>
                  </div>
                </div>

                {/* Mock Incident 2 */}
                <div className="p-4 bg-white border border-slate-200 rounded-md hover:border-amber-300 transition-colors group cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <span className="text-xs font-mono text-slate-400 uppercase">INC-2026-0088</span>
                      <h3 className="font-semibold text-slate-900 group-hover:text-slate-700">
                        Temperature Drift Detected
                      </h3>
                    </div>
                    <StatusBadge status="monitor" label="MONITOR" />
                  </div>
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Boxes size={14} /> MF-260921-012
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} /> 5h ago
                    </span>
                    <span className="flex items-center gap-1">
                      <Flag size={14} /> Low Severity
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* System Health / Quick Stats */}
          <div className="space-y-6">
            <section className="p-6 bg-white border border-slate-200 rounded-md">
              <h2 className="text-md font-semibold text-slate-800 mb-4">Network Health</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500">Farms Connected</span>
                  <span className="font-mono font-medium">1,842</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500">Sync Rate</span>
                  <span className="font-mono font-medium text-green-600">98.2%</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500">Sync Rate</span>
                  <span className="font-mono font-medium text-amber-600">14</span>
                </div>
              </div>
              <button className="w-full mt-6 py-2 text-xs font-medium bg-slate-100 text-slate-600 rounded hover:bg-slate-200 transition-colors">
                View Sync Logs
              </button>
            </section>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
