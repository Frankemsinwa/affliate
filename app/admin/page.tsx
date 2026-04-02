'use client';

import { motion } from 'motion/react';
import { 
  Users, 
  Briefcase, 
  Wallet, 
  AlertTriangle,
  TrendingUp,
  ArrowUpRight,
  ShieldAlert
} from 'lucide-react';
import AdminLayout from '@/components/admin/AdminLayout';
import { cn } from '@/lib/utils';

const adminStats = [
  { name: 'Total Affiliates', value: '1,245', icon: Users, color: 'text-blue-400', bg: 'bg-blue-400/10' },
  { name: 'Total Referrals', value: '8,432', icon: Briefcase, color: 'text-purple-400', bg: 'bg-purple-400/10' },
  { name: 'Pending Withdrawals', value: '₦1.2M', icon: Wallet, color: 'text-orange-400', bg: 'bg-orange-400/10' },
  { name: 'Fraud Alerts', value: '14', icon: AlertTriangle, color: 'text-red-400', bg: 'bg-red-400/10' },
];

export default function AdminOverview() {
  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {adminStats.map((stat, idx) => (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-950 p-6 rounded-2xl border border-slate-800 shadow-sm hover:border-slate-700 transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <div className={cn("p-3 rounded-xl", stat.bg)}>
                  <stat.icon className={cn("w-6 h-6", stat.color)} />
                </div>
                <div className="flex items-center text-xs font-bold px-2 py-1 rounded-full text-blue-400 bg-blue-400/10">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Live
                </div>
              </div>
              <p className="text-sm font-medium text-slate-500 mb-1">{stat.name}</p>
              <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Pending Withdrawals */}
          <div className="bg-slate-950 p-6 rounded-3xl border border-slate-800 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-white">Pending Withdrawals</h3>
              <button className="text-sm font-bold text-blue-400 hover:underline">View All</button>
            </div>
            <div className="space-y-4">
              {[
                { name: 'John Doe', amount: '₦25,000', bank: 'GTBank', date: '2 hours ago' },
                { name: 'Sarah Smith', amount: '₦15,000', bank: 'Zenith', date: '5 hours ago' },
                { name: 'Michael Chen', amount: '₦45,000', bank: 'Access', date: 'Yesterday' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white font-bold">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-white">{item.name}</p>
                      <p className="text-xs text-slate-500">{item.bank} • {item.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-white">{item.amount}</p>
                    <button className="text-[10px] font-bold text-blue-400 uppercase tracking-wider hover:underline">Approve</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fraud Monitor */}
          <div className="bg-slate-950 p-6 rounded-3xl border border-slate-800 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-white">Fraud Monitor</h3>
              <div className="flex items-center gap-2 text-xs font-bold text-red-400 bg-red-400/10 px-2 py-1 rounded-full">
                <ShieldAlert className="w-3 h-3" />
                High Risk
              </div>
            </div>
            <div className="space-y-4">
              {[
                { name: 'David Smith', reason: 'Self-referral detected', risk: 'High', date: '1 hour ago' },
                { name: 'Alice Brown', reason: 'Multiple accounts from same IP', risk: 'Medium', date: '3 hours ago' },
                { name: 'Bob Wilson', reason: 'Suspicious referral pattern', risk: 'Low', date: 'Yesterday' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-red-400/10 flex items-center justify-center text-red-400">
                      <AlertTriangle className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-white">{item.name}</p>
                      <p className="text-xs text-slate-500">{item.reason}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={cn(
                      "text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider",
                      item.risk === 'High' ? "bg-red-400/10 text-red-400" : 
                      item.risk === 'Medium' ? "bg-orange-400/10 text-orange-400" : "bg-blue-400/10 text-blue-400"
                    )}>
                      {item.risk}
                    </span>
                    <p className="text-[10px] text-slate-500 mt-1">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
