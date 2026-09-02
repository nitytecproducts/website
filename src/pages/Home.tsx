// src/pages/Home.tsx
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FiArrowUpRight,
  FiRefreshCw,
  FiZap,
  FiUser,
  FiChevronLeft,
  FiChevronRight,
} from 'react-icons/fi';

/* ─────────── card data ─────────── */
const products = [
  { id: 1, name: 'GCP Simulator', badge: 'LIVE DEMO',    category: 'Tool',        icon: '⬡', description: 'Learn, practice and simulate Google Cloud environments without limits.' },
  { id: 2, name: 'Dock',          badge: 'LIVE DEMO',    category: 'Extension',   icon: '⊞', description: 'All-in-one productivity dock for the browser. Bring tabs forward, paste snippets, and send anything to AI instantly.' },
  { id: 3, name: 'DataLens',      badge: 'INTERACTIVE',  category: 'Analytics',   icon: '◉', description: 'Turn raw data into visual stories. Dashboards, charts, and reports in minutes.' },
  { id: 4, name: 'Vexa',          badge: 'INTERACTIVE',  category: 'AI Assistant',icon: '✳', description: 'Your personal AI assistant built for real work. Simplify tasks and stay ahead.' },
  { id: 5, name: 'FlowBoard',     badge: 'INTERACTIVE',  category: 'Productivity',icon: '◈', description: 'All-in-one task management board for teams. Visualise work, track progress, and ship faster.' },
  { id: 6, name: 'CodePulse',     badge: 'LIVE DEMO',    category: 'Extension',   icon: '⌘', description: 'Real-time code review and suggestions directly inside your editor. Ship quality code faster.' },
];

/* ─────────── card dimensions (px) ─────────── */
const C_W  = 272;  // center card width
const S_W  = 234;  // side card width
const C_H  = 440;  // center card min-height
const S_H  = 360;  // side card min-height
// side card translate: 52% of S_W ≈ 122px  →  side card left edge from stage center ≈ 122+117=239px
const SIDE_OFFSET = 240; // px from center to side-card center

/* ─────────── vertical lines at card edges ─────────── */
// 4 lines: left edge of left card, both edges of center card, right edge of right card
// All extend above & below the stage, clipped within this component's bounds.
// Positions from stage center (STAGE_W/2 = 310px):
//   Left card  (w=234, center=-240): left edge = -357px, right edge = -123px
//   Center card(w=272, center=0):    left edge = -136px, right edge = +136px
//   Right card (w=234, center=+240): left edge = +123px, right edge = +357px
// Lines 2 (-136) and 3 (+136) are the two lines flanking the center card.
const CARD_EDGE_LINES = [-357, -136, 136, 357];

const StageVerticalLines: React.FC = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute z-0"
    style={{ left: 0, right: 0, top: '-80px', bottom: '-40px' }}
  >
    {CARD_EDGE_LINES.map((offset) => (
      <div
        key={offset}
        className="absolute top-0 bottom-0 w-px"
        style={{
          left: `calc(50% + ${offset}px)`,
          background:
            'linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.12) 10%, rgba(255,255,255,0.12) 90%, transparent 100%)',
        }}
      />
    ))}
  </div>
);

/* ─────────── product card ─────────── */
interface CardProps { product: typeof products[0]; position: 'left'|'center'|'right'|'hidden'; }

const ProductCard: React.FC<CardProps> = ({ product, position }) => {
  const c = position === 'center';
  const styles: Record<string, string> = {
    left:   `scale-[0.86] opacity-50 z-10`,
    center: `scale-100   opacity-100 z-20`,
    right:  `scale-[0.86] opacity-50 z-10`,
    hidden: `scale-[0.7]  opacity-0  z-0 pointer-events-none`,
  };
  // Horizontal translation is handled via translateX directly
  const tx: Record<string, string> = {
    left:   `translateX(calc(-50% - ${SIDE_OFFSET}px))`,
    center: `translateX(-50%)`,
    right:  `translateX(calc(-50% + ${SIDE_OFFSET}px))`,
    hidden: `translateX(-50%)`,
  };

  return (
    <div
      className={`absolute top-0 left-1/2 transition-all duration-500 ease-in-out ${styles[position]}`}
      style={{ width: c ? `${C_W}px` : `${S_W}px`, transform: tx[position] }}
    >
      <div
        className={`rounded-2xl flex flex-col gap-4 border ${
          c ? 'bg-[#111] border-white/15 shadow-[0_20px_80px_rgba(0,0,0,0.9)]'
            : 'bg-[#0c0c0c] border-white/[0.07]'
        }`}
        style={{ padding: c ? '24px' : '18px', minHeight: c ? `${C_H}px` : `${S_H}px` }}
      >
        <span className="self-start text-[9px] font-semibold tracking-widest text-gray-500 border border-white/[0.08] px-2 py-0.5 rounded-full">
          ● {product.badge}
        </span>
        <div className={`rounded-xl bg-[#1c1c1c] border border-white/10 flex items-center justify-center text-white flex-shrink-0 ${c ? 'w-14 h-14 text-2xl' : 'w-10 h-10 text-lg'}`}>
          {product.icon}
        </div>
        <h3 className={`font-playfair font-bold text-white leading-tight ${c ? 'text-[2rem]' : 'text-lg'}`}>
          {product.name}
        </h3>
        <span className="self-start text-[10px] font-medium tracking-wider uppercase text-gray-400 border border-white/[0.08] px-2.5 py-1 rounded-full bg-white/[0.03]">
          {product.category}
        </span>
        <p className={`text-gray-400 leading-relaxed flex-1 ${c ? 'text-sm' : 'text-xs'}`}>
          {product.description}
        </p>
        <button className={`mt-auto flex items-center justify-between gap-2 rounded-xl border border-white/10 text-white font-medium transition-all duration-200 ${
          c ? 'px-4 py-3 bg-[#1a1a1a] hover:bg-[#222] text-sm'
            : 'px-3 py-2.5 bg-white/[0.04] hover:bg-white/[0.09] text-xs'
        }`}>
          Try Interactive
          <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
            <FiArrowUpRight className="w-3 h-3" />
          </span>
        </button>
      </div>
    </div>
  );
};

/* ─────────── carousel ─────────── */
// STAGE_W must be wide enough to show 3 cards without clipping
// Center card 272 + two side cards each ~117px visible = 272 + 234 = ~506 total visible
// Add breathing room → 620px
const STAGE_W = 620;
const STAGE_H = 470;
// Arrows sit exactly at: left/right of stage, vertically centered on side cards
const ARROW_TOP = S_H / 2; // 180px

const ProductCarousel: React.FC = () => {
  const [current, setCurrent] = useState(2);
  const pausedRef = useRef(false);
  const timerRef  = useRef<ReturnType<typeof setInterval>|null>(null);
  const total = products.length;

  const pos = (i: number): CardProps['position'] => {
    const p = (current - 1 + total) % total;
    const n = (current + 1) % total;
    if (i === current) return 'center';
    if (i === p)       return 'left';
    if (i === n)       return 'right';
    return 'hidden';
  };

  const next = useCallback(() => setCurrent(c => (c + 1) % total), [total]);
  const prev = useCallback(() => setCurrent(c => (c - 1 + total) % total), [total]);

  useEffect(() => {
    timerRef.current = setInterval(() => { if (!pausedRef.current) next(); }, 3200);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [next]);

  return (
    <div
      className="select-none flex flex-col items-center"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
    >
      {/* Row: arrow  ·  stage  ·  arrow — all inline so center is guaranteed */}
      <div className="flex items-center gap-4">
        {/* Prev */}
        <button onClick={prev} aria-label="Previous"
          className="flex-shrink-0 w-9 h-9 rounded-full bg-[#1a1a1a] border border-white/10
                     flex items-center justify-center text-white hover:bg-[#262626] transition-colors z-30"
          style={{ alignSelf: 'flex-start', marginTop: `${ARROW_TOP - 18}px` }}
        >
          <FiChevronLeft className="w-4 h-4" />
        </button>

        {/* Stage — fixed pixel size, overflow:visible so side cards show */}
        <div
          className="relative flex-shrink-0 overflow-visible"
          style={{ width: `${STAGE_W}px`, height: `${STAGE_H}px` }}
        >
          <StageVerticalLines />
          {products.map((p, i) => <ProductCard key={p.id} product={p} position={pos(i)} />)}
        </div>

        {/* Next */}
        <button onClick={next} aria-label="Next"
          className="flex-shrink-0 w-9 h-9 rounded-full bg-[#1a1a1a] border border-white/10
                     flex items-center justify-center text-white hover:bg-[#262626] transition-colors z-30"
          style={{ alignSelf: 'flex-start', marginTop: `${ARROW_TOP - 18}px` }}
        >
          <FiChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex items-center gap-1.5 mt-4">
        {products.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} aria-label={`Slide ${i+1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current ? 'w-5 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

/* ─────────── home page ─────────── */
const Home: React.FC = () => (
  <div className="min-h-screen bg-black text-white overflow-x-hidden relative">

    {/* Hero + Carousel */}
    <div className="relative z-10 max-w-[1280px] mx-auto px-8 pt-24 pb-0">
      <div className="flex flex-col lg:flex-row items-center lg:items-center gap-10 lg:gap-0">

        {/* LEFT hero — fixed 380px */}
        <div className="flex-shrink-0 w-full lg:w-[380px] flex flex-col justify-center">
          <motion.h1 initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7 }}
            className="font-playfair font-bold text-white leading-[1.07] tracking-tight text-[3rem] sm:text-[3.5rem]">
            Built to reduce<br />repetitive work.
          </motion.h1>
          <motion.p initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.18 }}
            className="mt-5 text-[13px] text-gray-400 leading-relaxed max-w-[210px]">
            Smart products that simplify the things you do again and again.
          </motion.p>
          <motion.div initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.3 }} className="mt-8">
            <Link to="/products">
              <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black text-sm font-semibold hover:bg-gray-100 transition-colors group">
                Explore Products
                <FiArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </div>

        {/* RIGHT carousel — takes remaining space, carousel self-centers */}
        <motion.div initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.12 }}
          className="flex-1 flex justify-center">
          <ProductCarousel />
        </motion.div>
      </div>
    </div>

    {/* Feature strip */}
    <div className="relative z-10 mt-8 mx-4 sm:mx-8 lg:mx-16 mb-10">
      <div className="rounded-2xl border border-white/[0.07] bg-[#080808] grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.07]">
        {[
          { icon: <FiUser className="w-5 h-5" />,      title: 'One Sign In',        desc: 'Access all Nitytec products with a single account.' },
          { icon: <FiZap className="w-5 h-5" />,       title: 'Built for Real Work', desc: 'Products that actually reduce repetitive work and save time.' },
          { icon: <FiRefreshCw className="w-5 h-5" />, title: 'Always Evolving',     desc: 'New products, tools and updates delivered regularly.' },
        ].map((f) => (
          <div key={f.title} className="flex items-start gap-4 p-6 sm:p-7">
            <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white flex-shrink-0">
              {f.icon}
            </div>
            <div>
              <p className="font-playfair font-semibold text-white text-sm">{f.title}</p>
              <p className="mt-1 text-gray-500 text-xs leading-relaxed">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Home;
