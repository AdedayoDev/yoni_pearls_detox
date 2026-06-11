import { motion } from "framer-motion";

export default function Hero() {
  const conditions = [
    "Fibroid",
    "Unpleasant Vaginal Odor",
    "Persistent Vaginal Discharge",
    "Itching And Irritation",
    "Recurrent Infections",
    "Hormonal Imbalance Concerns",
  ];

  const icons = ["🌺", "🌸", "💧", "🔥", "🩺", "⚖️"];

  return (
    <section className='relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.48),transparent_28%),linear-gradient(180deg,#fff7f8_0%,#fff1f4_100%)]'>
      <div className='hero-blob hero-blob-1' />
      <div className='hero-blob hero-blob-2' />
      <div className='section-container relative py-14 md:py-16 lg:py-20'>
        <div className='mx-auto grid gap-12 lg:grid-cols-[1.1fr_0.95fr] items-center'>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className='space-y-8'
          >
            <div className='inline-flex text-center md:text-left  items-center rounded-full border border-white/70 bg-white/70 px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-[#921538] shadow-[0_18px_50px_rgba(194,24,91,0.14)] backdrop-blur-xl'>
              Trusted By Women Across Nigeria
            </div>

            <div className='space-y-5'>
              <h1 className='text-4xl text-center md:text-left font-semibold leading-tight tracking-[-0.03em] text-[#341828] sm:text-5xl md:text-[3.5rem] lg:text-[4.4rem]'>
                Are You{" "}
                <span className='relative inline-flex'>
                  <span className='relative z-10 text-[#c21658]'>Battling</span>
                  <span className='absolute inset-x-0 -bottom-2 h-4 rounded-full bg-linear-to-r from-[#ffdce2] via-[#f8c5ff] to-[#afdbff] opacity-60 blur-2xl' />
                </span>{" "}
                With Any Of The Following Health Issues?
              </h1>

              <p className='max-w-3xl text-center md:text-left text-3xl font-extrabold uppercase tracking-[0.16em] text-[#ac0447] drop-shadow-[0_20px_40px_rgba(194,24,91,0.22)] sm:text-4xl md:text-[3.4rem]'>
                Your Solution Has Come
              </p>
            </div>

            <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-3'>
              {conditions.map((condition, index) => (
                <motion.button
                  key={condition}
                  type='button'
                  whileHover={{ y: -4, scale: 1.02 }}
                  className='group flex items-center gap-4 rounded-[30px] border border-white/60 bg-white/90 px-5 py-4 text-left shadow-[0_24px_60px_rgba(194,24,91,0.08)] transition duration-300 hover:border-[#C2185B]/70 hover:bg-[#fff2f8]'
                >
                  <span className='flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-[#ffebf3] to-[#eef5ff] text-xl'>
                    {icons[index]}
                  </span>
                  <span className='font-semibold text-[#2c1f31]'>
                    {condition}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
