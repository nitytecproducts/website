// src/pages/Solutions.tsx  — About Us
import React from 'react';
import { motion } from 'framer-motion';

/* ── animated progress bar ── */
const Bar: React.FC<{ color: string; width: string; delay?: number }> = ({ color, width, delay = 0 }) => (
  <motion.div
    className="h-1.5 rounded-full"
    style={{ background: color }}
    initial={{ width: 0 }}
    animate={{ width }}
    transition={{ duration: 1.2, delay, ease: 'easeOut' }}
  />
);

/* ── Data Synapse card (top-right visual) ── */
const DataSynapseCard: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, y: 32, rotate: -3 }}
    animate={{ opacity: 1, y: 0, rotate: -3 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="relative w-[280px] sm:w-[320px]"
    style={{ transformOrigin: 'center' }}
  >
    {/* shadow card behind */}
    <div
      className="absolute inset-0 rounded-2xl bg-[#111]"
      style={{ transform: 'translate(10px, 10px) rotate(3deg)', zIndex: 0 }}
    />
    {/* main card */}
    <div className="relative z-10 rounded-2xl bg-[#111] border border-white/[0.09] p-6 flex flex-col gap-4">
      {/* icon */}
      <div className="w-10 h-10 rounded-xl bg-[#1e1e1e] border border-white/10 flex items-center justify-center">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.8">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      </div>

      <div>
        <h3 className="font-playfair font-bold text-white text-xl leading-tight">Data Synapse</h3>
        <p className="mt-1 text-gray-500 text-xs">Real-time processing nodes activated.</p>
      </div>

      {/* progress bars */}
      <div className="flex flex-col gap-2.5 mt-1">
        <Bar color="rgba(168,156,239,0.9)" width="75%" delay={0.6} />
        <Bar color="rgba(230,180,100,0.7)" width="55%" delay={0.8} />
        <Bar color="rgba(255,255,255,0.15)" width="40%" delay={1.0} />
      </div>
    </div>
  </motion.div>
);

/* ── mission quote card ── */
const MissionCard: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, x: 32 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.75, delay: 0.15 }}
    viewport={{ once: true }}
    className="rounded-2xl bg-[#0e0e0e] border border-white/[0.08] p-7 max-w-[420px]"
  >
    <p className="text-gray-200 text-sm leading-relaxed">
      To seamlessly integrate AI into the core workflows of modern enterprises, transforming abstract potential into
      concrete, measurable efficiency. We believe in software that adapts to the human, not the other way around.
    </p>
    <p className="mt-5 text-[10px] tracking-widest text-gray-600 uppercase">— Core Directive</p>
  </motion.div>
);

/* ── principle row ── */
const principles = [
  {
    num: '01',
    title: 'Precision by Default',
    desc: 'Every decision, every line, every interaction is deliberate. We build with intention, not iteration.',
  },
  {
    num: '02',
    title: 'Human-Adaptive Systems',
    desc: 'Our tools mould to the way people think and work — not the other way around.',
  },
  {
    num: '03',
    title: 'Continuous Intelligence',
    desc: 'Products that learn, evolve, and improve as your organisation grows. Static is the enemy.',
  },
];

const Solutions: React.FC = () => (
  <div className="min-h-screen bg-black text-white overflow-x-hidden">

    {/* subtle purple ambient glow — top right */}
    <div
      aria-hidden="true"
      className="pointer-events-none fixed z-0"
      style={{
        right: '-5%',
        top: '0',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(100,80,200,0.14) 0%, transparent 65%)',
        borderRadius: '50%',
      }}
    />

    {/* ──────────────── HERO SECTION ──────────────── */}
    <section className="relative z-10 max-w-[1200px] mx-auto px-8 pt-28 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6 pt-4"
        >
          <h1 className="font-playfair font-bold text-white leading-[1.07] tracking-tight text-[3rem] sm:text-[3.5rem]">
            Engineering<br />Intelligence.
          </h1>

          <div className="border-l-2 border-white/[0.08] pl-4 max-w-[380px]">
            <p className="text-gray-400 text-sm leading-relaxed">
              We build tools that reduce repetitive work, empowering teams to focus on profound, creative
              problem-solving. Precision isn't a feature; it's our foundation.
            </p>
          </div>
        </motion.div>

        {/* RIGHT — Data Synapse card */}
        <div className="flex justify-center lg:justify-end pt-4">
          <DataSynapseCard />
        </div>
      </div>
    </section>

    {/* ──────────────── MISSION SECTION ──────────────── */}
    <section className="relative z-10 max-w-[1200px] mx-auto px-8 py-20 border-t border-white/[0.05]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT label + heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col gap-5"
        >
          <p className="text-[10px] tracking-widest text-gray-600 uppercase font-medium">
            01 / The Mission
          </p>
          <h2 className="font-playfair font-bold text-white leading-[1.07] tracking-tight text-[3rem] sm:text-[3.5rem]">
            Elevate<br />Human<br />Potential.
          </h2>
        </motion.div>

        {/* RIGHT — quote card */}
        <MissionCard />
      </div>
    </section>

    {/* ──────────────── PRINCIPLES SECTION ──────────────── */}
    <section className="relative z-10 max-w-[1200px] mx-auto px-8 py-20 border-t border-white/[0.05]">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-[10px] tracking-widest text-gray-600 uppercase font-medium mb-12"
      >
        02 / Core Principles
      </motion.p>

      <div className="flex flex-col gap-0">
        {principles.map((p, i) => (
          <motion.div
            key={p.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-[80px_1fr_1fr] gap-6 py-8 border-b border-white/[0.06] last:border-0"
          >
            <span className="text-[11px] tracking-widest text-gray-600 font-medium pt-1">{p.num}</span>
            <h3 className="font-playfair font-bold text-white text-xl leading-tight">{p.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>


  </div>
);

export default Solutions;
