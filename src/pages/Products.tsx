// src/pages/Products.tsx
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiX, FiArrowRight } from 'react-icons/fi';
import * as THREE from 'three';

/* ─────────────────────────────────────────────
   Product data
───────────────────────────────────────────── */
interface Product {
  id: number;
  name: string;
  icon: string;
  price: string;
  description: string;
  features: string[];
  // orbital position (angle in radians, radius, vertical offset)
  angle: number;
  radius: number;
  yOffset: number;
}

const PRODUCTS: Product[] = [
  {
    id: 1, name: 'DataLens', icon: '◉', price: '$19/mo',
    description: 'Turn raw data into visual stories. Dashboards, charts, and reports in minutes.',
    features: ['Real-time dashboards', 'Custom chart builder', 'CSV / API import'],
    angle: 0.8, radius: 220, yOffset: -140,
  },
  {
    id: 2, name: 'CodePulse', icon: '⌘', price: '$24/mo',
    description: 'Real-time code review and suggestions directly inside your editor.',
    features: ['AI code review', 'Multi-language support', 'IDE integration'],
    angle: 1.8, radius: 260, yOffset: -60,
  },
  {
    id: 3, name: 'Vexa', icon: '✳', price: '$15/mo',
    description: 'Your personal AI assistant built for real work. Simplify tasks and stay ahead.',
    features: ['Natural language tasks', 'Calendar & email', 'Smart summaries'],
    angle: 3.2, radius: 200, yOffset: -80,
  },
  {
    id: 4, name: 'Dock', icon: '⊞', price: '$12/mo',
    description: 'All-in-one productivity dock for the browser. Bring tabs forward instantly.',
    features: ['Tab management', 'Snippet paste', 'AI send'],
    angle: 4.0, radius: 240, yOffset: 60,
  },
  {
    id: 5, name: 'TaskFlow', icon: '⬡', price: '$28/mo',
    description: 'Intelligent orchestration engine for complex business processes and autonomous agents.',
    features: ['Visual Workflow Builder', 'API Integrations', 'Agentic Logic'],
    angle: 5.0, radius: 230, yOffset: 80,
  },
  {
    id: 6, name: 'FlowBoard', icon: '◈', price: '$18/mo',
    description: 'All-in-one task management board for teams. Visualise work, track progress.',
    features: ['Kanban & Gantt', 'Team workspaces', 'Progress analytics'],
    angle: 2.4, radius: 250, yOffset: 100,
  },
];

/* ─────────────────────────────────────────────
   What We Do service cards
───────────────────────────────────────────── */
const SERVICES = [
  { icon: '🤖', title: 'Artificial Intelligence', desc: 'Custom LLM deployments, autonomous agent integrations, and workflow automation for complex data environments.' },
  { icon: '🌐', title: 'Web Architecture', desc: 'High-performance, scalable web applications built on modern frameworks, with enterprise standards and speed.' },
  { icon: '📊', title: 'Data Analytics', desc: 'Real-time processing pipelines, data warehousing and visualisation infrastructure for effective decision-making.' },
  { icon: '🚀', title: 'Product Development', desc: 'End-to-end product lifecycle management, from ideation through architecture to SaaS launch and iteration.' },
  { icon: '☁️', title: 'Cloud Services', desc: 'Multi-cloud architecture, container orchestration, and auto-scaling deployment strategies for maximum resilience.' },
];

/* ─────────────────────────────────────────────
   Three.js Orbital Ecosystem
───────────────────────────────────────────── */
const OrbitalScene: React.FC<{ onSelect: (p: Product) => void }> = ({ onSelect }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const nodeGroupRef = useRef<THREE.Group | null>(null);
  const rafRef = useRef<number>(0);
  const mouseRef = useRef<THREE.Vector2>(new THREE.Vector2(-999, -999));
  const nodesRef = useRef<{ mesh: THREE.Mesh; product: Product }[]>([]);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;
    const W = el.clientWidth;
    const H = el.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 2000);
    camera.position.set(0, 0, 500);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Ambient + point lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.3));
    const ptLight = new THREE.PointLight(0x7c6bff, 2, 800);
    ptLight.position.set(0, 0, 200);
    scene.add(ptLight);

    // Group for slow rotation
    const group = new THREE.Group();
    scene.add(group);
    nodeGroupRef.current = group;

    // Background floating orbs (purple blobs)
    const blobMat = new THREE.MeshBasicMaterial({ color: 0x4a3fa0 });
    const blobPositions = [
      [120, 160, -100], [-180, -120, -80], [80, -180, -120],
      [-60, 120, -60], [200, -60, -140], [-140, 180, -100],
    ];
    blobPositions.forEach(([x, y, z], i) => {
      const size = 14 + i * 6;
      const mesh = new THREE.Mesh(new THREE.SphereGeometry(size, 16, 16), blobMat.clone());
      mesh.position.set(x, y, z);
      (mesh.material as THREE.MeshBasicMaterial).transparent = true;
      (mesh.material as THREE.MeshBasicMaterial).opacity = 0.55 + i * 0.04;
      (mesh.material as THREE.MeshBasicMaterial).color.set(i % 2 === 0 ? 0x3a2f8f : 0x5a4fbf);
      group.add(mesh);
    });

    // Product nodes
    const nodes: { mesh: THREE.Mesh; product: Product }[] = [];
    PRODUCTS.forEach((p) => {
      const x = Math.cos(p.angle) * p.radius;
      const y = p.yOffset;
      const z = Math.sin(p.angle) * p.radius * 0.3;

      // Node circle
      const geo = new THREE.CircleGeometry(28, 48);
      const mat = new THREE.MeshBasicMaterial({
        color: 0x111120,
        transparent: true,
        opacity: 0.92,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(x, y, z);
      mesh.userData = { product: p, baseX: x, baseY: y, baseZ: z };

      // Ring border
      const ringGeo = new THREE.RingGeometry(26, 28, 48);
      const ringMat = new THREE.MeshBasicMaterial({ color: 0x3a3a5a, side: THREE.DoubleSide });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      mesh.add(ring);

      group.add(mesh);
      nodes.push({ mesh, product: p });
    });
    nodesRef.current = nodes;

    // Raycaster for click/hover
    const raycaster = new THREE.Raycaster();

    const handleClick = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / W) * 2 - 1;
      const y = -((e.clientY - rect.top) / H) * 2 + 1;
      raycaster.setFromCamera(new THREE.Vector2(x, y), camera);
      const hits = raycaster.intersectObjects(nodes.map((n) => n.mesh));
      if (hits.length > 0) {
        const hit = hits[0].object;
        const prod = hit.userData.product as Product;
        onSelect(prod);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      mouseRef.current.x = ((e.clientX - rect.left) / W) * 2 - 1;
      mouseRef.current.y = -((e.clientY - rect.top) / H) * 2 + 1;
    };

    el.addEventListener('click', handleClick);
    el.addEventListener('mousemove', handleMouseMove);

    // Animate
    let t = 0;
    const animate = () => {
      rafRef.current = requestAnimationFrame(animate);
      t += 0.003;

      // Slowly rotate whole group
      group.rotation.y = t * 0.15;

      // Check hover — highlight hovered node
      raycaster.setFromCamera(mouseRef.current, camera);
      const meshes = nodes.map((n) => n.mesh);
      const hovered = raycaster.intersectObjects(meshes);
      nodes.forEach(({ mesh }) => {
        const mat = mesh.material as THREE.MeshBasicMaterial;
        const isHovered = hovered.length > 0 && hovered[0].object === mesh;
        mat.color.set(isHovered ? 0x2a2a4a : 0x111120);
        // scale up slightly on hover
        const target = isHovered ? 1.12 : 1.0;
        mesh.scale.lerp(new THREE.Vector3(target, target, target), 0.12);
      });

      // Subtle float animation on nodes
      nodes.forEach(({ mesh }, i) => {
        mesh.position.y = mesh.userData.baseY + Math.sin(t * 1.2 + i * 0.9) * 6;
      });

      renderer.render(scene, camera);
    };
    animate();

    // Resize
    const handleResize = () => {
      if (!el) return;
      const w = el.clientWidth;
      const h = el.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      el.removeEventListener('click', handleClick);
      el.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, [onSelect]);

  return <div ref={mountRef} className="w-full h-full cursor-pointer" />;
};

/* ─────────────────────────────────────────────
   Product node labels overlay (HTML on top of canvas)
───────────────────────────────────────────── */
const NodeLabels: React.FC<{ onSelect: (p: Product) => void }> = ({ onSelect }) => (
  <div className="absolute inset-0 pointer-events-none">
    {PRODUCTS.map((p) => {
      // Approximate 2D positions matching the Three.js layout
      const cx = 50 + Math.cos(p.angle) * (p.radius / 6.5);
      const cy = 50 - (p.yOffset / 6.5);
      return (
        <button
          key={p.id}
          onClick={() => onSelect(p)}
          className="absolute flex flex-col items-center gap-1.5 pointer-events-auto group"
          style={{ left: `${cx}%`, top: `${cy}%`, transform: 'translate(-50%,-50%)' }}
        >
          <div className="w-12 h-12 rounded-full bg-[#111120] border border-[#3a3a5a] flex items-center justify-center text-white text-lg group-hover:border-[#6a5aff] group-hover:bg-[#1a1a30] transition-all duration-200 shadow-[0_0_20px_rgba(100,80,200,0.2)]">
            {p.icon}
          </div>
          <span className="text-[11px] text-gray-400 group-hover:text-white transition-colors font-medium">
            {p.name}
          </span>
        </button>
      );
    })}
  </div>
);

/* ─────────────────────────────────────────────
   Product detail panel — fixed overlay, safe on mobile
───────────────────────────────────────────── */
const DetailPanel: React.FC<{ product: Product | null; onClose: () => void }> = ({ product, onClose }) => (
  <AnimatePresence>
    {product && (
      /* Full-screen backdrop — fixed so it covers entire viewport */
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(4px)' }}
        onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 16 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-sm rounded-2xl bg-[#0e0e14] border border-white/[0.10] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.95)]"
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-7 h-7 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-gray-500 hover:text-white transition-colors"
          >
            <FiX className="w-3.5 h-3.5" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-11 h-11 rounded-xl bg-[#1c1c2e] border border-white/10 flex items-center justify-center text-white text-xl flex-shrink-0">
              {product.icon}
            </div>
            <div>
              <h3 className="font-playfair font-bold text-white text-xl leading-tight">{product.name}</h3>
              <p className="text-gray-500 text-xs mt-0.5">{product.price}</p>
            </div>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed">{product.description}</p>

          {/* Features */}
          <div className="mt-4">
            <p className="text-[10px] tracking-widest text-gray-600 uppercase mb-2.5">Key Features</p>
            <ul className="flex flex-col gap-2">
              {product.features.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm text-gray-300">
                  <span className="w-1 h-1 rounded-full bg-white/40 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <Link to="/contact" onClick={onClose}>
            <button className="mt-6 w-full py-3 rounded-xl bg-[#1e1e2e] border border-white/[0.08] text-white text-xs font-semibold tracking-widest uppercase hover:bg-[#2a2a3e] transition-colors flex items-center justify-center gap-2">
              Try Interactive <FiArrowRight className="w-3.5 h-3.5" />
            </button>
          </Link>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

/* ─────────────────────────────────────────────
   Main Products Page
───────────────────────────────────────────── */
const Products: React.FC = () => {
  const [selected, setSelected] = useState<Product | null>(null);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* ──────── HERO: Orbital Ecosystem ──────── */}
      <section className="relative w-full" style={{ height: '100vh', minHeight: '600px' }}>

        {/* Three.js canvas fills section */}
        <OrbitalScene onSelect={setSelected} />

        {/* HTML node labels on top */}
        <NodeLabels onSelect={setSelected} />

        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-playfair font-bold text-white text-[4.5rem] sm:text-[6rem] leading-none tracking-tight select-none"
            style={{ textShadow: '0 0 80px rgba(100,80,200,0.3)' }}
          >
            Ecosystem
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-2 text-[10px] tracking-[0.25em] text-gray-500 uppercase"
          >
            Precision Intelligence
          </motion.p>
        </div>

        {/* Product detail panel — renders outside section via fixed positioning */}
        <DetailPanel product={selected} onClose={() => setSelected(null)} />
      </section>

      {/* ──────── WHAT WE DO ──────── */}
      <section className="relative z-10 max-w-[1200px] mx-auto px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-playfair font-bold text-white text-[3rem] sm:text-[3.5rem] leading-[1.07] tracking-tight">
            What We Do
          </h2>
          <p className="mt-2 text-[10px] tracking-[0.2em] text-gray-600 uppercase">
            Precision Engineering &amp; Intelligence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-[#0a0a10] border border-white/[0.07] p-7 flex flex-col gap-4 hover:border-white/[0.14] transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-[#1a1a28] border border-white/[0.08] flex items-center justify-center text-xl">
                {s.icon}
              </div>
              <h3 className="font-playfair font-bold text-white text-xl leading-tight">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
