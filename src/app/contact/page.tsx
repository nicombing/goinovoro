"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="bg-splash-pastel min-h-screen text-black flex flex-col pt-32 pb-20">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-10 flex flex-col gap-16 lg:gap-24">
        
        {/* Hero Section */}
        <section className="flex flex-col gap-8">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-neue font-medium text-[60px] md:text-[100px] lg:text-[160px] leading-[0.9] tracking-tightest uppercase"
          >
            HUBUNGI KAMI
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-neue font-medium text-[20px] md:text-[28px] max-w-3xl leading-[1.3]"
          >
            Bawa ide Anda, kami bantu eksekusi dengan cepat. Siap membantu Anda dengan solusi IT yang tepat untuk kebutuhan bisnis.
          </motion.p>
        </section>

        {/* Content Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-8 md:p-12 rounded-3xl border border-black/5 shadow-sm flex flex-col gap-8"
          >
            <h3 className="font-neue font-medium text-[32px] md:text-[40px] leading-[1.1] tracking-tightest">Kirim pesan langsung</h3>
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[12px] tracking-widest uppercase text-black/60">Nama Lengkap</label>
                <input 
                  type="text" 
                  className="w-full bg-neutral-100 px-5 py-4 rounded-xl border border-transparent focus:border-black/20 focus:outline-none transition-colors font-neue text-[18px]" 
                  required 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[12px] tracking-widest uppercase text-black/60">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-neutral-100 px-5 py-4 rounded-xl border border-transparent focus:border-black/20 focus:outline-none transition-colors font-neue text-[18px]" 
                  required 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[12px] tracking-widest uppercase text-black/60">Layanan yang Diminati</label>
                <select className="w-full bg-neutral-100 px-5 py-4 rounded-xl border border-transparent focus:border-black/20 focus:outline-none transition-colors font-neue text-[18px] appearance-none">
                  <option value="">Pilih Layanan</option>
                  <option value="web-automation">Web Automation</option>
                  <option value="system-development">Pengembangan Sistem</option>
                  <option value="it-tutor">Pendamping Tutor IT</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[12px] tracking-widest uppercase text-black/60">Pesan</label>
                <textarea 
                  rows={4}
                  className="w-full bg-neutral-100 px-5 py-4 rounded-xl border border-transparent focus:border-black/20 focus:outline-none transition-colors font-neue text-[18px] resize-none"
                  required
                />
              </div>
              <button 
                type="submit"
                className="mt-4 w-full py-5 bg-black text-white rounded-xl font-mono text-[14px] tracking-widest uppercase hover:bg-neutral-800 transition-colors"
              >
                Kirim Pesan
              </button>
            </form>
          </motion.div>

          {/* Direct Contact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col gap-10"
          >
            <div className="bg-black text-white p-8 md:p-12 rounded-3xl flex flex-col gap-8 items-center text-center">
              <h3 className="font-neue font-medium text-[32px] md:text-[40px] leading-[1.1] tracking-tightest">Hubungi kami lebih cepat</h3>
              <p className="font-neue text-[20px] text-white/70 leading-[1.4]">
                Untuk konsultasi cepat, hubungi kami langsung melalui WhatsApp.
              </p>
              <a 
                href="https://wa.me/6282323347178?text=Halo%20GoInovoro,%20saya%20ingin%20berkonsultasi%20mengenai%20layanan%20anda." 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-5 bg-white text-black rounded-xl font-mono text-[14px] tracking-widest uppercase hover:bg-neutral-200 transition-colors"
              >
                Hubungi via WhatsApp
              </a>
            </div>

            <div className="flex flex-col gap-6 p-8 md:p-12 border border-black/10 rounded-3xl">
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[12px] tracking-widest uppercase text-black/60">Email</span>
                <span className="font-neue font-medium text-[24px]">goinovoro@gmail.com</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[12px] tracking-widest uppercase text-black/60">Phone</span>
                <span className="font-neue font-medium text-[24px]">+62 823 2334 7178</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[12px] tracking-widest uppercase text-black/60">Location</span>
                <span className="font-neue font-medium text-[24px]">Bandung, Indonesia</span>
              </div>
            </div>
          </motion.div>

        </section>
      </div>
    </div>
  );
}
