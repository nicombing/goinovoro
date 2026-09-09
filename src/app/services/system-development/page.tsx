"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function SystemDevelopmentPage() {
  const features = [
    { title: "Enterprise Resource Planning (ERP)", desc: "Sistem terintegrasi untuk mengelola seluruh aspek bisnis dari satu platform. Inventory, HR, Finance, & Supply Chain." },
    { title: "Customer Relationship Management (CRM)", desc: "Sistem untuk mengelola hubungan dengan customer dan meningkatkan sales. Lead management, pipeline & support." },
    { title: "E-Commerce & Marketplace", desc: "Platform jual-beli online dengan fitur lengkap dan payment gateway. Multi-vendor, booking system & inventory sync." },
    { title: "Learning Management System (LMS)", desc: "Platform pembelajaran online dengan fitur kursus, quiz, dan sertifikat. Video streaming & progress tracking." }
  ];

  const projects = [
    { title: "Rechaint Oil profile website", desc: "Website company profile untuk perusahaan minyak dengan desain modern dan profesional. SEO Optimized dan responsive." },
    { title: "Business Analytics Rechaint Oil", desc: "Platform analytics untuk monitoring dan visualisasi data bisnis secara real-time. Custom reports dan tracking." },
    { title: "Online Store Platform Rechaint Oil", desc: "Platform e-commerce lengkap dengan payment gateway dan inventory management." }
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
            className="font-neue font-medium text-[50px] md:text-[80px] lg:text-[120px] leading-[0.9] tracking-tightest uppercase"
          >
            PENGEMBANGAN SISTEM
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-neue font-medium text-[20px] md:text-[28px] max-w-3xl leading-[1.3]"
          >
            Membangun sistem informasi dan aplikasi custom yang efisien, scalable, dan modern. Dari konsep hingga deployment dengan tech stack terkini.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a 
              href="https://wa.me/6282323347178?text=Halo%20GoInovoro,%20saya%20tertarik%20dengan%20layanan%20Pengembangan%20Sistem." 
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
            Jenis Sistem
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((proj, i) => (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 bg-black text-white rounded-3xl flex flex-col gap-6"
              >
                <h3 className="font-neue font-medium text-[32px] leading-[1.1]">{proj.title}</h3>
                <p className="font-neue text-[18px] text-white/70 leading-[1.4]">{proj.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
