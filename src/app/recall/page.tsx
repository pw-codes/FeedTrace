import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { RecallStep } from '@/components/recall/RecallStep';
import { AcknowledgementRow } from '@/components/recall/AcknowledgementRow';
import { CheckCircle2, AlertCircle, Mail, ShieldAlert, PackageX } from 'lucide-react';
import { COLORS } from '@/lib/design-system';

const RECALL_WORKFLOW = [
  { label: 'Flag Batch', desc: 'Batch marked as abnormal' },
  { label: 'Investigate', desc: 'Quality evidence reviewed' },
  { label: 'Quarantine', desc: 'Batch isolated from supply' },
  { label: 'Identify Farms', desc: '47 affected farms mapped' },
  { label: 'Initiate Recall', desc: 'Official recall triggered' },
  { label: 'Notify Users', desc: 'Digital alerts dispatched' },
  { label: 'Track Acknowledgement', desc: 'Farm responses tracked' },
  { label: 'Collect/Isolate', desc: 'Physical batch recovery' },
  { label: 'Close Incident', desc: 'Final resolution report' },
  { label: 'Verify Resolution', desc: 'Audit check complete' },
];

const ACKNOWLEDGEMENTS = [
  { farmName: 'Green Valley Farm', location: 'Pune North', status: 'ACKNOWLEDGED' as const, quantity: '2,000 kg', updatedAt: '30 Sep 10:15' },
  { farmName: 'Sun Rise Dairy', location: 'Satara East', status: 'PENDING' as const, quantity: '1,500 kg', updatedAt: '-' },
  { farmName: 'Hilltop Pastures', location: 'Pune South', status: 'ACKNOWLEDGED' as const, quantity: '3,000 kg', updatedAt: '30 Sep 11:02' },
  { farmName: 'Riverside Farm', location: 'Nashik West', status: 'PENDING' as const, quantity: '1,000 kg', updatedAt: '-' },
  { farmName: 'Golden Fields', location: 'Kolhapur North', status: 'ACKNOWLEDGED' as const, quantity: '2,500 kg', updatedAt: '30 Sep 09:45' },
];

export default function RecallPage() {
  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
              Digital Recall Operation
            </h1>
            <p className="text-slate-500 text-sm font-mono">
              INC-2026-0091 / Batch MF-260921-047
            </p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-md hover:bg-slate-50 transition-colors">
              Download Report
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recall Progress Timeline */}
          <div className="lg:col-span-1 bg-white border border-slate-200 rounded-md p-6 shadow-sm">
            <h3 className="font-semibold text-slate-800 mb-6 flex items-center gap-2">
              <ShieldAlert size={18} className="text-red-600" />
              Recall Lifecycle
            </h3>
            <div className="space-y-0">
              {RECALL_WORKFLOW.map((step, i) => (
                <RecallStep
                  key={i}
                  step={i + 1}
                  label={step.label}
                  description={step.desc}
                  status={i < 6 ? 'completed' : i === 6 ? 'active' : 'pending'}
                />
              ))}
            </div>
          </div>

          {/* Operational Tracking */}
          <div className="lg:col-span-2 space-y-6">
            {/* Progress Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-white border border-slate-200 rounded-md shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-slate-100 rounded-full text-slate-600">
                    <MapPin size={16} />
                  </div>
                  <span className="text-xs font-medium text-slate-500 uppercase">Identified</span>
                </div>
                <div className="text-2xl font-bold text-slate-900 font-mono">47 Farms</div>
              </div>
              <div className="p-4 bg-white border border-slate-200 rounded-md shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-blue-100 rounded-full text-blue-600">
                    <Mail size={16} />
                  </div>
                  <span className="text-xs font-medium text-slate-500 uppercase">Notified</span>
                </div>
                <div className="text-2xl font-bold text-slate-900 font-mono">42 / 47</div>
              </div>
              <div className="p-4 bg-white border border-slate-200 rounded-md shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-green-100 rounded-full text-green-600">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-xs font-medium text-slate-500 uppercase">Acknowledged</span>
                </div>
                <div className="text-2xl font-bold text-slate-900 font-mono">37 / 42</div>
              </div>
            </div>

            {/* Acknowledgement Table */}
            <section className="bg-white border border-slate-200 rounded-md overflow-hidden shadow-sm">
              <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
                <h3 className="font-semibold text-slate-800 flex items-center gap-2">
                  <PackageX size={18} className="text-slate-500" />
                  Recipients Tracking
                </h3>
                <span className="text-xs text-slate-400">Live Sync Enabled</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 border-b border-slate-100">
                    <tr className="text-xs font-semibold text-slate-500 uppercase">
                      <th className="px-6 py-3">Farm</th>
                      <th className="px-6 py-3">Location</th>
                      <th className="px-6 py-3">Status</th>
                      <th className="px-6 py-3">Quantity</th>
                      <th className="px-6 py-3">Last Update</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {ACKNOWLEDGEMENTS.map((row, i) => (
                      <AcknowledgementRow key={i} {...row} />
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Critical Action */}
            <div className="p-6 bg-red-50 border border-red-200 rounded-md flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-red-100 rounded-full text-red-600">
                  <ShieldAlert size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-red-800">Immediate Action Required</h4>
                  <p className="text-sm text-red-700">
                    5 farms have not acknowledged the recall notification. Direct communication initiated.
                  </p>
                </div>
              </div>
              <button className="px-6 py-3 bg-red-600 text-white rounded-md font-bold text-sm hover:bg-red-700 transition-colors shadow-md">
                Escalate to Authorities
              </button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

function MapPin({ size }: { size: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
