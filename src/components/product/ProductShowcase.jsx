import { motion } from "framer-motion";
import WhatsAppButton from "../ui/WhatsAppButton";

const products = [
  {
    id: 3,
    image: "/yp6.jpg.jpeg",
    alt: "Yoni Pearl 6",
    text: "Trusted by Thousands",
  },
  {
    id: 4,
    image: "/yp7.jpg.jpeg",
    alt: "Yoni Pearl 7",
    text: "Results You'll Feel",
  },
];

const diseases = [
  "PCOS",
  "Cyst",
  "Irregular menstrual cycle",
  "Cramps",
  "Foul odour",
  "Yeast infection",
  "STDs",
  "Fibroids",
  "Endometriosis",
  "Vaginal dryness",
  "Blocked tubes",
  "Bladder issues",
  "UTI",
  "Infertility",
];

export default function ProductShowcase() {
  return (
    <section className='bg-[#fff4f8]'>
      <div className='section-container py-16 md:py-20 lg:py-24'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className='relative overflow-hidden rounded-[42px] border border-white/80 bg-white/80 p-10 shadow-[0_35px_95px_rgba(194,24,91,0.18)] backdrop-blur-xl'
        >
          <div className='absolute left-6 top-6 h-36 w-36 rounded-full bg-[#ffe4f2]/70 blur-3xl' />
          <div className='absolute right-8 bottom-8 h-44 w-44 rounded-full bg-[#e7e4ff]/70 blur-3xl' />
          <div className='text-center'>
            <p className='text-sm uppercase tracking-[0.28em] text-[#ac0447]'>
              Behold The Power
            </p>
            <h2 className='mt-6 text-5xl font-black uppercase tracking-[-0.04em] text-[#38112f]'>
              Behold The Power
            </h2>
            <p className='mt-6 text-lg leading-8 text-[#5a3d5c]'>
              Introducing Original Yoni Pearls :
            </p>
          </div>
        </motion.div>

        <div className='mt-14 grid gap-10 xl:grid-cols-[1.15fr_0.85fr] items-start'>
          <div className='grid gap-6'>
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.1 * index }}
                className='glass-card overflow-hidden rounded-4xl'
              >
                <img
                  src={product.image}
                  alt={product.alt}
                  className='h-80 w-full object-cover'
                />
                <div className='p-6'>
                  <p className='text-center text-base font-semibold text-[#2c1c34]'>
                    {product.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className='rounded-4xl border border-white/70 bg-[#fff6fb] p-8 shadow-[0_30px_50px_rgba(194,24,91,0.1)]'>
            <h3 className='text-3xl font-bold text-[#ac0447]'>
              What is Yoni Pearls?
            </h3>
            <p className='mt-4 text-base leading-8 text-[#5a3d5c]'>
              The premium ritual for feminine wellness that combines trusted
              herbal tradition with modern support.
            </p>
            <div className='mt-8 grid gap-4'>
              <div className='rounded-[28px] border border-white/80 bg-white/90 p-6 shadow-[0_18px_60px_rgba(194,24,91,0.08)]'>
                <p className='text-lg font-semibold text-[#2c1c34]'>
                  100% Natural & Organic
                </p>
                <p className='mt-3 text-sm leading-7 text-[#5a3d5c]'>
                  Carefully selected natural and organic herbs chosen to
                  encourage proper functioning of the reproductive organs and
                  prevent the development of more serious gynecological
                  illnesses.
                </p>
              </div>
              <div className='rounded-[28px] border border-white/80 bg-white/90 p-6 shadow-[0_18px_60px_rgba(194,24,91,0.08)]'>
                <p className='text-lg font-semibold text-[#2c1c34]'>
                  5000+ Years of Tradition
                </p>
                <p className='mt-3 text-sm leading-7 text-[#5a3d5c]'>
                  Made from natural ingredients that have been used in
                  traditional Chinese medicine for more than 5000 years, proven
                  and tested through centuries.
                </p>
              </div>
              <div className='rounded-[28px] border border-white/80 bg-white/90 p-6 shadow-[0_18px_60px_rgba(194,24,91,0.08)]'>
                <p className='text-lg font-semibold text-[#2c1c34]'>
                  Deep Cleansing & Care
                </p>
                <p className='mt-3 text-sm leading-7 text-[#5a3d5c]'>
                  Cleansing the vagina with Yoni Pearls helps eliminate toxins,
                  restore balance, and promote overall reproductive health
                  naturally.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-16 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-start'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
            className='rounded-[2.25rem] border border-[#f4d6e8] bg-white/95 p-10 shadow-[0_30px_65px_rgba(194,24,91,0.14)]'
          >
            <h3 className='text-3xl md:text-4xl font-bold text-[#ac0447] text-center'>
              Yoni pearls has been know to{" "}
              <span className='text-5xl'>cure</span> these diseases in female
            </h3>
            <div className='mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
              {diseases.map((disease) => (
                <div
                  key={disease}
                  className='rounded-[28px] border border-white/80 bg-[#fff4f6] p-6 text-center shadow-[0_18px_40px_rgba(194,24,91,0.08)]'
                >
                  <p className='font-semibold text-[#2d1630]'>{disease}</p>
                </div>
              ))}
            </div>
            <div className='mt-10 text-center'>
              <WhatsAppButton
                href='https://wa.me/2347050704719'
                label='ORDER NOW!'
                className='mx-auto w-full max-w-xs'
              />
            </div>
          </motion.div>

          <div className='space-y-6'>
            <div className='rounded-4xl bg-[#fff0f6] p-8 shadow-[0_24px_60px_rgba(194,24,91,0.1)]'>
              <h4 className='text-xl font-semibold text-[#38112f]'>
                Premium product launch
              </h4>
              <p className='mt-4 text-sm leading-7 text-[#5a3d5c]'>
                Crafted with intention, packaged with care, and designed to feel
                like a high-end feminine wellness experience.
              </p>
            </div>
            <div className='rounded-4xl overflow-hidden border border-white/80 bg-white/95 shadow-[0_24px_60px_rgba(194,24,91,0.1)]'>
              <img
                src='/about.jpeg'
                alt='About Yoni Pearls'
                className='h-64 w-full object-cover'
              />
            </div>
            <div className='rounded-4xl overflow-hidden border border-white/80 bg-white/95 shadow-[0_24px_60px_rgba(194,24,91,0.1)]'>
              <img
                src='/about-2.jpeg'
                alt='About Yoni Pearls'
                className='h-64 w-full object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
