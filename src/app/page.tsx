"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Math } from "@/components/math";
import dynamic from "next/dynamic";
import { TypeformModal } from "@/components/typeform-modal";

// Lazy load heavy components
const HowItPerforms = dynamic(() => import("@/components/how-it-performs").then(mod => ({ default: mod.HowItPerforms })), {
  loading: () => <div className="min-h-[400px] flex items-center justify-center"><div className="text-muted-foreground">Loading benchmarks...</div></div>,
  ssr: false, // Disable SSR for this component since it fetches data
});
import {
  Server,
  Globe,
  Zap,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Brain,
  Network,
  Gauge,
  Layers,
  Code2,
  Atom,
  DollarSign,
  Lock,
  Activity,
  Github,
  MessageCircle,
  Infinity,
  Shield,
  Rocket,
  Building2,
  TrendingUp,
  Radio,
  GitBranch,
  CircuitBoard,
} from "lucide-react";

export default function Home() {
  const [isTypeformOpen, setIsTypeformOpen] = useState(false);

  return (
    <div className="relative" style={{ contentVisibility: 'auto' }}>
      <TypeformModal open={isTypeformOpen} onOpenChange={setIsTypeformOpen} />
      {/* Hero Section */}
      <section className="relative z-10 overflow-hidden pt-8 pb-16 sm:pt-8 sm:pb-16 lg:pt-16 lg:pb-24 hero-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="flex flex-col items-center gap-4 sm:gap-6 lg:gap-12 lg:flex-row lg:justify-between lg:items-start">
            <div className="flex-1 text-center lg:text-left lg:max-w-2xl space-y-6 sm:space-y-6 lg:space-y-10 pt-2 lg:pt-3">
              <div>
                <h1 className="hero-title text-5xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
                  <span className="block mb-2 sm:mb-2 lg:mb-3">Meet Your</span>
                  <span 
                    className="block mb-2 sm:mb-2 lg:mb-3 gradient-text-animated"
                    style={{
                      backgroundImage: 'linear-gradient(97deg, #3388EE, #8844CC 42%, #CC44AA 74%, #EE4433)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Personal
                  </span>
                  <span 
                    className="block gradient-text-animated"
                    style={{
                      backgroundImage: 'linear-gradient(97deg, #3388EE, #8844CC 42%, #CC44AA 74%, #EE4433)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Supercomputer
                  </span>
                </h1>
              </div>
              <div>
                <p className="hero-subtitle mx-auto max-w-2xl text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground lg:mx-0 leading-relaxed px-2 sm:px-0 font-medium sm:font-semibold mt-6 sm:mt-4 lg:mt-8 mb-6 sm:mb-4 lg:mb-5">
                  Accelerate your AI, scientific and application workloads with geometric virtual compute. Unbound by hardware.
                </p>
              </div>
              <div className="hero-cta flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-4 lg:justify-start px-2 sm:px-0 mt-6 sm:mt-5 lg:mt-7">
                <Button
                  asChild
                  size="lg"
                  className="group relative min-h-[48px] sm:h-12 overflow-hidden border-cyan/40 bg-cyan/15 px-6 text-base sm:text-lg font-semibold text-cyan-foreground hover:border-cyan/60 hover:bg-cyan/20 hover:shadow-lg hover:shadow-cyan/20 active:scale-[0.98] transition-transform touch-manipulation w-full sm:w-auto"
                >
                  <a href="#what-is-hologram" className="flex items-center justify-center">
                    <span className="relative z-10">
                      Learn More
                    </span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="group min-h-[48px] sm:h-12 border-2 border-purple-500 bg-black/50 px-6 text-base sm:text-lg font-semibold text-white hover:border-purple-400 hover:bg-black/70 hover:shadow-lg hover:shadow-purple/30 active:scale-[0.98] transition-transform touch-manipulation w-full sm:w-auto"
                >
                  <Link href="/benchmarks" className="flex items-center justify-center">
                    <span className="relative z-10">See Benchmarks</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
              <div className="hidden sm:flex mx-auto mt-4 sm:mt-6 lg:mt-16 flex-row flex-nowrap items-center justify-center gap-2 sm:gap-2.5 lg:gap-3 xl:gap-4 lg:mx-0 lg:justify-start pt-4 sm:pt-6 lg:pt-12 border-t border-border/10 px-2 sm:px-1">
                <div className="flex items-center gap-1 sm:gap-1.5 flex-shrink-0">
                  <CheckCircle2 className="h-3 w-3 sm:h-3.5 sm:w-3.5 lg:h-4 lg:w-4 xl:h-5 xl:w-5 2xl:h-6 2xl:w-6 flex-shrink-0 text-cyan" />
                  <span className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base 2xl:text-lg font-medium text-foreground whitespace-nowrap">Fast & energy-efficient</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-1.5 flex-shrink-0">
                  <CheckCircle2 className="h-3 w-3 sm:h-3.5 sm:w-3.5 lg:h-4 lg:w-4 xl:h-5 xl:w-5 2xl:h-6 2xl:w-6 flex-shrink-0 text-cyan" />
                  <span className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base 2xl:text-lg font-medium text-foreground whitespace-nowrap">Software-defined</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-1.5 flex-shrink-0">
                  <CheckCircle2 className="h-3 w-3 sm:h-3.5 sm:w-3.5 lg:h-4 lg:w-4 xl:h-5 xl:w-5 2xl:h-6 2xl:w-6 flex-shrink-0 text-cyan" />
                  <span className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base 2xl:text-lg font-medium text-foreground whitespace-nowrap">Open-source & modular</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block -mt-4">
              <div className="relative w-[480px] h-[480px] flex items-center justify-center">
                <img
                  src="/torus-hero.gif"
                  alt="Holographic Torus Animation"
                  className="w-full h-full object-contain"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  style={{
                    mixBlendMode: 'screen',
                    filter: 'contrast(1.1) brightness(1.1)',
                    contentVisibility: 'auto',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compatible With Section */}
      <section className="relative z-10 py-12 sm:py-16 lg:py-24 border-b border-border/10 border-t border-border/10 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14">
            {/* Backend-agnostic */}
            <div>
              <div className="text-center mb-4 sm:mb-6 lg:mb-8">
                <p className="text-xs sm:text-sm lg:text-base font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-muted-foreground">
                  Backend-agnostic
                </p>
              </div>
              <div className="grid grid-cols-3 sm:flex sm:flex-wrap sm:items-center sm:justify-center gap-3 sm:gap-4 lg:gap-6 xl:gap-8 lg:gap-12">
                <div className="flex flex-col items-center gap-1.5 sm:gap-2 lg:gap-2.5">
                  <Cpu className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-foreground" />
                  <span className="text-xs sm:text-sm lg:text-base font-medium text-foreground">CPU</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 sm:gap-2 lg:gap-2.5">
                  <Zap className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-foreground" />
                  <span className="text-xs sm:text-sm lg:text-base font-medium text-foreground">GPU</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 sm:gap-2 lg:gap-2.5">
                  <Brain className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-foreground" />
                  <span className="text-xs sm:text-sm lg:text-base font-medium text-foreground">TPU</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 sm:gap-2 lg:gap-2.5">
                  <Code2 className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-foreground" />
                  <span className="text-xs sm:text-sm lg:text-base font-medium text-foreground">WASM</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 sm:gap-2 lg:gap-2.5">
                  <Globe className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-foreground" />
                  <span className="text-xs sm:text-sm lg:text-base font-medium text-foreground">WebGPU</span>
                </div>
              </div>
            </div>
            
            {/* Compatible with */}
            <div>
              <div className="text-center mb-4 sm:mb-6 lg:mb-8">
                <p className="text-xs sm:text-sm lg:text-base font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-muted-foreground">
                  Compatible with
                </p>
              </div>
              <div className="grid grid-cols-3 sm:flex sm:flex-wrap sm:items-center sm:justify-center gap-3 sm:gap-4 lg:gap-6 xl:gap-8 lg:gap-12">
                <div className="flex flex-col items-center gap-1.5 sm:gap-2 lg:gap-2.5">
                  <Atom className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-foreground" />
                  <span className="text-xs sm:text-sm lg:text-base font-medium text-foreground">PyTorch</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 sm:gap-2 lg:gap-2.5">
                  <Network className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-foreground" />
                  <span className="text-xs sm:text-sm lg:text-base font-medium text-foreground">TensorFlow</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 sm:gap-2 lg:gap-2.5">
                  <Server className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-foreground" />
                  <span className="text-xs sm:text-sm lg:text-base font-medium text-foreground">ONNX</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 sm:gap-2 lg:gap-2.5">
                  <Gauge className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-foreground" />
                  <span className="text-xs sm:text-sm lg:text-base font-medium text-foreground">CUDA</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 sm:gap-2 lg:gap-2.5">
                  <Infinity className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-foreground" />
                  <span className="text-xs sm:text-sm lg:text-base font-medium text-foreground">+Other</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Hologram Section */}
      <section id="what-is-hologram" className="relative z-10 py-10 sm:py-12 lg:py-18">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3 sm:mb-4">
              <span
                className="gradient-text-animated"
                style={{
                  backgroundImage: 'linear-gradient(97deg, #3388EE, #8844CC 42%, #CC44AA 74%, #EE4433)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                What Is Hologram?
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mt-4 sm:mt-6">
              VIRTUAL IN-MEMORY COMPUTE
            </p>
          </div>
          
          <div className="space-y-8 leading-relaxed text-muted-foreground">
            <div className="space-y-6">
              <p className="leading-relaxed text-foreground">
                Hologram is a new software-defined foundation for computation. A high-performance virtual infrastructure built on a fundamentally new geometric computing paradigm.
              </p>
              
              <p className="leading-relaxed text-foreground">
                It provides a unified computational substrate for ultra-fast, energy-efficient general-purpose processing, including AI inference, across devices from the edge to the cloud.
              </p>
              
              <p className="leading-relaxed text-foreground">
                Hologram redefines the mathematical foundations of computation, transforming your existing hardware into a universal, efficient and secure virtual substrate for personal supercomputing.
              </p>
            </div>

            <div className="pt-8 border-t border-border/20">
              <p className="mb-6 text-xl font-semibold text-foreground">
                At its core, Hologram is both:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
                <div className="rounded-lg border-2 border-border/60 bg-[hsl(260_45%_6%)]/90 p-4 sm:p-6 hover:border-border/80 hover:bg-[hsl(260_45%_6%)]/95 shadow-lg shadow-black/10 transition-all duration-200">
                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-lg sm:text-xl lg:text-[22px] font-semibold mb-2 flex items-center gap-2">
                      <Atom className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                      <span
                        className="gradient-text-animated"
                        style={{
                          backgroundImage: 'linear-gradient(97deg, #3388EE, #8844CC 42%, #CC44AA 74%, #EE4433)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        Mathematical Breakthrough (ATLAS)
                      </span>
                    </h3>
                    <p className="mb-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Universal, lossless geometric computation framework derived from information's natural mathematical structure.
                    </p>
                    <Link
                      href="/research"
                      className="font-medium text-foreground hover:text-foreground/80 transition-colors inline-flex items-center gap-1 min-h-[44px] touch-manipulation"
                    >
                      Learn more
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                <div className="rounded-lg border-2 border-border/60 bg-[hsl(260_45%_6%)]/90 p-4 sm:p-6 hover:border-border/80 hover:bg-[hsl(260_45%_6%)]/95 shadow-lg shadow-black/10 transition-all duration-200">
                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-lg sm:text-xl lg:text-[22px] font-semibold mb-2 flex items-center gap-2">
                      <Zap className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                      <span
                        className="gradient-text-animated"
                        style={{
                          backgroundImage: 'linear-gradient(97deg, #3388EE, #8844CC 42%, #CC44AA 74%, #EE4433)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        Virtual High-Performance Hypervisor
                      </span>
                    </h3>
                    <p className="mb-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Software-defined implementation that turns expensive itterative computation into a constant-time <Math inline>O(1)</Math> in-memory lookup.
                    </p>
                    <Link
                      href="/how"
                      className="font-medium text-foreground hover:text-foreground/80 active:text-foreground/70 transition-colors inline-flex items-center gap-1 min-h-[44px] touch-manipulation"
                    >
                      Learn more
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* How it performs Section */}
          <HowItPerforms />

          {/* Why it matters Section */}
          <div className="mt-2 sm:mt-4 lg:mt-6 pt-4 sm:pt-6 lg:pt-8 border-t border-border/10">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
                <span
                  className="gradient-text-animated"
                  style={{
                    backgroundImage: 'linear-gradient(97deg, #3388EE, #8844CC 42%, #CC44AA 74%, #EE4433)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Why it matters?
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mt-6 uppercase">
                do more with less
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
              {/* Speed */}
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg border-2 border-border/50 bg-[hsl(260_45%_10%)]/95 backdrop-blur-sm flex-shrink-0 shadow-md shadow-black/10">
                    <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-foreground" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-[22px] font-semibold text-foreground">Lightning-fast performance</h3>
                </div>
                <div className="flex-1 flex flex-col">
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-2 sm:mb-3">
                    Run high performance workloads locally using Hologram's virtual compute layer.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Build, iterate and ship faster today.
                  </p>
                </div>
              </div>

              {/* Cost */}
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg border-2 border-border/50 bg-[hsl(260_45%_10%)]/95 backdrop-blur-sm flex-shrink-0 shadow-md shadow-black/10">
                    <DollarSign className="h-5 w-5 sm:h-6 sm:w-6 text-foreground" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-[22px] font-semibold text-foreground">
                    No expensive<br className="hidden sm:block" /> overhead
                  </h3>
                </div>
                <div className="flex-1 flex flex-col">
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-2 sm:mb-3">
                    Unlock high-performance compute on your existing hardware.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    No expensive GPUs or cloud fees.
                  </p>
                </div>
              </div>

              {/* Portability */}
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg border-2 border-border/50 bg-[hsl(260_45%_10%)]/95 backdrop-blur-sm flex-shrink-0 shadow-md shadow-black/10">
                    <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-foreground" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-[22px] font-semibold text-foreground">
                    Run seamlessly<br className="hidden sm:block" /> anywhere
                  </h3>
                </div>
                <div className="flex-1 flex flex-col">
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-2 sm:mb-3">
                    Integrates seamlessly with existing workflows and frameworks.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    No hardware or code changes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="relative z-10 py-12 sm:py-16 lg:py-24 border-t border-border/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3 sm:mb-4">
              <span
                className="gradient-text-animated"
                style={{
                  backgroundImage: 'linear-gradient(97deg, #3388EE, #8844CC 42%, #CC44AA 74%, #EE4433)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                What it does?
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mt-4 sm:mt-6">
              COMPILE ONCE, RUN ANYWHERE
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
              {/* Compile once */}
              <div className="group relative rounded-lg sm:rounded-xl border-2 border-border/60 bg-[hsl(260_45%_6%)]/90 p-5 sm:p-6 lg:p-8 space-y-4 sm:space-y-5 lg:space-y-6 shadow-lg shadow-black/10">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg border-2 border-border/60 bg-[hsl(260_45%_6%)]/90 flex-shrink-0">
                    <Code2 className="h-5 w-5 sm:h-6 sm:w-6 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold">
                    <span
                      className="gradient-text-animated"
                      style={{
                        backgroundImage: 'linear-gradient(97deg, #3388EE, #8844CC 42%, #CC44AA 74%, #EE4433)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      1. Compile Once
                    </span>
                  </h3>
                </div>
                
                <div className="space-y-3 sm:space-y-4 leading-relaxed">
                  <p className="text-base sm:text-lg text-foreground">
                    Hologram optimizes your AI models, scientific calculations, and data processing tasks into a highly efficient blueprint at build time.
                  </p>
                  <p className="text-base sm:text-lg text-muted-foreground">
                    All optimization happens upfront. Your workload becomes a streamlined plan ready to run at maximum speed.
                  </p>
                </div>
              </div>

              {/* Run anywhere */}
              <div className="group relative rounded-lg sm:rounded-xl border-2 border-border/60 bg-[hsl(260_45%_6%)]/90 p-5 sm:p-6 lg:p-8 space-y-4 sm:space-y-5 lg:space-y-6 shadow-lg shadow-black/10">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg border-2 border-border/60 bg-[hsl(260_45%_6%)]/90 flex-shrink-0">
                    <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold">
                    <span
                      className="gradient-text-animated"
                      style={{
                        backgroundImage: 'linear-gradient(97deg, #3388EE, #8844CC 42%, #CC44AA 74%, #EE4433)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      2. Run Anywhere
                    </span>
                  </h3>
                </div>
                
                <div className="space-y-3 sm:space-y-4 leading-relaxed">
                  <p className="text-base sm:text-lg text-foreground">
                    Your optimized workload runs seamlessly on any device. Laptop, graphics card, or web browser. No special hardware required.
                  </p>
                  <p className="text-base sm:text-lg text-muted-foreground">
                    Hologram automatically adapts to your hardware, turning any device into your personal supercomputer.
                  </p>
                </div>
              </div>
            </div>

            {/* Unified virtual substrate for */}
            <div className="mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8 border-t border-border/20">
              <div className="text-center mb-4 sm:mb-6 lg:mb-8">
                <p className="text-xs sm:text-sm lg:text-base font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-muted-foreground">
                  Unified virtual substrate for
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 max-w-5xl mx-auto">
                <div>
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg border-2 border-border/50 bg-[hsl(260_45%_10%)]/95 backdrop-blur-sm flex-shrink-0 shadow-md shadow-black/10">
                      <Radio className="h-5 w-5 sm:h-6 sm:w-6 text-foreground" />
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-[24px] font-semibold text-foreground">Analog Circuits</h3>
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed mb-2 sm:mb-3">
                    Computation flows through fixed geometric mappings rather than stepwise control flow.
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                    Remaining fully digital, deterministic, and noise-free.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg border-2 border-border/50 bg-[hsl(260_45%_10%)]/95 backdrop-blur-sm flex-shrink-0 shadow-md shadow-black/10">
                      <GitBranch className="h-5 w-5 sm:h-6 sm:w-6 text-foreground" />
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-[24px] font-semibold text-foreground">Quantum Circuits</h3>
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed mb-2 sm:mb-3">
                    Multiple operations are mathematically fused into a single executable structure.
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                    Quantum-like efficiency without error-prone specialized hardware.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg border-2 border-border/50 bg-[hsl(260_45%_10%)]/95 backdrop-blur-sm flex-shrink-0 shadow-md shadow-black/10">
                      <CircuitBoard className="h-5 w-5 sm:h-6 sm:w-6 text-foreground" />
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-[24px] font-semibold text-foreground">FPGA Circuits</h3>
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed mb-2 sm:mb-3">
                    Execution uses a compile-time-fixed topology with predictable, constant-time behavior.
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                    Delivered as software rather than reconfigurable silicon.
                  </p>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative z-10 pt-4 pb-10 sm:pt-6 sm:pb-12 lg:pt-8 lg:pb-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl sm:rounded-2xl border-2 border-purple-500/50 bg-[hsl(260_45%_10%)]/98 backdrop-blur-sm pt-8 pb-6 sm:pt-12 sm:pb-8 lg:pt-16 lg:pb-12 px-6 sm:px-8 lg:px-12 text-center relative overflow-hidden shadow-xl shadow-black/30 hover:border-purple/40 hover:shadow-2xl hover:shadow-purple/20 transition-all">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 mt-2 sm:mt-4">
              <span
                className="gradient-text-animated"
                style={{
                  backgroundImage: 'linear-gradient(97deg, #3388EE, #8844CC 42%, #CC44AA 74%, #EE4433)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Ready to build at the speed of thought?
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              Accelerate your AI, scientific and application workloads with geometric virtual compute. Unbound by hardware.
            </p>
            
            <div className="flex justify-center">
              <Button
                size="lg"
                asChild
                className="group relative min-h-[48px] sm:h-12 overflow-hidden border-2 border-purple-500 bg-black px-6 text-base sm:text-lg font-semibold text-white hover:border-purple-400 hover:bg-black/90 hover:shadow-lg hover:shadow-purple/30 transition-all duration-200 touch-manipulation w-full sm:w-auto"
              >
                <a href="https://form.typeform.com/to/vnJ47vOK" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  Get Early Access
                  <ArrowRight className="ml-2 h-4 w-4 text-white transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
