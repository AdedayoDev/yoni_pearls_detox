export default function Hero() {
  return (
    <section className='single-section bg-bg'>
      <div className='section-container py-12 md:py-20 lg:py-28'>
        <div className='mx-auto max-w-5xl text-center'>
          <h1
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}
            className='text-4xl md:text-5xl lg:text-6xl mt-4 leading-tight text-[#C2185B]'
          >
            Struggling With Persistent Feminine Health Issues?
          </h1>

          <p
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 200 }}
            className='heading-sub mt-4 text-lg md:text-xl text-text-muted'
          >
            If you're battling any of the following your Transformation Starts
            Here.
          </p>

          <div className='mt-12 mx-auto max-w-4xl'>
            <h3 className='font-semibold text-lg mb-8 text-center'>
              Common issues we help with
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
              <div className='px-6 py-5 rounded-xl bg-gradient-to-r from-[#FFF9C4] to-[#FFE082] border-2 border-[#C2185B] text-center'>
                <p className='font-semibold text-lg text-[#2D2D2D]'>Fibroid</p>
              </div>
              <div className='px-6 py-5 rounded-xl bg-gradient-to-r from-[#FFE5F0] to-[#FFF0F5] border-2 border-[#C2185B] text-center'>
                <p className='font-semibold text-lg text-[#2D2D2D]'>
                  🌸 Unpleasant vaginal odor
                </p>
              </div>
              <div className='px-6 py-5 rounded-xl bg-gradient-to-r from-[#FFF4E6] to-[#FFE8D1] border-2 border-[#C2185B] text-center'>
                <p className='font-semibold text-lg text-[#2D2D2D]'>
                  💧 Persistent vagina discharge
                </p>
              </div>
              <div className='px-6 py-5 rounded-xl bg-gradient-to-r from-[#E8F4F8] to-[#D1E8F2] border-2 border-[#C2185B] text-center'>
                <p className='font-semibold text-lg text-[#2D2D2D]'>
                  🔥 Itching and irritation
                </p>
              </div>
              <div className='px-6 py-5 rounded-xl bg-gradient-to-r from-[#FCE4EC] to-[#F8BBE2] border-2 border-[#C2185B] text-center'>
                <p className='font-semibold text-lg text-[#2D2D2D]'>
                  🩺 Recurrent infections
                </p>
              </div>
              <div className='px-6 py-5 rounded-xl bg-gradient-to-r from-[#E1F5FE] to-[#B3E5FC] border-2 border-[#C2185B] text-center'>
                <p className='font-semibold text-lg text-[#2D2D2D]'>
                  ⚖️ Hormonal imbalance concerns
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
