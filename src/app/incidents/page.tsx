import React from "react";
import AppLayout from "@/components/layout/AppLayout";
import { MetricCard } from "@/components/ui/MetricCard";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { RotateCcw, TrendingDown, CheckCircle2 } from "lucide-react";
import { COLORS } from "@/lib/design-system";

export default function IncidentsPage() {
  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
              Incidents & Issues
            </h1>
            <p className="text-slate-500 text-sm">
              Track and manage operational incidents
            </p>
          </div>
        </header>

        {/* Incident Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <MetricCard
            label="Open Incidents"
            value="5"
            description="Active issues"
            icon={RotateCcw}
          />
          <MetricCard
            label="In Progress"
            value="12"
            description="Being investigated"
            status="monitor"
            icon={TrendingDown}
          />
          <MetricCard
            label="Resolved"
            value="28"
            description="This month"
            status="verified"
            icon={CheckCircle2}
          />
        </div>

        {/* Incidents List */}
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">
              Recent Incidents
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">
                    Incident ID
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200 hover:bg-slate-50">
                  <td className="px-6 py-4 text-sm text-slate-900">
                    INC-2026-001
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">
                    Quality Issue
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status="MONITOR" label="Monitor" />
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">
                    27 Sep 2026
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
