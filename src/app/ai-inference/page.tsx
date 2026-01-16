"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Section } from '@/components/section';
import { Button } from '@/components/ui/button';
import { Math } from '@/components/math';
import { TypeformModal } from '@/components/typeform-modal';
import {
  Zap,
  Cpu,
  Code2,
  Server,
  ArrowRight,
  CheckCircle2,
  Terminal,
  Globe,
  Brain,
  Activity,
  Play,
  Database,
  Gauge,
  Atom,
  Network,
  Infinity,
  DollarSign,
  Shield,
  HardDrive,
} from 'lucide-react';

export default function AIInferencePage() {
  const [isTypeformOpen, setIsTypeformOpen] = useState(false);

  return (
    <div className="relative bg-transparent" style={{ contentVisibility: 'auto' }}>
      <TypeformModal open={isTypeformOpen} onOpenChange={setIsTypeformOpen} />
      {/* Hero Section */}
      <Section className="pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24 border-b border-border/10 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="hero-title text-5xl sm:text-5xl md:text-6xl lg:text-7xl mb-12 sm:mb-16 lg:mb-20 xl:mb-24">
                <span className="block mb-2 sm:mb-3">
                  Run <span 
                    className="gradient-text-animated"
                    style={{
                      backgroundImage: 'linear-gradient(97deg, #3388EE, #8844CC 42%, #CC44AA 74%, #EE4433)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Instant
                  </span>
                </span>
                <span 
                  className="block mb-2 sm:mb-3 gradient-text-animated"
                  style={{
                    backgroundImage: 'linear-gradient(97deg, #3388EE, #8844CC 42%, #CC44AA 74%, #EE4433)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  AI Inference
                </span>
                <span className="block">on Local Device</span>
              </h1>
              <p className="hero-subtitle text-xl sm:text-2xl lg:text-2xl max-w-3xl mx-auto lg:mx-0 mt-8 sm:mt-10 lg:mt-12 mb-16 sm:mb-20 lg:mb-24">
                Hologram vGPU is a software-defined geometric compute engine that delivers ultra-fast AI inference directly on your device. It just works.
              </p>
              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mt-4 sm:mt-5 lg:mt-6">
                <Button
                  asChild
                  size="lg"
                  className="group h-12 border-2 border-cyan/40 bg-cyan/15 px-6 text-lg font-semibold text-cyan-foreground hover:border-cyan/60 hover:bg-cyan/20 hover:shadow-lg hover:shadow-cyan/20 transition-all duration-200"
                >
                  <a href="#backend-compatible">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  asChild
                  className="group relative h-12 overflow-hidden border-2 border-purple-500 bg-black px-6 text-lg font-semibold text-white hover:border-purple-400 hover:bg-black/90 hover:shadow-lg hover:shadow-purple/30 transition-all duration-200"
                >
                  <a href="https://form.typeform.com/to/vnJ47vOK" target="_blank" rel="noopener noreferrer">
                    Get Early Access
                    <ArrowRight className="ml-2 h-4 w-4 text-white transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
            </div>
             <div className="flex-shrink-0 w-full lg:w-auto">
               <div className="relative w-full max-w-[500px] lg:w-[500px] h-[420px] lg:h-[420px] mx-auto lg:mx-0 flex items-center justify-center -mt-24 sm:-mt-28 lg:-mt-32">
                 <Image
                   src="/media/vGPU.png"
                   alt="Holographic CPU/GPU chip blueprint"
                   width={738}
                   height={591}
                   className="w-full h-full object-contain"
                   priority
                   unoptimized
                 />
               </div>
             </div>
          </div>
        </div>
      </Section>

      {/* Compatible With Section */}
      <section id="backend-compatible" className="relative z-10 py-12 sm:py-14 lg:py-18 border-b border-border/10 border-t border-border/10 scroll-mt-24 sm:scroll-mt-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-14">
            {/* Backend-agnostic */}
            <div>
              <div className="text-center mb-6 sm:mb-8">
                <p className="text-sm sm:text-base font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  Backend-agnostic
                </p>
              </div>
              <div className="grid grid-cols-3 sm:flex sm:flex-wrap sm:items-center sm:justify-center gap-4 sm:gap-6 sm:gap-8 lg:gap-12">
                <div className="flex flex-col items-center gap-2 sm:gap-2.5">
                  <Cpu className="h-7 w-7 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-foreground" />
                  <span className="text-xs sm:text-sm lg:text-base font-medium text-foreground">CPU</span>
                </div>
                <div className="flex flex-col items-center gap-2 sm:gap-2.5">
                  <Zap className="h-7 w-7 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-foreground" />
                  <span className="text-[10px] sm:text-xs lg:text-sm font-medium text-foreground">GPU</span>
                </div>
                <div className="flex flex-col items-center gap-2 sm:gap-2.5">
                  <Brain className="h-7 w-7 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-foreground" />
                  <span className="text-xs sm:text-sm lg:text-base font-medium text-foreground">TPU</span>
                </div>
                <div className="flex flex-col items-center gap-2 sm:gap-2.5">
                  <Code2 className="h-7 w-7 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-foreground" />
                  <span className="text-xs sm:text-sm lg:text-base font-medium text-foreground">WASM</span>
                </div>
                <div className="flex flex-col items-center gap-2 sm:gap-2.5">
                  <Globe className="h-7 w-7 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-foreground" />
                  <span className="text-xs sm:text-sm lg:text-base font-medium text-foreground">WebGPU</span>
                </div>
              </div>
            </div>
            
            {/* Compatible with */}
            <div>
              <div className="text-center mb-6 sm:mb-8">
                <p className="text-sm sm:text-base font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  Compatible with
                </p>
              </div>
              <div className="grid grid-cols-3 sm:flex sm:flex-wrap sm:items-center sm:justify-center gap-4 sm:gap-6 sm:gap-8 lg:gap-12">
                <div className="flex flex-col items-center gap-2 sm:gap-2.5">
                  <Atom className="h-7 w-7 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-foreground" />
                  <span className="text-[10px] sm:text-xs lg:text-sm font-medium text-foreground">PyTorch</span>
                </div>
                <div className="flex flex-col items-center gap-2 sm:gap-2.5">
                  <Network className="h-7 w-7 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-foreground" />
                  <span className="text-xs sm:text-sm lg:text-base font-medium text-foreground">TensorFlow</span>
                </div>
                <div className="flex flex-col items-center gap-2 sm:gap-2.5">
                  <Server className="h-7 w-7 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-foreground" />
                  <span className="text-xs sm:text-sm lg:text-base font-medium text-foreground">ONNX</span>
                </div>
                <div className="flex flex-col items-center gap-2 sm:gap-2.5">
                  <Gauge className="h-7 w-7 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-foreground" />
                  <span className="text-[10px] sm:text-xs lg:text-sm font-medium text-foreground">CUDA</span>
                </div>
                <div className="flex flex-col items-center gap-2 sm:gap-2.5">
                  <Infinity className="h-7 w-7 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-foreground" />
                  <span className="text-xs sm:text-sm lg:text-base font-medium text-foreground">+Other</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Key Features */}
      <Section id="three-key-features" className="py-12 sm:py-14 lg:py-18 border-b border-border/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8">
            <p className="text-sm sm:text-base font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Key features
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg border-2 border-border/50 bg-[hsl(260_45%_10%)]/95 backdrop-blur-sm flex-shrink-0 shadow-md shadow-black/10">
                  <Zap className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-[22px] font-semibold text-foreground">Instant local AI inference</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Run local AI models on your machine through Hologram's virtual GPU layer.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Inference completes in milliseconds so you can build, iterate and ship faster.
              </p>
              <a
                href="#ultra-fast-inference"
                className="inline-flex items-center gap-1.5 font-medium text-cyan hover:text-cyan/80 transition-colors antialiased group"
                style={{ 
                  textRendering: 'optimizeLegibility', 
                  WebkitFontSmoothing: 'antialiased', 
                  MozOsxFontSmoothing: 'grayscale',
                  letterSpacing: '-0.01em'
                }}
              >
                Learn more
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg border-2 border-border/50 bg-[hsl(260_45%_10%)]/95 backdrop-blur-sm flex-shrink-0 shadow-md shadow-black/10">
                  <Cpu className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-[22px] font-semibold text-foreground">No expensive overhead</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Unlock high-performance AI compute on your existing hardware.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                No expensive GPUs, no cloud fees and no scaling overhead.
              </p>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-1.5 font-medium text-cyan hover:text-cyan/80 transition-colors antialiased group"
                style={{ 
                  textRendering: 'optimizeLegibility', 
                  WebkitFontSmoothing: 'antialiased', 
                  MozOsxFontSmoothing: 'grayscale',
                  letterSpacing: '-0.01em'
                }}
              >
                Learn more
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg border-2 border-border/50 bg-[hsl(260_45%_10%)]/95 backdrop-blur-sm flex-shrink-0 shadow-md shadow-black/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-foreground"
                  >
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                    <circle cx="12" cy="12" r="2" fill="currentColor" />
                  </svg>
                </div>
                <h3 className="text-[22px] font-semibold text-foreground">It just works</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Integrates directly into your existing workflow and frameworks.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                No hardware changes, no optimization steps. Simply install and run anywhere.
              </p>
              <a
                href="#ultra-fast-inference"
                className="inline-flex items-center gap-1.5 font-medium text-cyan hover:text-cyan/80 transition-colors antialiased group"
                style={{ 
                  textRendering: 'optimizeLegibility', 
                  WebkitFontSmoothing: 'antialiased', 
                  MozOsxFontSmoothing: 'grayscale',
                  letterSpacing: '-0.01em'
                }}
              >
                Learn more
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonial */}
      <Section className="py-12 sm:py-14 lg:py-18 relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <p className="text-2xl sm:text-3xl lg:text-4xl text-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
              "If you've ever thought local AI inference should be faster. Hologram is for you."
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-muted flex-shrink-0 border-2 border-purple-500">
                <Image
                  src="/media/max.jpeg"
                  alt="Max Phelps"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover scale-110"
                />
              </div>
              <div className="text-left">
                <p className="text-base text-foreground font-medium">
                  Max Phelps
                </p>
                <p className="text-sm text-muted-foreground">
                  Engineer @ Maitai (YC S24)
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Easy to Use - CLI and API */}
      <Section id="ultra-fast-inference" className="py-12 sm:py-14 lg:py-18 scroll-mt-24 sm:scroll-mt-32 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              <span
                className="gradient-text-animated"
                style={{
                  backgroundImage: 'linear-gradient(97deg, #3388EE, #8844CC 42%, #CC44AA 74%, #EE4433)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Ultra-fast local AI inference
              </span>
            </h2>
            <p className="text-[22px] text-muted-foreground max-w-3xl mx-auto">
              Build, iterate and ship faster at lower cost.
            </p>
          </div>

          {/* Product demo */}
          <div className="bg-transparent p-0 overflow-hidden mb-0 [&_iframe]:bg-transparent">
            <iframe
              src="https://pixel-perfect-echo-12.lovable.app"
              className="w-full h-[600px] sm:h-[650px] lg:h-[700px] border-0 bg-transparent"
              title="AI Inference Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              style={{ 
                backgroundColor: 'transparent !important',
                background: 'transparent !important'
              }}
            />
          </div>
        </div>
      </Section>


      {/* Never Write an API Again */}
      <Section id="how-it-works" className="py-12 sm:py-14 lg:py-18 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              <span
                className="gradient-text-animated"
                style={{
                  backgroundImage: 'linear-gradient(97deg, #3388EE, #8844CC 42%, #CC44AA 74%, #EE4433)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Performance without overhead
              </span>
            </h2>
            <p className="text-[22px] text-muted-foreground max-w-3xl mx-auto mb-8">
              High-performance AI inference on your existing hardware.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <div className="rounded-lg border-2 border-border/50 bg-[hsl(260_45%_10%)]/95 backdrop-blur-sm p-6 shadow-lg shadow-black/20 hover:border-cyan/30 hover:shadow-xl hover:shadow-cyan/10 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <Cpu className="h-6 w-6 text-foreground flex-shrink-0" />
                <h3 className="text-[22px] font-semibold text-foreground antialiased">No GPU costs</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed antialiased">
                Run high-performance AI inference on your existing CPU or standard GPU. No need for specialized hardware.
              </p>
            </div>
            <div className="rounded-lg border-2 border-border/50 bg-[hsl(260_45%_10%)]/95 backdrop-blur-sm p-6 shadow-lg shadow-black/20 hover:border-cyan/30 hover:shadow-xl hover:shadow-cyan/10 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <HardDrive className="h-6 w-6 text-foreground flex-shrink-0" />
                <h3 className="text-[22px] font-semibold text-foreground antialiased">Zero cloud fees</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed antialiased">
                Process everything locally on your device. No API calls, no per-request charges, no monthly subscriptions.
              </p>
            </div>
            <div className="rounded-lg border-2 border-border/50 bg-[hsl(260_45%_10%)]/95 backdrop-blur-sm p-6 shadow-lg shadow-black/20 hover:border-cyan/30 hover:shadow-xl hover:shadow-cyan/10 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-foreground flex-shrink-0" />
                <h3 className="text-[22px] font-semibold text-foreground antialiased">Own your data</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed antialiased">
                Your data stays on your device at all times, ensuring full privacy, security, and complete control.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-base sm:text-lg font-semibold text-foreground mb-6">Back-end agnostic</p>
            <div className="grid grid-cols-3 sm:flex sm:flex-wrap sm:items-center sm:justify-center gap-4 sm:gap-6 sm:gap-8 lg:gap-12 max-w-4xl mx-auto">
              <div className="flex flex-col items-center gap-2 sm:gap-2.5">
                <Cpu className="h-7 w-7 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-foreground" />
                <span className="text-[10px] sm:text-xs lg:text-sm font-medium text-foreground">CPU</span>
              </div>
              <div className="flex flex-col items-center gap-2 sm:gap-2.5">
                <Zap className="h-7 w-7 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-foreground" />
                <span className="text-[10px] sm:text-xs lg:text-sm font-medium text-foreground">GPU</span>
              </div>
              <div className="flex flex-col items-center gap-2 sm:gap-2.5">
                <Brain className="h-7 w-7 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-foreground" />
                <span className="text-[10px] sm:text-xs lg:text-sm font-medium text-foreground">TPU</span>
              </div>
              <div className="flex flex-col items-center gap-2 sm:gap-2.5">
                <Code2 className="h-7 w-7 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-foreground" />
                <span className="text-[10px] sm:text-xs lg:text-sm font-medium text-foreground">WASM</span>
              </div>
              <div className="flex flex-col items-center gap-2 sm:gap-2.5">
                <Globe className="h-7 w-7 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-foreground" />
                <span className="text-[10px] sm:text-xs lg:text-sm font-medium text-foreground">WebGPU</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Extend Your Runtime & Getting Started */}
      <Section id="getting-started" className="py-12 sm:py-14 lg:py-18 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              <span
                className="gradient-text-animated"
                style={{
                  backgroundImage: 'linear-gradient(97deg, #3388EE, #8844CC 42%, #CC44AA 74%, #EE4433)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Get started in minutes
              </span>
            </h2>
            <p className="text-[22px] text-muted-foreground max-w-3xl mx-auto">
              Works seamlessly with your existing hardware and frameworks.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg border-2 border-border/50 bg-[hsl(260_45%_10%)]/95 backdrop-blur-sm flex-shrink-0 shadow-md shadow-black/10">
                  <Terminal className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-[22px] font-semibold text-foreground">Install Hologram</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Install on your device and it automatically connects to frameworks like PyTorch, TensorFlow, and any ONNX compatible setup.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg border-2 border-border/50 bg-[hsl(260_45%_10%)]/95 backdrop-blur-sm flex-shrink-0 shadow-md shadow-black/10">
                  <Play className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-[22px] font-semibold text-foreground">Run Your Model</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Download any ONNX model from Hugging Face and run it instantly in Hologram without conversion or retraining.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg border-2 border-border/50 bg-[hsl(260_45%_10%)]/95 backdrop-blur-sm flex-shrink-0 shadow-md shadow-black/10">
                  <Activity className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-[22px] font-semibold text-foreground">Optimize as You Go</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Hologram balances compute across CPU and GPU layers so your models scale smoothly from local to distributed workloads.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-16 sm:mt-20 lg:mt-24">
            <div className="rounded-2xl border-2 border-border/50 bg-[hsl(260_45%_10%)]/98 backdrop-blur-sm pt-12 pb-8 sm:pt-16 sm:pb-12 px-8 sm:px-12 text-center relative overflow-hidden shadow-xl shadow-black/30 hover:border-purple/40 hover:shadow-2xl hover:shadow-purple/20 transition-all">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 mt-4">
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
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Accelerate ML, scientific, and computational workloads with <Math inline>O(1)</Math> geometry-powered virtual in-memory compute. Unbound by hardware.
              </p>
              
              <div className="flex justify-center">
                <Button
                  asChild
                  className="font-semibold antialiased text-[15px] tracking-[-0.01em] bg-black border-2 border-purple-500 text-white hover:bg-black/90 hover:border-purple-400 transition-all duration-200 px-5"
                  style={{ 
                    textRendering: 'optimizeLegibility', 
                    WebkitFontSmoothing: 'antialiased', 
                    MozOsxFontSmoothing: 'grayscale',
                    fontWeight: 600,
                    letterSpacing: '-0.01em'
                  }}
                >
                  <a href="https://form.typeform.com/to/vnJ47vOK" target="_blank" rel="noopener noreferrer">
                    Get Early Access
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
