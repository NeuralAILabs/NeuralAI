'use client';

import { useState, useEffect, useCallback } from "react";
import { Cpu, Sliders, Activity, Minus, Plus, TrendingUp } from "lucide-react";

function getHiddenYCoord(idx: number, total: number) {
  const h = 220;
  if (total === 1) return h / 2;
  return (h / (total + 1)) * (idx + 1);
}

function activate(val: number, fn: string) {
  if (fn === "relu") return Math.max(0, val);
  if (fn === "tanh") return Math.tanh(val);
  return 1 / (1 + Math.exp(-val));
}

export default function NeuralLab() {
  const [hiddenCount, setHiddenCount] = useState(4);
  const [activationFn, setActivationFn] = useState<"sigmoid" | "relu" | "tanh">("sigmoid");
  const [mode, setMode] = useState<"ielts" | "admissions">("ielts");
  const [inputs, setInputs] = useState({ a: 0.75, b: 0.6, c: 0.8 });
  const [weights, setWeights] = useState<Record<string, number>>({});
  const [training, setTraining] = useState(false);
  const [epoch, setEpoch] = useState(12);
  const [loss, setLoss] = useState(0.42);
  const [lossHistory, setLossHistory] = useState([0.65, 0.58, 0.52, 0.48, 0.45, 0.42]);
  const [selectedSynapse, setSelectedSynapse] = useState<string | null>(null);

  const labels = mode === "ielts"
    ? { a: "Grammar & Accuracy", b: "Lexical Resources", c: "Coherence & Cohesion", out: "Band Score", fmt: (v: number) => (Math.round((4.5 + v * 4.5) * 2) / 2).toFixed(1) + " Bands" }
    : { a: "Academic GPA", b: "Language Score", c: "SOP Quality", out: "Admission Confidence", fmt: (v: number) => Math.round(v * 100) + "%" };

  useEffect(() => {
    const w: Record<string, number> = {};
    for (let i = 0; i < 3; i++)
      for (let j = 0; j < hiddenCount; j++)
        w[`i${i}->h${j}`] = Number((Math.random() * 2 - 1).toFixed(2));
    for (let j = 0; j < hiddenCount; j++)
      w[`h${j}->o`] = Number((Math.random() * 2 - 1).toFixed(2));
    setWeights(w);
    setLoss(0.35 + Math.random() * 0.15);
    setEpoch(Math.floor(Math.random() * 50) + 10);
    setLossHistory([0.62, 0.55, 0.48, 0.42, 0.38, 0.35]);
    setSelectedSynapse(null);
  }, [hiddenCount, mode]);

  const calculateOutput = useCallback(() => {
    const x = [inputs.a, inputs.b, inputs.c];
    const hidden: number[] = [];
    for (let j = 0; j < hiddenCount; j++) {
      const sum = x[0] * (weights[`i0->h${j}`] || 0) + x[1] * (weights[`i1->h${j}`] || 0) + x[2] * (weights[`i2->h${j}`] || 0);
      hidden.push(activate(sum, activationFn));
    }
    let sum = 0;
    hidden.forEach((v, i) => sum += v * (weights[`h${i}->o`] || 0));
    return Math.max(0, Math.min(1, activate(sum, activationFn)));
  }, [inputs, weights, hiddenCount, activationFn]);

  const outputVal = calculateOutput();

  const handleTrain = () => {
    if (training) return;
    setTraining(true);
    let p = 0;
    const iv = setInterval(() => {
      setWeights(prev => {
        const w: Record<string, number> = {};
        Object.entries(prev).forEach(([k, v]) => { w[k] = Number(Math.max(-2, Math.min(2, (v as number) + (Math.random() * 0.16 - 0.08))).toFixed(2)); });
        return w;
      });
      setLoss(prev => { const nl = Math.max(0.04, prev - Math.random() * 0.03); setLossHistory(h => [...h.slice(-8), nl]); return Number(nl.toFixed(3)); });
      setEpoch(prev => prev + 1);
      p++;
      if (p >= 10) { clearInterval(iv); setTraining(false); }
    }, 120);
  };

  const inputYCoords = [50, 115, 180];
  const outputYCoord = 115;

  return (
    <div id="neural-lab" className="bg-[#fdfaf3] border border-[#e2d5c0] rounded-3xl p-6 md:p-8 space-y-8 shadow-sm">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-[#e2d5c0]/50 pb-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/5 border border-primary/15 text-xs font-bold text-primary">
            <Cpu className="w-3.5 h-3.5 animate-pulse" /> Neural AI Sandbox Lab
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-foreground font-serif">
            Interactive Synapse Builder
          </h3>
          <p className="text-sm text-foreground/65 max-w-xl">
            Design and train a feedforward neural network locally. Watch weights calibrate in real-time.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="text-xs font-bold text-foreground/45 uppercase tracking-wider">Predictor:</div>
          <div className="bg-white border border-[#e2d5c0] rounded-xl p-1 flex">
            {(["ielts", "admissions"] as const).map((m) => (
              <button key={m} onClick={() => setMode(m)}
                className={`text-xs font-bold uppercase tracking-wider px-3.5 py-2 rounded-lg transition-all ${mode === m ? "bg-primary text-on-primary" : "text-foreground/60 hover:text-foreground"}`}
              >
                {m === "ielts" ? "IELTS Assessor" : "Admissions Matcher"}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 space-y-6 bg-white border border-[#e2d5c0]/60 rounded-2xl p-5 shadow-sm">
          <div className="border-b border-[#e2d5c0]/40 pb-3">
            <span className="text-[11px] uppercase tracking-widest font-extrabold text-[#0F766E] flex items-center gap-1">
              <Sliders className="w-3.5 h-3.5" /> Configure Input Signals
            </span>
          </div>
          <div className="space-y-4">
            {(["a", "b", "c"] as const).map((key) => (
              <div key={key} className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold text-foreground">
                  <span>{labels[key]}</span>
                  <span className="font-mono text-[#0F766E] font-bold">{Math.round(inputs[key] * 100)}%</span>
                </div>
                <input
                  type="range" min="0.1" max="1" step="0.05"
                  value={inputs[key]}
                  onChange={(e) => setInputs(prev => ({ ...prev, [key]: parseFloat(e.target.value) }))}
                  className="w-full accent-primary bg-gray-100 rounded-lg cursor-pointer h-1.5"
                />
              </div>
            ))}
          </div>
          <div className="pt-4 border-t border-[#e2d5c0]/40 space-y-4">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-foreground/50 uppercase tracking-wider">Hidden Neurons</span>
              <div className="flex items-center gap-2">
                <button disabled={hiddenCount <= 2} onClick={() => setHiddenCount(prev => prev - 1)}
                  className="w-6 h-6 rounded bg-[#f7f1e4] flex items-center justify-center text-foreground font-bold text-xs hover:bg-[#e2d5c0] disabled:opacity-40"
                ><Minus className="w-3.5 h-3.5" /></button>
                <span className="font-mono font-bold text-foreground">{hiddenCount}</span>
                <button disabled={hiddenCount >= 6} onClick={() => setHiddenCount(prev => prev + 1)}
                  className="w-6 h-6 rounded bg-[#f7f1e4] flex items-center justify-center text-foreground font-bold text-xs hover:bg-[#e2d5c0] disabled:opacity-40"
                ><Plus className="w-3.5 h-3.5" /></button>
              </div>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-foreground/50 uppercase tracking-wider">Activation</span>
              <select value={activationFn} onChange={(e: any) => setActivationFn(e.target.value)}
                className="bg-[#fdfaf3] border border-[#e2d5c0] rounded-lg px-2 py-1 text-xs text-foreground"
              >
                <option value="sigmoid">Sigmoid</option>
                <option value="relu">ReLU</option>
                <option value="tanh">Tanh</option>
              </select>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 bg-white border border-[#e2d5c0] rounded-3xl p-5 shadow-sm h-[340px] relative">
          <div className="flex justify-between items-center border-b border-[#e2d5c0]/40 pb-2 mb-2">
            <span className="text-[11px] uppercase tracking-widest font-extrabold text-[#0F766E] flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5" /> Live Signal Topology
            </span>
            <span className="text-[9px] text-primary font-bold bg-primary/5 px-2 py-0.5 rounded-sm uppercase">Click line to select</span>
          </div>
          <svg className="w-full h-[260px]" viewBox="0 0 340 240">
            {inputYCoords.map((yIn, i) =>
              Array.from({ length: hiddenCount }).map((_, h) => {
                const yHid = getHiddenYCoord(h, hiddenCount);
                const key = `i${i}->h${h}`;
                const w = weights[key] || 0;
                const sel = selectedSynapse === key;
                return (
                  <path key={key} d={`M 40,${yIn} C 100,${yIn} 100,${yHid} 160,${yHid}`}
                    stroke={sel ? "#FF8C00" : w >= 0 ? "rgba(15,118,110,0.4)" : "rgba(176,66,26,0.4)"}
                    strokeWidth={1 + Math.abs(w) * 2} fill="none" className="cursor-pointer hover:stroke-amber-500 transition-all"
                    onClick={() => setSelectedSynapse(key)}
                  />
                );
              })
            )}
            {Array.from({ length: hiddenCount }).map((_, h) => {
              const yHid = getHiddenYCoord(h, hiddenCount);
              const key = `h${h}->o`;
              const w = weights[key] || 0;
              const sel = selectedSynapse === key;
              return (
                <path key={key} d={`M 160,${yHid} C 220,${yHid} 220,${outputYCoord} 280,${outputYCoord}`}
                  stroke={sel ? "#FF8C00" : w >= 0 ? "rgba(15,118,110,0.45)" : "rgba(176,66,26,0.45)"}
                  strokeWidth={1 + Math.abs(w) * 2.5} fill="none" className="cursor-pointer hover:stroke-amber-500 transition-all"
                  onClick={() => setSelectedSynapse(key)}
                />
              );
            })}
            {inputYCoords.map((y, i) => (
              <circle key={`in-${i}`} cx="40" cy={y} r="12" fill="#0F766E" fillOpacity={0.2 + [inputs.a, inputs.b, inputs.c][i] * 0.8} stroke="#0F766E" strokeWidth="1.5" />
            ))}
            {inputYCoords.map((y, i) => (
              <text key={`in-t-${i}`} x="40" y={y + 3} textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">X{i}</text>
            ))}
            {Array.from({ length: hiddenCount }).map((_, i) => (
              <circle key={`hid-${i}`} cx="160" cy={getHiddenYCoord(i, hiddenCount)} r="10" fill="#d97a3f" fillOpacity="0.3" stroke="#d97a3f" strokeWidth="1.5" />
            ))}
            {Array.from({ length: hiddenCount }).map((_, i) => (
              <text key={`hid-t-${i}`} x="160" y={getHiddenYCoord(i, hiddenCount) + 3} textAnchor="middle" fill="#d97a3f" fontSize="9" fontWeight="bold">H{i}</text>
            ))}
            <circle cx="280" cy={outputYCoord} r="14" fill="#b0421a" fillOpacity={0.3 + outputVal * 0.7} stroke="#b0421a" strokeWidth="2" />
            <text x="280" y={outputYCoord + 3} textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Y</text>
          </svg>
        </div>

        <div className="lg:col-span-3 space-y-4">
          <div className="bg-white border border-[#e2d5c0] rounded-2xl p-5 shadow-sm text-center space-y-3">
            <span className="text-[11px] uppercase tracking-widest font-extrabold text-[#0F766E] block">{labels.out}</span>
            <div className="text-3xl font-extrabold text-foreground font-serif">{labels.fmt(outputVal)}</div>
            <div className="w-full bg-[#f7f1e4] rounded-full h-2 mt-2">
              <div className="bg-primary h-2 rounded-full transition-all duration-300" style={{ width: `${outputVal * 100}%` }} />
            </div>
          </div>
          <button onClick={handleTrain} disabled={training}
            className="w-full py-3 bg-primary hover:bg-primary-hover disabled:opacity-50 text-on-primary rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
          >
            <TrendingUp className="w-4 h-4" /> {training ? "Training..." : `Train (${epoch} epochs)`}
          </button>
          <div className="bg-white border border-[#e2d5c0] rounded-2xl p-4 shadow-sm">
            <div className="flex justify-between text-[10px] text-foreground/50 font-semibold mb-2">
              <span>Loss: {loss.toFixed(3)}</span>
              <span>Epoch: {epoch}</span>
            </div>
            <div className="flex items-end gap-[2px] h-12">
              {lossHistory.map((v, i) => (
                <div key={i} className="flex-1 bg-primary/30 rounded-t"
                  style={{ height: `${(1 - v) * 100}%`, opacity: 0.4 + (i / lossHistory.length) * 0.6 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
