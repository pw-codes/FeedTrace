"use client";

import Link from "next/link";
import React from "react";
import AppLayout from "@/components/layout/AppLayout";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { FeedBatch, QualityMeasurement } from "@/types";
import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  QrCode,
  ShieldCheck,
  AlertCircle,
  AlertTriangle,
  FlaskConical,
  Thermometer,
  User,
  Calendar,
  Weight,
  Building2,
  ChevronRight,
  Clock,
} from "lucide-react";
import { COLORS } from "@/lib/design-system";

// Mock Data for a specific batch
const MOCK_BATCH: FeedBatch = {
  id: "1",
  batch_id: "MF-260921-047",
  feed_type: "maize_silage",
  manufacturer_id: "ABC Feed Industries",
  production_date: "2026-09-21",
  quantity_kg: 12000,
  status: "FLAGGED",
  current_owner_id: "Pune Dairy Cooperative",
  risk_level: "HIGH",
  last_tested_at: "28 Sep 2026",
};

const MOCK_MEASUREMENTS: QualityMeasurement[] = [
  {
    id: "m1",
    batch_id: "MF-260921-047",
    parameter: "Moisture",
    value: 64,
    unit: "%",
    source: "PORTABLE_DEVICE",
    method: "Moisture Sensor",
    tested_by: "Inspector Rahul",
    tested_at: "28 Sep 2026 · 14:32",
    confidence: "VALIDATED",
  },
  {
    id: "m2",
    batch_id: "MF-260921-047",
    parameter: "pH",
    value: 4.2,
    unit: "",
    source: "PORTABLE_DEVICE",
    method: "Digital pH Meter",
    tested_by: "Inspector Rahul",
    tested_at: "28 Sep 2026 · 14:35",
    confidence: "VALIDATED",
  },
  {
    id: "m3",
    batch_id: "MF-260921-047",
    parameter: "Temperature",
    value: 25,
    unit: "°C",
    source: "IOT_SENSOR",
    method: "Continuous Probe",
    tested_by: "Automated",
    tested_at: "28 Sep 2026 · 15:00",
    confidence: "OBSERVED",
  },
];

export default function FeedQualityPassport() {
  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto">
        <header className="mb-6 flex items-center gap-4">
          <button className="p-2 text-slate-400 hover:text-slate-900 transition-colors">
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
              Feed Quality Passport
            </h1>
            <p className="text-slate-500 text-sm font-mono">
              ID: {MOCK_BATCH.batch_id}
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Identity Card */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
              <div
                className="p-6 text-white flex flex-col items-center text-center gap-4"
                style={{ backgroundColor: COLORS.primary.DEFAULT }}
              >
                <div className="w-32 h-32 bg-white p-2 rounded-lg shadow-inner">
                  {/* Placeholder for actual QR code */}
                  <div className="w-full h-full bg-slate-100 flex items-center justify-center border-2 border-dashed border-slate-300">
                    <QrCode size={64} className="text-slate-300" />
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-bold">{MOCK_BATCH.batch_id}</h2>
                  <p className="text-white/80 text-sm uppercase tracking-widest font-medium">
                    Digital Identity
                  </p>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                  <span className="text-xs font-medium text-slate-400 uppercase">
                    Current Status
                  </span>
                  <StatusBadge
                    status={MOCK_BATCH.status}
                    label={MOCK_BATCH.status}
                  />
                </div>

                <div className="grid grid-cols-2 gap-y-4 text-sm">
                  <div className="flex items-center gap-2 text-slate-500">
                    <Building2 size={16} />
                    <span>Manufacturer</span>
                  </div>
                  <div className="text-right font-medium text-slate-900">
                    {MOCK_BATCH.manufacturer_id}
                  </div>

                  <div className="flex items-center gap-2 text-slate-500">
                    <Calendar size={16} />
                    <span>Production Date</span>
                  </div>
                  <div className="text-right font-medium text-slate-900">
                    {MOCK_BATCH.production_date}
                  </div>

                  <div className="flex items-center gap-2 text-slate-500">
                    <Weight size={16} />
                    <span>Quantity</span>
                  </div>
                  <div className="text-right font-medium text-slate-900">
                    {MOCK_BATCH.quantity_kg.toLocaleString()} kg
                  </div>

                  <div className="flex items-center gap-2 text-slate-500">
                    <User size={16} />
                    <span>Current Owner</span>
                  </div>
                  <div className="text-right font-medium text-slate-900">
                    {MOCK_BATCH.current_owner_id}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Evidence */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quality Section */}
            <section className="bg-white border border-slate-200 rounded-md shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <h3 className="font-semibold text-slate-800 flex items-center gap-2">
                  <FlaskConical size={18} className="text-slate-500" />
                  Quality Measurements
                </h3>
                <span className="text-xs text-slate-400">
                  Last updated: {MOCK_BATCH.last_tested_at}
                </span>
              </div>

              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {MOCK_MEASUREMENTS.map((m) => (
                  <div
                    key={m.id}
                    className="p-4 border border-slate-100 rounded-lg bg-slate-50/30 hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                        {m.parameter}
                      </span>
                      <span
                        className={cn(
                          "text-[10px] px-1.5 py-0.5 rounded-sm font-bold uppercase",
                          m.confidence === "VALIDATED"
                            ? "bg-green-100 text-green-700"
                            : "bg-blue-100 text-blue-700",
                        )}
                      >
                        {m.confidence}
                      </span>
                    </div>
                    <div className="flex items-baseline gap-1 mb-3">
                      <span className="text-3xl font-bold text-slate-900 font-mono">
                        {m.value}
                      </span>
                      <span className="text-sm font-medium text-slate-500">
                        {m.unit}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-400 space-y-1">
                      <div className="flex items-center gap-1">
                        <User size={12} /> {m.tested_by}
                      </div>
                      <div className="flex items-center gap-1">
                        <ShieldCheck size={12} /> {m.source.replace("_", " ")}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={12} /> {m.tested_at}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Risk Alert Section */}
            <section className="bg-white border border-amber-200 rounded-md shadow-sm overflow-hidden border-l-4 border-l-amber-500">
              <div className="px-6 py-4 border-b border-amber-100 flex items-center justify-between bg-amber-50/50">
                <h3 className="font-semibold text-amber-800 flex items-center gap-2">
                  <AlertCircle size={18} className="text-amber-600" />
                  Operational Alert
                </h3>
              </div>
              <div className="p-6">
                <div className="flex gap-4">
                  <div className="p-3 bg-amber-100 rounded-full h-fit">
                    <AlertTriangle size={24} className="text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">
                      Storage Risk Detected
                    </h4>
                    <p className="text-sm text-slate-600 mb-4">
                      Moisture levels are trending upwards and have exceeded the
                      configured threshold for maize silage.
                    </p>
                    <div className="flex gap-3">
                      <button className="px-4 py-2 text-xs font-bold bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors">
                        Initiate Investigation
                      </button>
                      <button className="px-4 py-2 text-xs font-medium text-slate-600 bg-white border border-slate-200 rounded-md hover:bg-slate-50 transition-colors">
                        View Storage Trend
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Traceability Quick-Link */}
            <section className="bg-slate-900 rounded-md p-6 text-white flex items-center justify-between shadow-lg">
              <div>
                <h3 className="font-bold text-lg mb-1">Trace This Batch</h3>
                <p className="text-slate-400 text-sm">
                  Map the distribution network and identify affected farms.
                </p>
              </div>
              <button
                onClick={() => (window.location.href = "/trace")}
                className="flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-md font-bold text-sm hover:bg-slate-100 transition-colors"
              >
                Trace Network <ChevronRight size={18} />
              </button>
            </section>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
