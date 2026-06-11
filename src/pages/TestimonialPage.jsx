import { Link } from "react-router-dom";
import Testimonials from "../components/product/Testimonials";
import Pricing from "../components/product/Pricing";
import Faqs from "../components/product/Faqs";
import WhatsAppButton from "../components/ui/WhatsAppButton";

function TestimonialPage() {
  return (
    <div className='page-wrapper'>
      <section
        className='relative overflow-hidden'
        style={{
          backgroundImage:
            "radial-gradient(circle at top, rgba(255,255,255,0.85), transparent 28%), linear-gradient(180deg, #fff1f8 0%, #fdf1f6 100%)",
        }}
      >
        <div className='section-container py-12 md:py-16 lg:py-20'>
          <div className='absolute left-8 top-8 h-32 w-32 rounded-full bg-[#ffd6e4]/70 blur-3xl' />
          <div className='absolute right-8 top-32 h-40 w-40 rounded-full bg-[#e9e3ff]/70 blur-3xl' />
          <div className='max-w-4xl mx-auto text-center'>
            <div className='mb-8 text-left'>
              <Link
                to='/'
                className='inline-flex items-center gap-3 text-[#ac0447] font-semibold hover:text-[#7a0236]'
              >
                <span className='inline-flex h-10 w-10 items-center justify-center rounded-full bg-white shadow text-xl'>
                  ←
                </span>
                Back to product
              </Link>
            </div>

            <p className='text-sm uppercase tracking-[0.32em] text-[#ac0447] font-semibold'>
              more testimonies from our customers
            </p>
            <h1 className='mt-6 text-5xl font-black uppercase leading-tight text-[#C2185B] md:text-6xl lg:text-7xl'>
              your testimony is next
            </h1>

            <div className='mt-10 grid gap-4 md:grid-cols-2'>
              <div className='rounded-[28px] border border-white/80 bg-white/90 p-6 shadow-[0_24px_60px_rgba(194,24,91,0.12)]'>
                <p className='font-semibold text-lg text-[#2D2D2D]'>
                  Real stories, real healing
                </p>
              </div>
              <div className='rounded-[28px] border border-white/80 bg-white/90 p-6 shadow-[0_24px_60px_rgba(194,24,91,0.12)]'>
                <p className='font-semibold text-lg text-[#2D2D2D]'>
                  Trusted by women across Nigeria
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className='section-container py-14 text-center'>
        <div className='max-w-3xl mx-auto rounded-4xl border border-[#f7e3ed] bg-white/95 p-10 shadow-[0_28px_70px_rgba(194,24,91,0.12)]'>
          <p className='text-sm uppercase tracking-[0.32em] font-semibold text-[#ac0447]'>
            Ready for your own story?
          </p>
          <h2 className='text-3xl md:text-4xl font-bold mt-4 text-[#2D2D2D]'>
            Connect with us Now!
          </h2>
          <div className='mt-8 flex justify-center'>
            <WhatsAppButton
              href='https://wa.me/2347050704719'
              label='Chat on WhatsApp'
              className='w-full max-w-xs'
            />
          </div>
        </div>
      </section>

      <Pricing />

      <Faqs />
    </div>
  );
}

export default TestimonialPage;
