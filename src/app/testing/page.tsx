import React from "react";
import AppLayout from "@/components/layout/AppLayout";
import { MetricCard } from "@/components/ui/MetricCard";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { FlaskConical, CheckCircle2, AlertCircle } from "lucide-react";
import { COLORS } from "@/lib/design-system";

export default function TestingPage() {
  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
              Testing & Lab Results
            </h1>
            <p className="text-slate-500 text-sm">
              Quality assurance and batch testing records
            </p>
          </div>
        </header>

        {/* Summary Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <MetricCard
            label="Tests Completed"
            value="342"
            description="This month"
            icon={CheckCircle2}
          />
          <MetricCard
            label="Pending Tests"
            value="18"
            description="In progress"
            icon={FlaskConical}
          />
          <MetricCard
            label="Failed Tests"
            value="5"
            description="Requires review"
            status="monitor"
            icon={AlertCircle}
          />
        </div>

        {/* Testing Results Table */}
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">
              Recent Test Results
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">
                    Batch ID
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">
                    Test Type
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">
                    Result
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200 hover:bg-slate-50">
                  <td className="px-6 py-4 text-sm text-slate-900">
                    MF-260921-047
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">
                    Microbial Analysis
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status="FLAGGED" label="Flagged" />
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
