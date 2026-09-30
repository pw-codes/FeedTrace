import React from "react";
import AppLayout from "@/components/layout/AppLayout";
import { MetricCard } from "@/components/ui/MetricCard";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { AlertTriangle, CheckCircle2, Clock } from "lucide-react";
import { COLORS } from "@/lib/design-system";

export default function AlertsPage() {
  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
              Alerts & Notifications
            </h1>
            <p className="text-slate-500 text-sm">
              Active alerts and critical notifications
            </p>
          </div>
        </header>

        {/* Alert Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <MetricCard
            label="Critical Alerts"
            value="3"
            description="Require immediate action"
            status="monitor"
            icon={AlertTriangle}
          />
          <MetricCard
            label="Warnings"
            value="7"
            description="Monitor closely"
            icon={Clock}
          />
          <MetricCard
            label="Resolved"
            value="12"
            description="Today"
            status="verified"
            icon={CheckCircle2}
          />
        </div>

        {/* Alerts List */}
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">
              Active Alerts
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">
                    Alert Type
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">
                    Batch ID
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">
                    Severity
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200 hover:bg-slate-50">
                  <td className="px-6 py-4 text-sm text-slate-900">
                    Temperature Warning
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">
                    MF-260921-047
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status="MONITOR" label="Monitor" />
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">
                    28 Sep 2026
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
