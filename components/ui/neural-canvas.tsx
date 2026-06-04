'use client';

import { useEffect, useRef } from 'react';

const PARTICLE_COUNT = 70;
const DOT_RADIUS = 2.2;
const DOT_OPACITY = 0.75;
const LINE_DISTANCE = 110;
const LINE_MAX_OPACITY = 0.5;
const REPULSION_RADIUS = 100;
const REPULSION_FORCE = 0.4;
const DAMPING = 0.97;
const BASE_SPEED = 0.45;
const COLOR = '176,66,26';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

function makeParticle(w: number, h: number): Particle {
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * BASE_SPEED * 2,
    vy: (Math.random() - 0.5) * BASE_SPEED * 2,
  };
}

function applyMouseRepulsion(p: Particle, mx: number, my: number) {
  const dx = p.x - mx;
  const dy = p.y - my;
  const dist = Math.hypot(dx, dy);
  if (dist < REPULSION_RADIUS && dist > 0) {
    const force = (REPULSION_RADIUS - dist) / REPULSION_RADIUS;
    p.vx += (dx / dist) * force * REPULSION_FORCE;
    p.vy += (dy / dist) * force * REPULSION_FORCE;
  }
}

function moveParticle(p: Particle, w: number, h: number) {
  p.vx *= DAMPING;
  p.vy *= DAMPING;
  p.x += p.vx;
  p.y += p.vy;
  if (p.x < 0 || p.x > w) p.vx *= -1;
  if (p.y < 0 || p.y > h) p.vy *= -1;
}

function drawConnections(ctx: CanvasRenderingContext2D, particles: Particle[]) {
  for (let a = 0; a < particles.length; a++) {
    for (let b = a + 1; b < particles.length; b++) {
      const dist = Math.hypot(
        particles[a].x - particles[b].x,
        particles[a].y - particles[b].y,
      );
      if (dist < LINE_DISTANCE) {
        ctx.beginPath();
        ctx.moveTo(particles[a].x, particles[a].y);
        ctx.lineTo(particles[b].x, particles[b].y);
        ctx.strokeStyle = `rgba(${COLOR},${(1 - dist / LINE_DISTANCE) * LINE_MAX_OPACITY})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }
    }
  }
}

function drawDots(ctx: CanvasRenderingContext2D, particles: Particle[]) {
  for (const p of particles) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, DOT_RADIUS, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${COLOR},${DOT_OPACITY})`;
    ctx.fill();
  }
}

export default function NeuralCanvas({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId: number;
    const mouse = { x: -9999, y: -9999 };
    let particles: Particle[] = [];

    function resize() {
      const w = canvas!.offsetWidth;
      const h = canvas!.offsetHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      ctx!.scale(dpr, dpr);
      particles = Array.from({ length: PARTICLE_COUNT }, () => makeParticle(w, h));
    }

    function draw() {
      const w = canvas!.offsetWidth;
      const h = canvas!.offsetHeight;
      ctx!.clearRect(0, 0, w, h);

      for (const p of particles) {
        applyMouseRepulsion(p, mouse.x, mouse.y);
        moveParticle(p, w, h);
      }

      drawConnections(ctx!, particles);
      drawDots(ctx!, particles);

      rafId = requestAnimationFrame(draw);
    }

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    function onMouseMove(e: MouseEvent) {
      const r = canvas!.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      if (x >= 0 && x <= r.width && y >= 0 && y <= r.height) {
        mouse.x = x;
        mouse.y = y;
      } else {
        mouse.x = -9999;
        mouse.y = -9999;
      }
    }

    window.addEventListener('mousemove', onMouseMove);

    draw();

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={className}
      style={{ display: 'block', width: '100%', height: '100%' }}
    />
  );
}
