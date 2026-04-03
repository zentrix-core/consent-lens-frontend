"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Globe, AlertTriangle, CheckCircle, TrendingUp } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function StatCards() {
  const [stats, setStats] = useState([
    { icon: Globe, label: "Total Scanned", value: "42", change: "Live", positive: true },
    { icon: AlertTriangle, label: "Risks Found", value: "3", change: "Caution Required", positive: false },
    { icon: CheckCircle, label: "Compliant Rate", value: "85%", change: "High Safety", positive: true },
    { icon: TrendingUp, label: "Avg. Score", value: "85", change: "/ 100", positive: true },
  ]);

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-4 w-full"
    >
      {stats.map((stat) => (
        <motion.div
          key={stat.label}
          variants={fadeUp}
          className="glass-card flex items-center justify-between rounded-2xl p-5"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.03] border border-white/[0.06] text-primary">
              <stat.icon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[12px] text-muted-foreground">{stat.label}</p>
              <p className="text-xl font-semibold tracking-tight text-foreground">
                {stat.value}
              </p>
            </div>
          </div>
          <span className={`text-[11px] font-medium ${stat.positive ? 'text-accent' : 'text-destructive'}`}>
            {stat.change}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}
