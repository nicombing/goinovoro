"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const { scrollYProgress: heroProgress } = useScroll();
  const heroY = useTransform(heroProgress, [0, 1], ["0%", "50%"]);
  
  const servicesRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: servicesProgress } = useScroll({
    target: servicesRef,
    offset: ["start start", "end end"]
  });

  const t1Y = useTransform(servicesProgress, [0, 0.15, 0.25, 0.4], ["100vh", "0vh", "0vh", "-100vh"]);
  const t1Opacity = useTransform(servicesProgress, [0, 0.1, 0.3, 0.4], [0, 1, 1, 0]);
  const t2Y = useTransform(servicesProgress, [0.25, 0.4, 0.5, 0.65], ["100vh", "0vh", "0vh", "-100vh"]);
  const t2Opacity = useTransform(servicesProgress, [0.25, 0.35, 0.55, 0.65], [0, 1, 1, 0]);
  const t3Y = useTransform(servicesProgress, [0.5, 0.65, 0.75, 0.9], ["100vh", "0vh", "0vh", "-100vh"]);
  const t3Opacity = useTransform(servicesProgress, [0.5, 0.6, 0.8, 0.9], [0, 1, 1, 0]);
  
  // Top-level hooks for massive text
  const massiveTextOpacity = useTransform(servicesProgress, [0, 0.8, 0.95], [1, 1, 0]);
  const massiveTextY = useTransform(servicesProgress, [0, 1], ["0%", "-10%"]);
  
  const massiveColor1 = useTransform(servicesProgress, [0, 0.25, 0.35], ["rgba(255,255,255,1)", "rgba(255,255,255,1)", "rgba(74,74,74,1)"]);
  const massiveColor2 = useTransform(servicesProgress, [0.25, 0.35, 0.55, 0.65], ["rgba(74,74,74,1)", "rgba(255,255,255,1)", "rgba(255,255,255,1)", "rgba(74,74,74,1)"]);
  const massiveColor3 = useTransform(servicesProgress, [0.55, 0.65, 1], ["rgba(74,74,74,1)", "rgba(255,255,255,1)", "rgba(255,255,255,1)"]);
  
  // Fade in summary text while massive text is fading out (crossfade)
  const summaryOpacity = useTransform(servicesProgress, [0.8, 0.9], [0, 1]);

  const [showreelOpen, setShowreelOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#eeece9]">
      {/* Background Grid Lines */}
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="h-full px-4">
          <div className="h-full max-w-[1400px] mx-auto border-l border-r border-black/[0.07]">
            <div className="h-full max-w-[900px] mx-auto grid grid-cols-4">
              <div className="border-l border-r border-black/[0.07]"></div>
              <div className="border-r border-black/[0.07]"></div>
              <div className="border-r border-black/[0.07]"></div>
              <div className="border-r border-black/[0.07]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section id="about" className="relative h-[100dvh] flex items-center justify-center pt-20 px-4 md:px-10">
        
        <motion.div
          className="absolute left-0 right-0 px-[3.5%] z-10"
          style={{ top: "56px" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img src="/logo_banner.png" alt="Goinovoro" className="w-full h-auto block" />
        </motion.div>

        <motion.div 
          className="absolute inset-0 flex items-center justify-center lg:justify-end lg:pr-[10%] pointer-events-none"
          style={{ y: heroY }}
        >
          <motion.div
            className="w-[80vw] max-w-[500px]"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.img
              src="/logoonly.png"
              alt=""
              className="w-full h-auto object-contain drop-shadow-2xl"
              style={{ imageRendering: "-webkit-optimize-contrast" }}
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
        <motion.div
          className="absolute bottom-10 md:bottom-20 left-4 md:left-10 max-w-[300px] md:max-w-[400px] z-20 flex flex-col gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="font-neue font-medium leading-[1.3] text-black text-[18px] md:text-[22px]">
            {"///"} STUDIO DIGITAL DARI BANDUNG
            <br /><br />
            &quot;Inovasi adalah bagian utama garda terdepan usaha kami&quot;
            <br /><br />
            Menyediakan solusi teknologi terdepan untuk mengoptimalkan bisnis Anda melalui otomatisasi, pengembangan sistem, dan pendampingan IT profesional.
          </p>
          <button 
            onClick={() => setShowreelOpen(true)}
            className="self-start inline-flex items-center justify-center px-5 py-[14px] bg-brand-blue text-white rounded-[5px] font-mono text-[14px] tracking-widest hover:bg-brand-blue-dark transition-colors"
          >
            Play Showreel
          </button>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="relative z-10 bg-transparent py-[3.75rem] lg:pt-[10.5rem] lg:pb-[5.25rem] px-4 md:px-10 border-t border-black/[0.07]">
        <div className="max-w-[1190px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-0 items-start justify-between">
          <div className="shrink-0 lg:pt-2">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-mono text-[12px] lg:text-[18px] tracking-widest uppercase"
            >
              MENGAPA MEMILIH KAMI
            </motion.h2>
          </div>
          <div className="flex flex-col gap-10 max-w-[850px]">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="font-neue font-medium text-[28px] md:text-[44px] lg:text-[68px] leading-[1.1] tracking-tightest"
            >
              Komitmen kami adalah menghadirkan eksekusi yang rapi, komunikasi yang jelas, dan hasil yang terasa lebih premium.
            </motion.h3>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-16">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-neue font-medium text-[18px] lg:text-[24px] leading-[1.5] flex-1"
              >
                Didukung oleh tim yang paham proses, detail teknis, dan ekspektasi bisnis nyata. Setiap deliverable melewati standar kualitas yang jelas, aman, dan mudah dirawat.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-neue font-medium text-[18px] lg:text-[24px] leading-[1.5] flex-1"
              >
                Timeline, scope, dan output dibuat transparan agar eksekusi tetap cepat dan rapi. Konsultasi gratis untuk mengetahui solusi IT terbaik untuk bisnis Anda.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Work (Case Studies) Section */}
      <section id="work" className="relative z-10 bg-transparent overflow-hidden pt-[7.5rem] lg:pt-[10.5rem] px-4 md:px-10 border-t border-black/[0.07]">
        <div className="max-w-[1400px] mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-neue font-medium text-[80px] md:text-[160px] xl:text-[278px] leading-[1] tracking-[-0.005em] whitespace-nowrap overflow-hidden"
          >
            Portofolio Kami
          </motion.h2>
          <div className="mt-5 grid grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-16 lg:gap-y-20 pb-[100px] lg:pb-[320px]">
            {/* Project 1 */}
            <motion.article 
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-8 col-span-2 md:col-span-1"
            >
              <div className="relative overflow-hidden bg-neutral-200 aspect-square md:aspect-auto h-[400px] md:h-[680px] lg:h-[845px]">
                 {/* <video poster="/work/img_flit.jpg" className="w-full object-cover h-full" /> */}
              </div>
              <div className="flex flex-col gap-3 max-w-[631px]">
                <h3 className="font-neue font-medium text-[24px] lg:text-[32px] leading-[1.1] tracking-tightest">Logistik Retail</h3>
                <p className="font-neue font-medium text-[16px] lg:text-[20px] leading-[1.3] tracking-tightest">Sistem otomasi end-to-end untuk melacak ratusan pesanan harian dari e-commerce langsung ke gudang pemenuhan secara otomatis.</p>
              </div>
            </motion.article>

            {/* Project 2 */}
            <motion.article 
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-8 col-span-2 md:col-span-1 md:mt-20"
            >
              <div className="relative overflow-hidden bg-neutral-200 aspect-square md:aspect-auto h-[400px] md:h-[680px] lg:h-[845px]">
                {/* <video poster="/work/img_kitti.jpg" className="w-full object-cover h-full" /> */}
              </div>
              <div className="flex flex-col gap-3 max-w-[631px]">
                <h3 className="font-neue font-medium text-[24px] lg:text-[32px] leading-[1.1] tracking-tightest">Sinkronisasi Pelanggan</h3>
                <p className="font-neue font-medium text-[16px] lg:text-[20px] leading-[1.3] tracking-tightest">Kami mengintegrasikan CRM klien sehingga setiap prospek baru otomatis membuat tagihan, mengirim email, dan memberi notifikasi ke tim sales.</p>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* Services Sticky Scroll */}
      <section ref={servicesRef} id="services" className="relative hidden md:block h-[600vh] bg-black">
        <div className="sticky top-0 h-screen overflow-hidden bg-black flex items-center justify-center">
          <video src="/services/services_bg.mp4" muted loop autoPlay playsInline className="absolute inset-0 w-full h-full object-cover opacity-50 z-0" />
          
          <div className="absolute top-0 left-0 right-0 h-px bg-white/20 z-50" />

          {/* Intro Massive Text */}
          <motion.div 
            style={{ 
              opacity: massiveTextOpacity,
              y: massiveTextY
            }}
            className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none"
          >
            <div className="flex flex-col leading-[0.88] text-center">
              <motion.span 
                style={{ color: massiveColor1 }}
                className="font-druk font-black uppercase text-[40px] md:text-[60px] lg:text-[100px] xl:text-[140px]"
              >
                SPEED
              </motion.span>
              <motion.span 
                style={{ color: massiveColor2 }}
                className="font-druk font-black uppercase text-[40px] md:text-[60px] lg:text-[100px] xl:text-[140px]"
              >
                FLOAT
              </motion.span>
              <motion.span 
                style={{ color: massiveColor3 }}
                className="font-druk font-black uppercase text-[40px] md:text-[60px] lg:text-[100px] xl:text-[140px]"
              >
                FLY
              </motion.span>
            </div>
            <motion.div 
              style={{ opacity: massiveTextOpacity }}
              className="mt-8 font-neue text-white/50 text-[18px]"
            >
              Each essential. Each in sync.
            </motion.div>
          </motion.div>

          {/* Tier 1 */}
          <motion.div 
            style={{ opacity: t1Opacity, y: t1Y }}
            className="absolute top-1/2 -translate-y-1/2 right-[10%] w-[360px] flex flex-col gap-5 bg-black/40 p-5 rounded-xl backdrop-blur-md"
          >
            <div className="w-full h-[210px] bg-neutral-800 overflow-hidden rounded-sm">
              <video src="/services/services_bg.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-neue font-medium text-[32px] leading-[1.2] tracking-tightest text-white">Speed Web Automation</h3>
              <p className="font-neue text-[20px] leading-[1.5] text-white/60">Automasi proses web yang menghemat waktu, mengurangi kesalahan, dan langsung terasa dampaknya untuk operasional harian.</p>
            </div>
          </motion.div>

          {/* Tier 2 */}
          <motion.div 
            style={{ opacity: t2Opacity, y: t2Y }}
            className="absolute top-1/2 -translate-y-1/2 left-[10%] w-[360px] flex flex-col gap-5 bg-black/40 p-5 rounded-xl backdrop-blur-md"
          >
            <div className="w-full h-[210px] bg-neutral-800 overflow-hidden rounded-sm">
              <video src="/services/services_bg.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-neue font-medium text-[32px] leading-[1.2] tracking-tightest text-white">Float System Development</h3>
              <p className="font-neue text-[20px] leading-[1.5] text-white/60">Aplikasi dan sistem yang dibangun rapi, skalabel, dan dirancang untuk kebutuhan bisnis yang terus bertumbuh.</p>
            </div>
          </motion.div>

          {/* Tier 3 */}
          <motion.div 
            style={{ opacity: t3Opacity, y: t3Y }}
            className="absolute top-1/2 -translate-y-1/2 right-[10%] w-[360px] flex flex-col gap-5 bg-black/40 p-5 rounded-xl backdrop-blur-md"
          >
            <div className="w-full h-[210px] bg-neutral-800 overflow-hidden rounded-sm">
              <video src="/services/services_bg.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-neue font-medium text-[32px] leading-[1.2] tracking-tightest text-white">Fly IT Tutor</h3>
              <p className="font-neue text-[20px] leading-[1.5] text-white/60">Pendampingan teknis dan transfer pengetahuan agar tim Anda lebih mandiri memakai teknologi yang tepat.</p>
            </div>
          </motion.div>

          {/* Outro Text */}
          <motion.div 
            style={{ opacity: summaryOpacity }}
            className="absolute inset-0 flex items-center justify-center px-[8%] z-20 pointer-events-none"
          >
            <p className="font-neue font-medium text-[34px] lg:text-[54px] leading-[1.2] tracking-tightest max-w-[820px] text-white">
              GoInovoro membangun sistem, automasi, dan pengalaman digital yang rapi, cepat, dan siap dipakai untuk kebutuhan bisnis nyata.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Proof / FAQ Section */}
      <section id="faq" className="relative z-10 overflow-hidden py-20 lg:py-28 px-4 md:px-10 bg-[#eeece9] border-t border-black/[0.07]">
        <div className="max-w-[1190px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-0 items-start justify-between">
          <div className="shrink-0 lg:pt-2">
            <span className="font-mono text-[12px] lg:text-[18px] text-black tracking-widest uppercase">THE OUTCOMES</span>
          </div>
          <div className="w-full max-w-[850px]">
            <ul className="flex flex-col w-full">
              <li className="border-t border-black py-6 flex flex-col md:flex-row items-start gap-y-4">
                <span className="md:w-1/2 font-neue font-medium text-[28px] lg:text-[42px] leading-[1.1] tracking-tightest shrink-0">10x Speed</span>
                <div className="md:w-1/2 flex items-start gap-8">
                  <div className="shrink-0 overflow-hidden rounded-sm bg-neutral-300 w-[109px] h-[109px] md:w-[136px] md:h-[136px]"></div>
                  <p className="flex-1 font-neue font-medium text-[16px] lg:text-[20px] leading-[1.3]">
                    <span>Asynchronous workflow visibility for leadership teams.</span>
                    <span className="text-gray-500 block mt-2">Stop chasing updates and start watching the system work.</span>
                  </p>
                </div>
              </li>
              <li className="border-t border-black py-6 flex flex-col md:flex-row items-start gap-y-4">
                <span className="md:w-1/2 font-neue font-medium text-[28px] lg:text-[42px] leading-[1.1] tracking-tightest shrink-0">3+ Hours</span>
                <div className="md:w-1/2 flex items-start gap-8">
                  <div className="shrink-0 overflow-hidden rounded-sm bg-neutral-300 w-[109px] h-[109px] md:w-[136px] md:h-[136px]"></div>
                  <p className="flex-1 font-neue font-medium text-[16px] lg:text-[20px] leading-[1.3]">
                    <span>Saved daily per team member previously lost to repetitive coordination.</span>
                  </p>
                </div>
              </li>
              <li className="border-t border-black border-b py-6 flex flex-col md:flex-row items-start gap-y-4">
                <span className="md:w-1/2 font-neue font-medium text-[28px] lg:text-[42px] leading-[1.1] tracking-tightest shrink-0">Senior team</span>
                <div className="md:w-1/2 flex items-start gap-8">
                  <div className="shrink-0 overflow-hidden rounded-sm bg-neutral-300 w-[109px] h-[109px] md:w-[136px] md:h-[136px]"></div>
                  <p className="flex-1 font-neue font-medium text-[16px] lg:text-[20px] leading-[1.3]">
                    <span>The people you meet are the people doing the work.</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Showreel Overlay */}
      {showreelOpen && (
        <motion.div 
          className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button 
            onClick={() => setShowreelOpen(false)}
            className="absolute top-8 right-8 text-white font-mono uppercase tracking-widest text-sm z-50 hover:opacity-70"
          >
            Close
          </button>
          <video 
            src="/showreel/goinovoro-co-2026.mp4" 
            autoPlay 
            controls 
            className="w-full h-full object-contain max-w-7xl"
          />
        </motion.div>
      )}
    </div>
  );
}
