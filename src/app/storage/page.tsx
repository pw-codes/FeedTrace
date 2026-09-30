import React from "react";
import AppLayout from "@/components/layout/AppLayout";
import { StorageChart } from "@/components/storage/StorageChart";
import { Thermometer, Droplets, Clock, AlertTriangle } from "lucide-react";
import { COLORS } from "@/lib/design-system";
import { cn } from "@/lib/utils";

const TEMP_DATA = [
  { date: "21 Sep", value: 24 },
  { date: "23 Sep", value: 25 },
  { date: "26 Sep", value: 28 },
  { date: "28 Sep", value: 31 },
  { date: "30 Sep", value: 33 },
];

const MOISTURE_DATA = [
  { date: "21 Sep", value: 62 },
  { date: "23 Sep", value: 63 },
  { date: "26 Sep", value: 65 },
  { date: "28 Sep", value: 68 },
  { date: "30 Sep", value: 71 },
];

export default function StorageMonitoringPage() {
  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
              Storage Monitoring
            </h1>
            <p className="text-slate-500 text-sm">
              Real-time environmental tracking for Batch MF-260921-047
            </p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-md hover:bg-slate-50 transition-colors">
              Change Batch
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <StorageChart
            label="Storage Temperature"
            unit="°C"
            data={TEMP_DATA}
            threshold={30}
          />
          <StorageChart
            label="Moisture Content"
            unit="%"
            data={MOISTURE_DATA}
            threshold={65}
          />
        </div>

        <section className="bg-white border border-slate-200 rounded-md overflow-hidden shadow-sm">
          <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
            <h2 className="font-semibold text-slate-800 flex items-center gap-2">
              <Clock size={18} className="text-slate-500" />
              Inspection Log
            </h2>
            <button className="text-xs font-medium text-forest-deep hover:underline">
              Add Record
            </button>
          </div>
          <div className="p-0">
            <table className="w-full text-left">
              <thead className="bg-slate-50 border-b border-slate-100">
                <tr>
                  <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase">
                    Timestamp
                  </th>
                  <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase">
                    Temp
                  </th>
                  <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase">
                    Moisture
                  </th>
                  <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase">
                    Status
                  </th>
                  <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase">
                    Inspector
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  {
                    time: "30 Sep 08:30",
                    temp: "33.2°C",
                    moist: "71%",
                    status: "RISK",
                    inspector: "IoT Sensor",
                  },
                  {
                    time: "28 Sep 14:00",
                    temp: "31.1°C",
                    moist: "68%",
                    status: "WARNING",
                    inspector: "Inspector Rahul",
                  },
                  {
                    time: "26 Sep 10:00",
                    temp: "28.5°C",
                    moist: "65%",
                    status: "NORMAL",
                    inspector: "IoT Sensor",
                  },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-3 text-sm font-mono text-slate-600">
                      {row.time}
                    </td>
                    <td className="px-6 py-3 text-sm font-medium">
                      {row.temp}
                    </td>
                    <td className="px-6 py-3 text-sm font-medium">
                      {row.moist}
                    </td>
                    <td className="px-6 py-3">
                      <span
                        className={cn(
                          "text-[10px] font-bold px-1.5 py-0.5 rounded-sm uppercase",
                          row.status === "RISK"
                            ? "bg-red-100 text-red-700"
                            : row.status === "WARNING"
                              ? "bg-amber-100 text-amber-700"
                              : "bg-green-100 text-green-700",
                        )}
                      >
                        {row.status}
                      </span>
                    </td>
                    <td className="px-6 py-3 text-sm text-slate-500">
                      {row.inspector}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="mt-8 p-6 bg-amber-50 border border-amber-200 rounded-md flex items-start gap-4">
          <AlertTriangle className="text-amber-600 shrink-0" size={24} />
          <div>
            <h3 className="font-bold text-amber-800">
              Deterioration Trend Detected
            </h3>
            <p className="text-sm text-amber-700 mt-1">
              Temperature has increased by 9°C over the last 10 days. This trend
              correlates with moisture increase, indicating potential spoilage.
            </p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
