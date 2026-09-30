import React from 'react';
import {
  LayoutDashboard,
  Boxes,
  FlaskConical,
  Thermometer,
  AlertTriangle,
  RotateCcw,
  FileText,
  Settings,
  User
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { COLORS } from '@/lib/design-system';

const NAV_ITEMS = [
  { name: 'Overview', href: '/', icon: LayoutDashboard },
  { name: 'Batches', href: '/batches', icon: Boxes },
  { name: 'Testing', href: '/testing', icon: FlaskConical },
  { name: 'Storage', href: '/storage', icon: Thermometer },
  { name: 'Alerts', href: '/alerts', icon: AlertTriangle },
  { name: 'Incidents', href: '/incidents', icon: RotateCcw },
  { name: 'Audit Log', href: '/audit', icon: FileText },
];

export default function Sidebar() {
  return (
    <aside
      className="w-64 h-screen sticky top-0 flex flex-col border-r border-slate-200 bg-white"
      style={{ borderColor: `${COLORS.secondary.light}40` }}
    >
      <div className="p-6 flex items-center gap-3">
        <div
          className="w-8 h-8 rounded bg-forest-deep flex items-center justify-center text-white font-bold"
          style={{ backgroundColor: COLORS.primary.DEFAULT }}
        >
          FT
        </div>
        <span className="font-bold text-lg tracking-tight text-slate-900">
          FeedTrace
        </span>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
              "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            )}
          >
            <item.icon size={18} />
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-100">
        <div className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:bg-slate-50 cursor-pointer transition-colors">
          <User size={18} />
          <span>My Account</span>
        </div>
        <div className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:bg-slate-50 cursor-pointer transition-colors">
          <Settings size={18} />
          <span>Settings</span>
        </div>
      </div>
    </aside>
  );
}
