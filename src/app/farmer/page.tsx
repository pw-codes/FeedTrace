import React from 'react';
import {
  QrCode,
  Boxes,
  Thermometer,
  FlaskConical,
  AlertTriangle,
  User,
  Bell
} from 'lucide-react';
import { FarmerActionCard } from '@/components/farmer/FarmerActionCard';
import { SyncIndicator } from '@/components/offline/SyncIndicator';
import { COLORS } from '@/lib/design-system';
import { cn } from '@/lib/utils';

export default function FarmerPortal() {
  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* Farmer Header */}
      <header className="p-6 bg-white border-b border-slate-200 flex justify-between items-center sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
            style={{ backgroundColor: COLORS.primary.DEFAULT }}
          >
            FK
          </div>
          <div>
            <h1 className="text-lg font-bold text-slate-900 leading-tight">नमस्ते, Farmer Kumar</h1>
            <p className="text-xs text-slate-500">Green Valley Farm • Pune</p>
          </div>
        </div>
        <SyncIndicator status="OFFLINE" pendingCount={3} />
      </header>

      <main className="p-6 space-y-8">
        {/* Primary Action Grid */}
        <section>
          <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
            Quick Actions
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <FarmerActionCard
              label="Scan Batch"
              icon={<QrCode />}
              color="#1B4332"
            />
            <FarmerActionCard
              label="My Feed"
              icon={<Boxes />}
              color="#588157"
            />
            <FarmerActionCard
              label="Storage"
              icon={<Thermometer />}
              color="#F59E0B"
            />
            <FarmerActionCard
              label="Tests"
              icon={<FlaskConical />}
              color="#3B82F6"
            />
          </div>
        </section>

        {/* Critical Alert Area */}
        <section className="space-y-4">
          <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
            Attention Needed
          </h2>
          <div className="p-5 bg-red-50 border-2 border-red-200 rounded-2xl shadow-sm">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-red-100 rounded-lg text-red-600">
                <AlertTriangle size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-red-800 text-lg">Feed storage needs attention</h3>
                <p className="text-sm text-red-700 mt-1 mb-4">
                  The temperature of your Maize Silage is rising. Please check for spoilage.
                </p>
                <button className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-bold shadow-sm active:scale-95 transition-all">
                  Why? (See Details)
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Batches */}
        <section className="space-y-4">
          <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
            Recent Batches
          </h2>
          <div className="space-y-3">
            {[
              { id: 'MF-260921-047', type: 'Maize Silage', status: 'FLAGGED', color: '#EA580C' },
              { id: 'MF-260910-002', type: 'Soybean Meal', status: 'VERIFIED', color: '#10B981' },
            ].map((batch) => (
              <div key={batch.id} className="p-4 bg-white border border-slate-200 rounded-xl flex justify-between items-center">
                <div>
                  <p className="text-xs font-mono text-slate-400">{batch.id}</p>
                  <p className="font-bold text-slate-800">{batch.type}</p>
                </div>
                <span
                  className="text-[10px] font-bold px-2 py-1 rounded-full text-white"
                  style={{ backgroundColor: batch.color }}
                >
                  {batch.status}
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Bottom Mobile Nav */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-6 py-3 flex justify-between items-center shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
        <div className="flex flex-col items-center gap-1 text-forest-deep">
          <Boxes size={20} />
          <span className="text-[10px] font-medium">Feed</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-slate-400">
          <Bell size={20} />
          <span className="text-[10px] font-medium">Alerts</span>
        </div>
        <div className="relative -top-8">
          <button
            className="w-14 h-14 rounded-full bg-forest-deep text-white shadow-lg flex items-center justify-center border-4 border-slate-50 active:scale-90 transition-transform"
            style={{ backgroundColor: COLORS.primary.DEFAULT }}
          >
            <QrCode size={28} />
          </button>
        </div>
        <div className="flex flex-col items-center gap-1 text-slate-400">
          <FlaskConical size={20} />
          <span className="text-[10px] font-medium">Tests</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-slate-400">
          <User size={20} />
          <span className="text-[10px] font-medium">Profile</span>
        </div>
      </nav>
    </div>
  );
}
