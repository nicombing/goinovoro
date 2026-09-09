"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ItTutorPage() {
  const programs = [
    { title: "Full-Stack Web Developer", desc: "Belajar membangun website dan aplikasi web modern dari frontend hingga backend. (3-6 Bulan)", skills: "HTML, CSS, React, Node.js, SQL" },
    { title: "Mobile App Developer", desc: "Kuasai pengembangan aplikasi mobile native dan cross-platform untuk Android dan iOS. (3-5 Bulan)", skills: "React Native, Flutter, UI/UX" },
    { title: "Python for Data Science", desc: "Belajar analisis data dan machine learning dasar menggunakan Python. (2-4 Bulan)", skills: "Pandas, ML Basics, SQL, Data Viz" },
    { title: "Cloud & DevOps Engineer", desc: "Pelajari deployment, automation, dan manajemen cloud infrastructure. (2-3 Bulan)", skills: "Docker, AWS/GCP, CI/CD, Linux" }
  ];

  const types = [
    { title: "Personal Training", desc: "One-on-one mentoring dengan kurikulum disesuaikan kebutuhan Anda. Jadwal 100% fleksibel." },
    { title: "Group Training", desc: "Belajar bersama tim (3-10 orang) dengan harga lebih efisien. Peer learning dan diskusi." },
    { title: "Corporate Training", desc: "Pelatihan IT untuk tim perusahaan dengan materi khusus dan laporan progress berkala." }
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
            className="font-neue font-medium text-[50px] md:text-[80px] lg:text-[140px] leading-[0.9] tracking-tightest uppercase"
          >
            PENDAMPING TUTOR IT
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-neue font-medium text-[20px] md:text-[28px] max-w-3xl leading-[1.3]"
          >
            Belajar programming dan teknologi terkini dengan pendampingan mentor berpengalaman. Dari nol sampai job-ready dengan kurikulum yang disesuaikan kebutuhan Anda.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a 
              href="https://wa.me/6282323347178?text=Halo%20GoInovoro,%20saya%20tertarik%20dengan%20layanan%20Tutor%20IT." 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-black text-white rounded-xl font-mono text-[14px] tracking-widest uppercase hover:bg-neutral-800 transition-colors"
            >
              Konsultasi Gratis
            </a>
          </motion.div>
        </section>

        {/* Programs Grid */}
        <section className="flex flex-col gap-12">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-[14px] tracking-widest uppercase border-b border-black/20 pb-4"
          >
            Program Belajar
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs.map((prog, i) => (
              <motion.div
                key={prog.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-white rounded-3xl border border-black/5 flex flex-col gap-4"
              >
                <div className="font-neue font-medium text-[32px] leading-[1.1]">{prog.title}</div>
                <p className="font-neue text-[18px] text-black/60 leading-[1.4] mb-2">{prog.desc}</p>
                <div className="font-mono text-[12px] tracking-widest bg-black/5 px-4 py-2 rounded-full self-start">
                  {prog.skills}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Learning Types Section */}
        <section className="flex flex-col gap-12">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-[14px] tracking-widest uppercase border-b border-black/20 pb-4"
          >
            Tipe Belajar
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {types.map((type, i) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 bg-black text-white rounded-3xl flex flex-col gap-6"
              >
                <h3 className="font-neue font-medium text-[32px] leading-[1.1]">{type.title}</h3>
                <p className="font-neue text-[18px] text-white/70 leading-[1.4]">{type.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
