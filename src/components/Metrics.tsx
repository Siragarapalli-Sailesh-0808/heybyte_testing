
"use client";
import React, { useEffect, useRef } from "react";

interface MetricCardProps {
  value: number;
  label: string;
  duration?: number; // ms
}

const MetricCard: React.FC<MetricCardProps> = ({ value, label, duration = 2000 }) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let start = 0;
    const end = value;
    const increment = end / (duration / 20);
    let current = 0;
    let frame: number;

    function animate() {
      current += increment;
      if (ref.current) {
        ref.current.textContent = Math.floor(current).toString();
      }
      if (current < end) {
        frame = requestAnimationFrame(animate);
      } else {
        if (ref.current) ref.current.textContent = end.toString();
      }
    }
    animate();
    return () => cancelAnimationFrame(frame);
  }, [value, duration]);

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg ring-1 ring-gray-900/5 text-center flex flex-col items-center">
      <span className="text-4xl sm:text-5xl font-bold text-indigo-600 font-display">
        <span ref={ref}>0</span>+
      </span>
      <span className="mt-2 text-lg text-gray-700 font-nav">{label}</span>
    </div>
  );
};

const Metrics: React.FC = () => (
  <section className="py-16 bg-gray-50">
    <div className="max-w-5xl mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <MetricCard value={50} label="Projects" />
        <MetricCard value={25} label="Clients" />
        <MetricCard value={6} label="Years Experience" />
      </div>
    </div>
  </section>
);

export default Metrics;
