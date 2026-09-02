// src/pages/Contact.tsx
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiSend, FiAlertCircle } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

/* ─────────────────────────────────────────────
   EmailJS config — values come from .env
   Fill in .env:
     VITE_EMAILJS_SERVICE_ID
     VITE_EMAILJS_TEMPLATE_ID
     VITE_EMAILJS_PUBLIC_KEY
───────────────────────────────────────────── */
const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  as string;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  as string;

type Status = 'idle' | 'sending' | 'success' | 'error';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>('idle');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus('sending');
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus('success');
      formRef.current.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative flex items-center">

      {/* Purple radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed z-0"
        style={{
          right: '10%', top: '50%', transform: 'translateY(-50%)',
          width: '600px', height: '600px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(100,80,200,0.18) 0%, rgba(60,40,140,0.08) 45%, transparent 70%)',
        }}
      />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-8 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── LEFT ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <h1 className="font-playfair font-bold text-white leading-[1.07] tracking-tight text-[3rem] sm:text-[3.5rem]">
              Initiate<br />Connection.
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed max-w-[300px]">
              Engage with our intelligence team. We deploy precision solutions for complex technical architectures.
            </p>
            <div className="flex flex-col gap-3 mt-2">
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <div className="w-7 h-7 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center flex-shrink-0">
                  <FiMail className="w-3.5 h-3.5" />
                </div>
                <span>intelligence@nitytec.ai</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <div className="w-7 h-7 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center flex-shrink-0">
                  <FiMapPin className="w-3.5 h-3.5" />
                </div>
                <span>Global Node: San Francisco, CA</span>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: Form ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            {/* Corner brackets */}
            <span className="absolute top-0 left-0 w-5 h-px bg-white/25" />
            <span className="absolute top-0 left-0 h-5 w-px bg-white/25" />
            <span className="absolute top-0 right-0 w-5 h-px bg-white/25" />
            <span className="absolute top-0 right-0 h-5 w-px bg-white/25" />
            <span className="absolute bottom-0 left-0 w-5 h-px bg-white/25" />
            <span className="absolute bottom-0 left-0 h-5 w-px bg-white/25" />
            <span className="absolute bottom-0 right-0 w-5 h-px bg-white/25" />
            <span className="absolute bottom-0 right-0 h-5 w-px bg-white/25" />

            <div className="rounded-2xl bg-[#0d0d0d] border border-white/[0.08] p-7">

              {/* ── Success state ── */}
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 gap-4 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center">
                    <FiSend className="w-5 h-5 text-white" />
                  </div>
                  <p className="font-playfair text-2xl font-bold text-white">Signal Transmitted.</p>
                  <p className="text-gray-500 text-sm">We'll route a response to your comm link shortly.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-2 text-xs text-gray-600 hover:text-white transition-colors underline underline-offset-4"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                /* ── Form ── */
                <form ref={formRef} onSubmit={submit} className="flex flex-col gap-5">

                  {/* Error banner */}
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
                    >
                      <FiAlertCircle className="w-4 h-4 flex-shrink-0" />
                      Transmission failed. Please try again or email us directly.
                    </motion.div>
                  )}

                  {/* Row 1: Name + Email */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-semibold tracking-widest text-gray-500 uppercase">
                        &gt; Identification
                      </label>
                      {/* EmailJS template variable: {{from_name}} */}
                      <input
                        name="from_name"
                        required
                        disabled={status === 'sending'}
                        className="w-full bg-white text-black text-sm px-3 py-2.5 rounded-lg outline-none font-medium disabled:opacity-60"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-semibold tracking-widest text-gray-500 uppercase">
                        &gt; Comm Link
                      </label>
                      {/* EmailJS template variable: {{from_email}} */}
                      <input
                        name="from_email"
                        type="email"
                        required
                        disabled={status === 'sending'}
                        className="w-full bg-white text-black text-sm px-3 py-2.5 rounded-lg outline-none font-medium disabled:opacity-60"
                      />
                    </div>
                  </div>

                  {/* Row 2: Subject */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-semibold tracking-widest text-gray-500 uppercase">
                      &gt; Directive
                    </label>
                    {/* EmailJS template variable: {{subject}} */}
                    <input
                      name="subject"
                      required
                      disabled={status === 'sending'}
                      className="w-full bg-white text-black text-sm px-3 py-2.5 rounded-lg outline-none font-medium disabled:opacity-60"
                    />
                  </div>

                  {/* Row 3: Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-semibold tracking-widest text-gray-500 uppercase">
                      &gt; Transmission Data
                    </label>
                    {/* EmailJS template variable: {{message}} */}
                    <textarea
                      name="message"
                      required
                      rows={4}
                      disabled={status === 'sending'}
                      placeholder="Awaiting message payload..."
                      className="w-full bg-[#161616] border border-white/[0.08] text-gray-300 text-sm px-3 py-2.5 rounded-lg outline-none placeholder-gray-600 resize-none focus:border-white/20 transition-colors disabled:opacity-60"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#1c1c1e] border border-white/[0.08] text-white text-sm font-semibold tracking-widest uppercase hover:bg-[#252528] hover:border-white/15 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Transmitting...
                      </>
                    ) : (
                      <>
                        Transmit Signal
                        <FiSend className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
