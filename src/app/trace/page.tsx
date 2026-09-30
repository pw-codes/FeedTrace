"use client";

import React from "react";
import AppLayout from "@/components/layout/AppLayout";
import { TraceGraph } from "@/components/trace/TraceGraph";
import { Search, Filter, AlertCircle, MapPin } from "lucide-react";
import { COLORS } from "@/lib/design-system";

export default function TracePage() {
  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
              Traceability Map
            </h1>
            <p className="text-slate-500 text-sm font-mono">
              Batch: MF-260921-047
            </p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-md hover:bg-slate-50 transition-colors">
              Export Map
            </button>
          </div>
        </header>

        {/* Trace Controls */}
        <div className="bg-white border border-slate-200 rounded-md p-4 mb-8 flex flex-col md:flex-row gap-4 items-center justify-between shadow-sm">
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                size={16}
              />
              <input
                type="text"
                placeholder="Search farm or region..."
                className="w-full pl-9 pr-4 py-2 text-sm border border-slate-200 rounded-md bg-slate-50 focus:outline-none focus:ring-2 focus:ring-forest-deep/20"
              />
            </div>
            <button className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-600 bg-white border border-slate-200 rounded-md hover:bg-slate-50">
              <Filter size={14} />
              Filter by Region
            </button>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-slate-900" />
              <span className="text-slate-600">Manufacturer</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-forest-deep" />
              <span className="text-slate-600">Cooperative</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-slate-600 font-bold">Affected/Active</span>
            </div>
          </div>
        </div>

        {/* The Graph */}
        <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-slate-100" />
          <TraceGraph />
        </div>

        {/* Distribution Summary */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white border border-slate-200 rounded-md p-6 shadow-sm">
            <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
              <MapPin size={18} className="text-slate-500" />
              Regional Distribution
            </h3>
            <div className="space-y-3">
              {[
                { region: "Pune", farms: 18, percent: 38 },
                { region: "Satara", farms: 9, percent: 19 },
                { region: "Kolhapur", farms: 7, percent: 15 },
                { region: "Nashik", farms: 6, percent: 13 },
                { region: "Other", farms: 7, percent: 15 },
              ].map((r) => (
                <div key={r.region} className="flex items-center gap-4">
                  <span className="text-sm text-slate-600 w-24">
                    {r.region}
                  </span>
                  <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-forest-deep transition-all duration-1000"
                      style={{ width: `${r.percent}%` }}
                    />
                  </div>
                  <span className="text-sm font-mono font-medium text-slate-900 w-12 text-right">
                    {r.farms}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-red-200 rounded-md p-6 shadow-sm border-l-4 border-l-red-500">
            <div className="flex items-center gap-2 text-red-600 mb-2">
              <AlertCircle size={20} />
              <h3 className="font-bold">Impact Summary</h3>
            </div>
            <p className="text-sm text-slate-600 mb-4">
              This batch has reached 47 distinct farm locations. Immediate
              isolation is recommended for all identified recipients.
            </p>
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-slate-500">Total Affected</span>
                <span className="text-slate-900 font-mono">47 Farms</span>
              </div>
              <div className="flex justify-between text-xs font-medium">
                <span className="text-slate-500">Critical Zones</span>
                <span className="text-red-600 font-mono">3 Regions</span>
              </div>
            </div>
            <button
              onClick={() => (window.location.href = "/recall")}
              className="w-full mt-6 py-2.5 bg-red-600 text-white rounded-md text-xs font-bold hover:bg-red-700 transition-colors shadow-sm"
            >
              Initiate Digital Recall
            </button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
