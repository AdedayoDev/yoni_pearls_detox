import { Link } from "react-router-dom";
import Testimonials from "../components/product/Testimonials";
import Pricing from "../components/product/Pricing";
import Faqs from "../components/product/Faqs";
import WhatsAppButton from "../components/ui/WhatsAppButton";

function TestimonialPage() {
  return (
    <div className='page-wrapper'>
      <section className='single-section bg-bg'>
        <div className='section-container py-12 md:py-20 lg:py-28'>
          <div className='max-w-5xl mx-auto text-center'>
            <div className='mb-10 text-left'>
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

            <p
              style={{ fontFamily: "'Poppins', sans-serif" }}
              className='text-base md:text-xl font-semibold uppercase tracking-[0.24em] text-[#ac0447]'
            >
              more testimonies from our customers
            </p>
            <h1
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
              className='text-4xl md:text-6xl lg:text-7xl uppercase leading-tight text-[#C2185B] mt-6'
            >
              YOUR TESTIMONY IS NEXT!
            </h1>

            <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-4'>
              <div className='px-6 py-5 rounded-xl bg-gradient-to-r from-[#FFF9C4] to-[#FFE082] border-2 border-[#C2185B] text-center'>
                <p className='font-semibold text-lg text-[#2D2D2D]'>
                  Real stories, real healing
                </p>
              </div>
              <div className='px-6 py-5 rounded-xl bg-gradient-to-r from-[#FFE5F0] to-[#FFF0F5] border-2 border-[#C2185B] text-center'>
                <p className='font-semibold text-lg text-[#2D2D2D]'>
                  Trusted by women across Nigeria
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className='section-container py-12 text-center'>
        <p className='text-sm uppercase tracking-[0.24em] font-semibold text-[#ac0447]'>
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
      </section>

      <Pricing />

      <Faqs />
    </div>
  );
}

export default TestimonialPage;
