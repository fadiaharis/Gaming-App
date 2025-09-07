"use client";

import Image from "next/image";

export default function LegalBar() {
  return (
    <section className="px-3 md:px-10 py-8 md:py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start text-sm text-white/80 leading-relaxed">
        
        {/* Left block */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Image
              src="/images/betaHg.svg"
              alt="HG.GAME"
              width={150}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </div>
          <p>
            The handicap and sports odds information contained on this website is
            for entertainment purposes only. Please check the betting regulations
            in your jurisdiction as betting regulations vary from state to state,
            province to province and country to country. Use of this information
            to violate any law or regulation is prohibited. This website is not
            affiliated with or endorsed by any professional or collegiate league,
            association, or team. HG.GAME is not directed to audiences under the
            age of 18. Final income is not guaranteed.
          </p>
        </div>

        {/* Right block */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/images/licensed.png"
              alt="Licensed"
              width={60}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </div>
          <p>
            HG.GAME is operated by Gold Sunny Limited, a limited liability company
            registered in REPUBLIC OF COSTA RICA with company registration number
            3-102-898093, with registered address at Province 01 San José, Canton 02
            Escazu, San Rafael Building Fuentecantos, First Floor, Office 1. It is
            licensed and regulated by the Government of the Autonomous Island of
            Anjouan, Union of Comoros and operates under License No. ALSI-202505042-FI2.
          </p>
        </div>
      </div>
    </section>
  );
}
