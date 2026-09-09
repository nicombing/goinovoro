"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="bg-splash-pastel min-h-screen text-black flex flex-col pt-32 pb-20">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-10 flex flex-col gap-24">
        
        {/* Hero Section */}
        <section className="flex flex-col gap-8">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-neue font-medium text-[60px] md:text-[100px] lg:text-[160px] leading-[0.9] tracking-tightest uppercase"
          >
            TENTANG KAMI
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-neue font-medium text-[20px] md:text-[28px] max-w-3xl leading-[1.3]"
          >
            Mengenal lebih dekat visi, misi, dan nilai-nilai yang kami pegang teguh.
          </motion.p>
        </section>

        {/* History Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6"
          >
            <h3 className="font-mono text-[14px] tracking-widest uppercase border-b border-black/20 pb-4">
              Apa itu GoInovoro?
            </h3>
            <p className="font-neue text-[18px] lg:text-[22px] leading-[1.5]">
              Sebuah penyedia layanan IT yang berkomitmen untuk membantu individu maupun bisnis mengekspresikan ide mereka secara profesional dan berkesan. Kami percaya bahwa setiap gagasan memiliki potensi besar, dan tugas kami adalah mewujudkannya melalui solusi kreatif yang inovatif.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6"
          >
            <h3 className="font-mono text-[14px] tracking-widest uppercase border-b border-black/20 pb-4">
              Sejarah
            </h3>
            <p className="font-neue text-[18px] lg:text-[22px] leading-[1.5]">
              Sejak semester 3, kami memulai dari sebuah kelompok tugas kuliah yang kemudian berkembang menjadi wadah kolaborasi kreatif. Resmi dibentuk pada <span className="font-medium">27 Agustus 2025</span>, GoInovoro bermula dari proyek Kewirausahaan Internet yang berkembang menjadi komitmen profesional untuk membantu bisnis secara efektif.
            </p>
          </motion.div>
        </section>

        {/* Visi Misi Section */}
        <section className="flex flex-col gap-12 bg-white rounded-3xl p-8 md:p-16 lg:p-24 shadow-sm border border-black/5">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-neue font-medium text-[40px] md:text-[60px] leading-[1] tracking-tightest uppercase text-center"
          >
            Visi & Misi
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="flex flex-col gap-6 items-center text-center">
              <h3 className="font-mono text-[14px] tracking-widest uppercase">Visi Kami</h3>
              <p className="font-neue text-[24px] lg:text-[32px] leading-[1.3] font-medium">
                &quot;Inovasi adalah bagian utama garda terdepan usaha kami.&quot;
              </p>
            </div>
            <div className="flex flex-col gap-6 items-center text-center">
              <h3 className="font-mono text-[14px] tracking-widest uppercase">Misi Kami</h3>
              <ul className="font-neue text-[20px] lg:text-[24px] leading-[1.5] flex flex-col gap-4 text-black/80">
                <li>• Menjadikan masalah menjadi awal langkah kami membuat inovasi</li>
                <li>• Memberikan masukan untuk tujuan yang lebih indah</li>
                <li>• Memberikan kepuasan kepada pelanggan</li>
                <li>• Harga terjangkau dengan kualitas terbaik</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="flex flex-col gap-16 pt-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-neue font-medium text-[50px] md:text-[80px] leading-[1] tracking-tightest uppercase"
          >
            Tim Inti
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Boy Full Simbolon", role: "CEO", desc: "Memimpin strategi perusahaan dengan visi inovasi yang kuat." },
              { name: "Dapa Simanjuntak", role: "CMO", desc: "Mengembangkan strategi pemasaran untuk memperluas jangkauan perusahaan." },
              { name: "Vramsjon Hutagalung", role: "CTO", desc: "Memimpin pengembangan teknologi dan inovasi produk." },
              { name: "Gibrael Bagaskara", role: "CSM", desc: "Memastikan kepuasan pelanggan dan hubungan jangka panjang." },
            ].map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col gap-4 p-6 bg-white rounded-2xl border border-black/5"
              >
                <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-mono text-[14px]">
                  {member.role}
                </div>
                <div>
                  <h3 className="font-neue font-medium text-[24px] leading-[1.1] mb-2">{member.name}</h3>
                  <p className="font-neue text-[16px] text-black/60 leading-[1.4]">{member.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
