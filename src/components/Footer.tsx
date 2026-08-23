"use client";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative bottom-0 left-0 right-0 bg-splash-pastel text-black min-h-screen flex flex-col z-10 pt-[120px]"
    >
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-10 flex-1 flex flex-col">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-16 mt-10">
          <div className="flex flex-col gap-8 max-w-[586px]">
            <div className="flex flex-col gap-6">
              <h2 className="font-neue font-medium text-[36px] md:text-[52px] lg:text-[68px] leading-[1.1] tracking-tightest whitespace-pre-wrap">
                Have something worth shaping?{"\n"}Let&apos;s build it properly.
              </h2>
              <p className="font-neue font-medium text-[18px] lg:text-[24px] leading-[1.3] max-w-[614px]">
                Submit your primary operational bottleneck and let our engineering
                team scope a custom solution.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="inline-flex items-center justify-center px-[19px] py-[14px] flex-1 lg:flex-none lg:w-[220px] bg-black text-white rounded-[5px] font-mono text-[14px] tracking-widest hover:bg-[#333] transition-colors text-center">
                Deploy Engineering Audit
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-end w-full mt-[72px]">
          <div className="w-full relative opacity-90 pb-8">
            <img
              src="/footer/logo_footer.png"
              alt="Goinovoro"
              className="w-full h-auto block"
            />
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 lg:px-10 pb-8">
        <div className="border-t border-black/15 flex flex-col md:flex-row items-center justify-between py-6 gap-4">
          <span className="font-mono text-[11px] lg:text-[14px] tracking-widest">
            ©Goinovoro | Company Number SC861008
          </span>
          <nav aria-label="Social media">
            <ul className="flex gap-6 items-center">
              <li>
                <a
                  href="https://www.linkedin.com/company/goinovoroco/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-75 transition-opacity block w-6 h-6 bg-black/10 rounded-sm"
                ></a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/goinovoroco/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-75 transition-opacity block w-6 h-6 bg-black/10 rounded-sm"
                ></a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
