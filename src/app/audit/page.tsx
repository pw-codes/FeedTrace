import React from "react";
import AppLayout from "@/components/layout/AppLayout";
import { MetricCard } from "@/components/ui/MetricCard";
import { FileText, Users, Clock } from "lucide-react";
import { COLORS } from "@/lib/design-system";

export default function AuditPage() {
  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
              Audit Log
            </h1>
            <p className="text-slate-500 text-sm">
              System and user activity records
            </p>
          </div>
        </header>

        {/* Audit Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <MetricCard
            label="Total Entries"
            value="1,247"
            description="In current month"
            icon={FileText}
          />
          <MetricCard
            label="Active Users"
            value="23"
            description="System users"
            icon={Users}
          />
          <MetricCard
            label="Last Update"
            value="2 mins"
            description="Ago"
            icon={Clock}
          />
        </div>

        {/* Audit Log Table */}
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">
              Activity Log
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">
                    User
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">
                    Action
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">
                    Resource
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">
                    Timestamp
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200 hover:bg-slate-50">
                  <td className="px-6 py-4 text-sm text-slate-900">
                    Admin User
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">
                    Updated Batch
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">
                    MF-260921-047
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">
                    28 Sep 2026, 14:32
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
