import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="relative overflow-hidden rounded-xl">
      <div className="card relative h-[230px] md:h-[260px] lg:h-[280px]">
        <div className="pointer-events-none absolute -left-20 bottom-0 top-0 hidden md:block">
          <Image
            src="/images/bannerLeftCoin.avif"
            alt="HG coin"
            width={520}
            height={520}
            priority
            className="h-[420px] w-[420px] lg:w-[420px]"
          />
        </div>

        <div className=" pointer-events-none absolute inset-y-0 right-0 hidden md:flex items-end p-2">
          <Image
            src="/images/bannerRight.avif"
            alt="HG athletes"
            width={1100}
            height={800}
            priority
            className="h-full w-auto"
          />
        </div>

        {/* OVERLAY CONTENT */}
        <div className="relative z-10 h-full px-6 md:px-8 lg:px-10">
          <div className="h-full flex flex-col items-center justify-center gap-3 md:max-w-[520px]">
            <h1 className="text-2xl md:text-[20px] font-semibold text-white">
              Stay Untamed
            </h1>

            <div className="inline-flex w-fit items-center justify-center rounded-lg bg-black/70 px-8 py-2 md:px-12 md:py-2.5 shadow-lg backdrop-blur-sm">
              <p className="text-center leading-snug text-white text-[14px] md:text-[15px]">
                <span className="block font-medium">Sign Up &amp; Get</span>
                <span className="block font-extrabold tracking-wide">
                  UP TO <span className="text-green-400">₹1,749,238.93</span>
                </span>
                <span className="block font-medium">in Casino or Sports</span>
              </p>
            </div>

            <Link href="/#signup" className="btn-primary px-10">
              Join Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
