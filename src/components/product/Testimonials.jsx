import { motion } from "framer-motion";
import { testimonials } from "../../data/productData";

export default function Testimonials() {
  return (
    <section className='bg-[#fff1f6]'>
      <div className='section-container py-16 md:py-20 lg:py-24'>
        <div className='text-center mb-10'>
          <h2
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 500,
              fontSize: "2.5rem",
              color: "#ac0447",
            }}
            className='heading-sub text-4xl '
          >
            Read some testimonies from some women that has used our product
          </h2>
        </div>

        <div className='grid gap-8 lg:grid-cols-3'>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1 * index }}
              className='group overflow-hidden rounded-4xl border border-white/60 bg-white/90 shadow-[0_25px_60px_rgba(194,24,91,0.12)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_35px_75px_rgba(194,24,91,0.16)]'
            >
              <div className='relative h-[420px] overflow-hidden'>
                <img
                  src={testimonial.img}
                  alt={`Testimony from ${testimonial.name}`}
                  className='h-full w-full object-cover transition duration-500 group-hover:scale-105'
                />
                <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-5'>
                  <p className='text-sm uppercase tracking-[0.24em] text-white opacity-80'>
                    {testimonial.city}
                  </p>
                  <p className='mt-2 text-xl font-semibold text-white'>
                    {testimonial.name}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
