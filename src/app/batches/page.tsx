import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { BatchTable } from '@/components/batches/BatchTable';
import { FeedBatch } from '@/types';
import { Search, Filter, Plus, Download } from 'lucide-react';
import { COLORS } from '@/lib/design-system';

// Mock Data for Batch List
const MOCK_BATCHES: FeedBatch[] = [
  {
    id: '1',
    batch_id: 'MF-260921-047',
    feed_type: 'maize_silage',
    manufacturer_id: 'ABC Feed Industries',
    production_date: '2026-09-21',
    quantity_kg: 12000,
    status: 'FLAGGED',
    current_owner_id: 'Pune Cooperative',
    risk_level: 'HIGH',
    last_tested_at: '28 Sep 2026',
  },
  {
    id: '2',
    batch_id: 'MF-260921-012',
    feed_type: 'alfalfa_concentrate',
    manufacturer_id: 'Global Feed Corp',
    production_date: '2026-09-20',
    quantity_kg: 8000,
    status: 'VERIFIED',
    current_owner_id: 'Satara Cooperative',
    risk_level: 'LOW',
    last_tested_at: '29 Sep 2026',
  },
  {
    id: '3',
    batch_id: 'MF-260915-088',
    feed_type: 'maize_silage',
    manufacturer_id: 'ABC Feed Industries',
    production_date: '2026-09-15',
    quantity_kg: 15000,
    status: 'MONITOR',
    current_owner_id: 'Pune Cooperative',
    risk_level: 'MEDIUM',
    last_tested_at: '25 Sep 2026',
  },
  {
    id: '4',
    batch_id: 'MF-260910-002',
    feed_type: 'soybean_meal',
    manufacturer_id: 'PureProtein Ltd',
    production_date: '2026-09-10',
    quantity_kg: 5000,
    status: 'PENDING',
    current_owner_id: 'Nashik Cooperative',
    risk_level: 'LOW',
    last_tested_at: undefined,
  },
];

export default function BatchesPage() {
  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
              Feed Batches
            </h1>
            <p className="text-slate-500 text-sm">
              Manage and trace all batches within the supply chain
            </p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-md hover:bg-slate-50 transition-colors">
              <Download size={16} />
              Export CSV
            </button>
            <button
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-md transition-colors shadow-sm"
              style={{ backgroundColor: COLORS.primary.DEFAULT }}
            >
              <Plus size={16} />
              Create Batch
            </button>
          </div>
        </header>

        {/* Filters Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search Batch ID, Manufacturer or Owner..."
              className="w-full pl-10 pr-4 py-2 text-sm border border-slate-200 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-forest-deep/20 focus:border-forest-deep transition-all"
            />
          </div>
          <button className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-md hover:bg-slate-50 transition-colors">
            <Filter size={16} />
            Filters
          </button>
        </div>

        <BatchTable batches={MOCK_BATCHES} />
      </div>
    </AppLayout>
  );
}
