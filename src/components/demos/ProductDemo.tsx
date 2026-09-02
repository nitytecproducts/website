// src/components/demos/ProductDemo.tsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FiX, FiMail, FiFileText, FiGitBranch, FiTwitter,
  FiBookmark, FiZap, FiCopy, FiChevronRight, FiCheck, FiGrid,
} from 'react-icons/fi';

/* ═══════════════════════════════════════════════════════════
   DOCK DEMO — Chrome-extension split-screen productivity dock
═══════════════════════════════════════════════════════════ */
const DOCK_EMAILS = [
  { from: 'Sarah Chen', subject: 'Q3 Budget Review — need your sign-off', time: '9:41 AM', unread: true },
  { from: 'GitHub', subject: '[nitytec/web] PR #42 merged by alexm', time: '9:22 AM', unread: true },
  { from: 'Marcus Lee', subject: 'Re: Product roadmap feedback', time: '8:55 AM', unread: false },
  { from: 'Notion', subject: 'Weekly digest: 4 pages updated', time: 'Yesterday', unread: false },
  { from: 'Stripe', subject: 'Invoice #1089 paid — $2,400.00', time: 'Yesterday', unread: false },
  { from: 'Jordan Patel', subject: 'Design system tokens — latest export', time: 'Mon', unread: false },
];

const DOCK_SNIPPETS = [
  { label: 'Thank you for reaching out!', text: 'Thank you for reaching out! I\'ll get back to you within 24 hours.' },
  { label: 'Meeting request', text: 'Would you be available for a 30-minute call this week to discuss further?' },
  { label: 'Follow-up', text: 'Following up on my previous message — happy to provide more context if needed.' },
  { label: 'Code review note', text: 'LGTM! Minor suggestion on line 42 — could simplify the logic slightly.' },
];

const DockDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Gmail' | 'Notion' | 'GitHub' | 'Twitter'>('Gmail');
  const [activeTool, setActiveTool] = useState<'Split View' | 'Snippets' | 'Send to AI' | 'Bookmarks'>('Split View');
  const [aiState, setAiState] = useState<'idle' | 'analyzing' | 'done'>('idle');
  const [aiResponse, setAiResponse] = useState('');
  const [copiedSnippet, setCopiedSnippet] = useState<number | null>(null);

  const handleSendToAI = () => {
    setActiveTool('Send to AI');
    setAiState('analyzing');
    setAiResponse('');
    setTimeout(() => {
      setAiState('done');
      setAiResponse('I found 2 action items: (1) Sarah Chen needs budget sign-off — her Q3 proposal is $48K, within approved range. (2) PR #42 introduces a breaking API change — recommend reviewing before next release.');
    }, 1800);
  };

  const handleSnippetClick = (i: number) => {
    setCopiedSnippet(i);
    setTimeout(() => setCopiedSnippet(null), 1400);
  };

  const TABS = ['Gmail', 'Notion', 'GitHub', 'Twitter'] as const;
  const TOOLS = ['Split View', 'Snippets', 'Send to AI', 'Bookmarks'] as const;

  return (
    <div className="flex flex-col h-full bg-[#1e1e2e] text-white select-none">
      {/* Browser chrome */}
      <div className="flex items-center gap-0 bg-[#2a2a3e] border-b border-white/[0.06] px-3 h-9 flex-shrink-0">
        <div className="flex items-center gap-1.5 mr-4">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setActiveTab(t)}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-t text-[11px] transition-colors ${
              activeTab === t ? 'bg-[#1e1e2e] text-white' : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            {t === 'Gmail' && <FiMail className="w-3 h-3" />}
            {t === 'Notion' && <FiFileText className="w-3 h-3" />}
            {t === 'GitHub' && <FiGitBranch className="w-3 h-3" />}
            {t === 'Twitter' && <FiTwitter className="w-3 h-3" />}
            {t}
          </button>
        ))}
      </div>

      {/* Dock toolbar */}
      <div className="flex items-center gap-1 px-4 py-2 bg-[#181828] border-b border-white/[0.06] flex-shrink-0">
        {TOOLS.map((t) => (
          <button
            key={t}
            onClick={() => t === 'Send to AI' ? handleSendToAI() : setActiveTool(t)}
            className={`px-3 py-1.5 rounded-lg text-[11px] font-medium transition-all ${
              activeTool === t
                ? 'bg-[#6a5aff] text-white shadow-[0_0_12px_rgba(106,90,255,0.4)]'
                : 'bg-white/[0.05] text-gray-400 hover:bg-white/[0.08] hover:text-white'
            }`}
          >
            {t}
          </button>
        ))}
        <div className="ml-auto flex items-center gap-1.5 text-[11px] text-gray-500">
          <FiZap className="w-3 h-3 text-[#6a5aff]" />
          Dock v2.1
        </div>
      </div>

      {/* Main content area */}
      <div className="flex flex-1 overflow-hidden relative">
        {activeTool === 'Split View' && (
          <>
            {/* Left panel — Gmail */}
            <div className="flex-1 border-r border-white/[0.06] overflow-y-auto">
              <div className="px-4 py-3 border-b border-white/[0.04] flex items-center justify-between">
                <span className="text-[12px] font-semibold text-white">Inbox</span>
                <span className="text-[11px] text-gray-500">2 unread</span>
              </div>
              {DOCK_EMAILS.map((e, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-3 px-4 py-3 border-b border-white/[0.03] hover:bg-white/[0.03] cursor-pointer ${e.unread ? 'bg-white/[0.02]' : ''}`}
                >
                  <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${e.unread ? 'bg-[#6a5aff]' : 'bg-transparent'}`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className={`text-[12px] truncate ${e.unread ? 'font-semibold text-white' : 'text-gray-400'}`}>{e.from}</span>
                      <span className="text-[10px] text-gray-600 flex-shrink-0 ml-2">{e.time}</span>
                    </div>
                    <p className="text-[11px] text-gray-500 truncate mt-0.5">{e.subject}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right panel — Notion */}
            <div className="flex-1 overflow-y-auto px-5 py-4">
              <h2 className="text-base font-bold text-white mb-1">Q3 Product Roadmap</h2>
              <p className="text-[11px] text-gray-500 mb-4">Last edited · 2 hours ago</p>
              <p className="text-[12px] text-gray-400 leading-relaxed mb-4">
                This document outlines the key priorities for Q3, covering all product lines under active development. Each item has been triaged and assigned to a team owner.
              </p>
              <h3 className="text-[12px] font-semibold text-white mb-2">Milestones</h3>
              {[
                { done: true, text: 'Finalize DataLens dashboard redesign' },
                { done: true, text: 'Ship CodePulse v1.4 with Go support' },
                { done: false, text: 'Launch Vexa mobile beta' },
                { done: false, text: 'Dock — AI context summariser' },
                { done: false, text: 'FlowBoard Gantt view (in progress)' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 mb-2">
                  <div className={`w-4 h-4 rounded flex items-center justify-center flex-shrink-0 ${item.done ? 'bg-[#6a5aff]' : 'border border-white/20'}`}>
                    {item.done && <FiCheck className="w-2.5 h-2.5" />}
                  </div>
                  <span className={`text-[12px] ${item.done ? 'line-through text-gray-600' : 'text-gray-300'}`}>{item.text}</span>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTool === 'Snippets' && (
          <div className="flex-1 overflow-y-auto px-5 py-4">
            <p className="text-[11px] text-gray-500 mb-4 tracking-wide uppercase">Saved Snippets — click to copy</p>
            {DOCK_SNIPPETS.map((s, i) => (
              <div
                key={i}
                onClick={() => handleSnippetClick(i)}
                className="mb-3 p-4 rounded-xl bg-[#111120] border border-white/[0.06] hover:border-white/[0.15] cursor-pointer transition-all group"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-semibold text-white">{s.label}</span>
                  <div className={`flex items-center gap-1 text-[10px] transition-colors ${copiedSnippet === i ? 'text-green-400' : 'text-gray-600 group-hover:text-gray-400'}`}>
                    {copiedSnippet === i ? <><FiCheck className="w-3 h-3" /> Copied</> : <><FiCopy className="w-3 h-3" /> Copy</>}
                  </div>
                </div>
                <p className="text-[11px] text-gray-500 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {activeTool === 'Send to AI' && (
          <div className="flex-1 flex flex-col items-center justify-center p-8">
            {aiState === 'analyzing' && (
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-[#6a5aff] border-t-transparent animate-spin" />
                <p className="text-sm text-gray-400">Analyzing your tabs…</p>
              </div>
            )}
            {aiState === 'done' && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md p-5 rounded-2xl bg-[#0e0e1e] border border-[#6a5aff]/30"
              >
                <div className="flex items-center gap-2 mb-3">
                  <FiZap className="w-4 h-4 text-[#6a5aff]" />
                  <span className="text-[11px] font-semibold text-[#6a5aff] uppercase tracking-wide">AI Summary</span>
                </div>
                <p className="text-[13px] text-gray-300 leading-relaxed">{aiResponse}</p>
              </motion.div>
            )}
            {aiState === 'idle' && (
              <div className="text-center">
                <FiZap className="w-8 h-8 text-[#6a5aff] mx-auto mb-3" />
                <p className="text-sm text-gray-400">Click "Send to AI" to analyze your open tabs</p>
              </div>
            )}
          </div>
        )}

        {activeTool === 'Bookmarks' && (
          <div className="flex-1 overflow-y-auto px-5 py-4">
            <p className="text-[11px] text-gray-500 mb-4 tracking-wide uppercase">Bookmarks</p>
            {[
              { title: 'Tailwind CSS Docs', url: 'tailwindcss.com', icon: '🎨' },
              { title: 'Linear — Issues', url: 'linear.app', icon: '📋' },
              { title: 'Vercel Dashboard', url: 'vercel.com/dashboard', icon: '▲' },
              { title: 'Figma — Design System', url: 'figma.com', icon: '🎭' },
              { title: 'AWS Console', url: 'console.aws.amazon.com', icon: '☁️' },
            ].map((b, i) => (
              <div key={i} className="flex items-center gap-3 mb-2 p-3 rounded-xl bg-[#111120] border border-white/[0.05] hover:border-white/[0.12] cursor-pointer transition-all">
                <span className="text-base">{b.icon}</span>
                <div>
                  <p className="text-[12px] text-white font-medium">{b.title}</p>
                  <p className="text-[10px] text-gray-600">{b.url}</p>
                </div>
                <FiChevronRight className="w-3.5 h-3.5 text-gray-600 ml-auto" />
              </div>
            ))}
          </div>
        )}

        {/* Floating mini dock */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-10">
          {[FiMail, FiBookmark, FiZap, FiFileText].map((Icon, i) => (
            <button key={i} className="w-8 h-8 rounded-full bg-[#2a2a3e] border border-white/[0.08] flex items-center justify-center text-gray-400 hover:text-white hover:border-[#6a5aff] transition-all hover:shadow-[0_0_10px_rgba(106,90,255,0.3)]">
              <Icon className="w-3.5 h-3.5" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};




/* ═══════════════════════════════════════════════════════════
   PRODUCT DEMO CONFIG MAP
═══════════════════════════════════════════════════════════ */
interface DemoConfig {
  id: string;
  name: string;
  icon: React.ReactNode;
  component: React.FC;
  subtitle: string;
}

const DEMO_CONFIGS: DemoConfig[] = [
  {
    id: 'Dock',
    name: 'Dock',
    subtitle: 'Split-screen browser productivity',
    icon: <FiGrid className="w-4 h-4" />,
    component: DockDemo,
  }
];

/* ═══════════════════════════════════════════════════════════
   PRODUCT DEMO — Main export
═══════════════════════════════════════════════════════════ */
interface ProductDemoProps {
  productId: string | null;
  onClose: () => void;
}

const ProductDemo: React.FC<ProductDemoProps> = ({ productId, onClose }) => {
  const config = DEMO_CONFIGS.find(
    (d) => d.id.toLowerCase() === (productId ?? '').toLowerCase()
  );

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  if (!productId || !config) return null;

  const DemoComponent = config.component;

  return (
    <motion.div
      key={productId}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 bg-black flex flex-col"
    >
      {/* Top bar */}
      <motion.div
        initial={{ y: -8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.25, delay: 0.05 }}
        className="flex items-center gap-3 px-5 py-3.5 bg-[#0d0d0d] border-b border-white/[0.08] flex-shrink-0"
      >
        {/* Product identity */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#1a1a2e] border border-white/[0.08] flex items-center justify-center text-[#6a5aff]">
            {config.icon}
          </div>
          <div>
            <p className="text-sm font-semibold text-white leading-tight">{config.name}</p>
            <p className="text-[10px] text-gray-600">{config.subtitle}</p>
          </div>
        </div>

        {/* Live badge */}
        <div className="flex items-center gap-1.5 ml-4 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] text-emerald-400 font-medium">Interactive Demo</span>
        </div>

        {/* Keyboard hint */}
        <div className="hidden sm:flex items-center gap-1.5 ml-4 text-[10px] text-gray-700">
          <kbd className="px-1.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] font-mono text-[9px]">ESC</kbd>
          <span>to exit</span>
        </div>

        {/* Exit button */}
        <button
          onClick={onClose}
          className="ml-auto flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.05] border border-white/[0.08] text-sm text-gray-300 hover:text-white hover:bg-white/[0.08] transition-all group"
        >
          <FiX className="w-3.5 h-3.5 group-hover:rotate-90 transition-transform duration-200" />
          <span className="text-[12px] font-medium">Exit Demo</span>
        </button>
      </motion.div>

      {/* Demo content */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="flex-1 overflow-hidden"
      >
        <DemoComponent />
      </motion.div>
    </motion.div>
  );
};

export default ProductDemo;
export type { ProductDemoProps };
