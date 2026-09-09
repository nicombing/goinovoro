"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function WebAutomationPage() {
  const features = [
    { title: "RPA (Robotic Process Automation)", desc: "Bot otomatis yang meniru tindakan manusia di browser seperti klik, input data, navigasi halaman." },
    { title: "Web Scraping", desc: "Ekstraksi data terstruktur dari website untuk analisis dan database. Scraping harga, data produk, dan berita." },
    { title: "API Automation", desc: "Integrasi antar sistem menggunakan API untuk transfer data otomatis. Sinkronisasi inventory & payment gateway." },
    { title: "Email Automation", desc: "Otomatisasi pengiriman, penerimaan, dan pemrosesan email. Auto-reply, marketing, dan invoice." }
  ];

  const projects = [
    { title: "CoreTaxAutomation", desc: "Sistem otomasi perpajakan yang mempermudah proses pelaporan dan kalkulasi pajak. Menghemat waktu 80% dengan akurasi 99.9%." },
    { title: "LPGGasAutomation", desc: "Otomatisasi sistem distribusi gas LPG dari order hingga delivery tracking. Dilengkapi auto-notification dan laporan harian." }
  ];

  return (
    <div className="bg-splash-pastel min-h-screen text-black flex flex-col pt-32 pb-20">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-10 flex flex-col gap-24">
        
        {/* Back Link */}
        <Link href="/services" className="font-mono text-[12px] tracking-widest uppercase text-black/60 hover:text-black transition-colors flex items-center gap-2">
          ← Kembali ke Layanan
        </Link>

        {/* Hero Section */}
        <section className="flex flex-col gap-8 -mt-16">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-neue font-medium text-[60px] md:text-[100px] lg:text-[160px] leading-[0.9] tracking-tightest uppercase"
          >
            WEB AUTOMATION
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-neue font-medium text-[20px] md:text-[28px] max-w-3xl leading-[1.3]"
          >
            Optimalkan efisiensi bisnis Anda dengan otomatisasi proses web yang cerdas dan handal. Hemat waktu hingga 90% untuk task repetitif.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a 
              href="https://wa.me/6282323347178?text=Halo%20GoInovoro,%20saya%20tertarik%20dengan%20layanan%20Web%20Automation." 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-black text-white rounded-xl font-mono text-[14px] tracking-widest uppercase hover:bg-neutral-800 transition-colors"
            >
              Konsultasi Gratis
            </a>
          </motion.div>
        </section>

        {/* Features Grid */}
        <section className="flex flex-col gap-12">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-[14px] tracking-widest uppercase border-b border-black/20 pb-4"
          >
            Jenis-Jenis Web Automation
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-white rounded-3xl border border-black/5 flex flex-col gap-4"
              >
                <div className="font-neue font-medium text-[32px] leading-[1.1]">{feat.title}</div>
                <p className="font-neue text-[18px] text-black/60 leading-[1.4]">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="flex flex-col gap-12">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-[14px] tracking-widest uppercase border-b border-black/20 pb-4"
          >
            Project Kami
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((proj, i) => (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 bg-black text-white rounded-3xl flex flex-col gap-6"
              >
                <h3 className="font-neue font-medium text-[40px] leading-[1]">{proj.title}</h3>
                <p className="font-neue text-[20px] text-white/70 leading-[1.4]">{proj.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
