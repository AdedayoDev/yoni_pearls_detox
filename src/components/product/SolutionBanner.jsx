export default function SolutionBanner() {
  return (
    <section className='relative overflow-hidden bg-[#520b3f] text-white'>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_35%)]' />
      <div className='section-container relative py-8 md:py-10'>
        <div className='mx-auto overflow-hidden rounded-4xl border border-white/15 bg-white/10 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl'>
          <div className='relative overflow-hidden rounded-[28px] bg-[#6f144f]/90 px-6 py-8 text-center'>
            <div className='shimmer-strip absolute inset-0 opacity-30' />
            <div className='relative z-10'>
              <h2 className='text-2xl font-semibold uppercase tracking-[0.32em] text-white sm:text-3xl md:text-4xl'>
                Your solution is here!
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
