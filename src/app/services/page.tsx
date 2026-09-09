"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      id: "web-automation",
      title: "Web Automation",
      desc: "Optimalkan efisiensi bisnis Anda dengan otomatisasi proses web yang cerdas dan handal. Hemat waktu hingga 90% untuk task repetitif.",
      number: "01",
    },
    {
      id: "system-development",
      title: "Pengembangan Sistem",
      desc: "Solusi perangkat lunak custom yang dibangun khusus untuk menyelesaikan tantangan unik bisnis Anda dengan teknologi terkini.",
      number: "02",
    },
    {
      id: "it-tutor",
      title: "Pendamping Tutor IT",
      desc: "Tingkatkan skill IT Anda dengan pendampingan personal dari expert kami. Belajar coding, arsitektur sistem, hingga best practices.",
      number: "03",
    }
  ];

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
            LAYANAN KAMI
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-neue font-medium text-[20px] md:text-[28px] max-w-3xl leading-[1.3]"
          >
            GoInovoro membangun sistem, automasi, dan pengalaman digital yang rapi, cepat, dan siap dipakai untuk kebutuhan bisnis nyata.
          </motion.p>
        </section>

        {/* Services List */}
        <section className="flex flex-col gap-8">
          {services.map((service, i) => (
            <Link key={service.id} href={`/services/${service.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group relative flex flex-col md:flex-row md:items-center justify-between gap-8 p-8 md:p-12 bg-white rounded-3xl border border-black/5 hover:bg-black hover:text-white transition-colors duration-500 cursor-pointer overflow-hidden"
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-12 md:items-center z-10">
                  <span className="font-mono text-[16px] md:text-[24px] tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">
                    {service.number}
                  </span>
                  <div className="flex flex-col gap-4 max-w-2xl">
                    <h2 className="font-neue font-medium text-[32px] md:text-[48px] leading-[1.1] tracking-tightest">
                      {service.title}
                    </h2>
                    <p className="font-neue text-[18px] md:text-[20px] opacity-60 group-hover:opacity-80 transition-opacity leading-[1.4]">
                      {service.desc}
                    </p>
                  </div>
                </div>
                
                <div className="z-10 self-start md:self-center">
                  <div className="w-16 h-16 rounded-full border border-black/20 group-hover:border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black group-hover:text-white transition-colors">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                {/* Hover Reveal Image / Element (Optional Brikken Style) */}
                <div className="absolute inset-0 bg-black translate-y-[100%] group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1] z-0" />
              </motion.div>
            </Link>
          ))}
        </section>

      </div>
    </div>
  );
}
