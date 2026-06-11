import WhatsAppButton from "../ui/WhatsAppButton";

export default function Pricing() {
  return (
    <section className='bg-[#fdf2f7]'>
      <div className='section-container py-16 md:py-20 lg:py-24'>
        <div className='grid gap-10 lg:grid-cols-[1.35fr_0.85fr]'>
          <div className='space-y-8'>
            <div className='overflow-hidden rounded-[2.25rem] border border-white/85 bg-white/90 p-8 shadow-[0_35px_90px_rgba(194,24,91,0.16)]'>
              <div className='rounded-[28px] promo-gradient p-8 shadow-[0_18px_50px_rgba(194,24,91,0.08)]'>
                <div className='inline-flex items-center gap-3 rounded-full border border-[#f8c2d2] bg-white/70 px-4 py-2 text-sm uppercase tracking-[0.28em] text-[#ac0447]'>
                  7 days promo
                </div>
                <div className='mt-8 space-y-4'>
                  <h2 className='text-4xl font-extrabold text-[#21142a]'>
                    1 Cleanse — 3 Pairs
                  </h2>
                  <p className='text-lg leading-8 text-[#4f3a51]'>
                    3 pairs is{" "}
                    <strong className='text-2xl text-[#ac0447]'>#4500,</strong>{" "}
                    but due to the 7-day promo we&apos;re running, you can get
                    it for just{" "}
                    <strong className='text-2xl text-[#ac0447]'>#3000</strong>{" "}
                    when you order between now and 7 days.
                  </p>
                </div>
              </div>

              <div className='mt-8 grid gap-4 sm:grid-cols-3'>
                <div className='rounded-[28px] border border-[#f7f0f4] bg-[#fff4fb] p-6 text-center'>
                  <p className='text-sm uppercase tracking-[0.25em] font-semibold text-[#9d2264]'>
                    Payment
                  </p>
                  <p className='mt-4 text-lg font-semibold text-[#2a1730]'>
                    Payment on delivery
                  </p>
                </div>
                <div className='rounded-[28px] border border-[#f7f0f4] bg-[#f8eef8] p-6 text-center'>
                  <p className='text-sm uppercase tracking-[0.25em] font-semibold text-[#9d2264]'>
                    Delivery
                  </p>
                  <p className='mt-4 text-lg font-semibold text-[#2a1730]'>
                    Free delivery across South Western States
                  </p>
                </div>
                <div className='rounded-[28px] border border-[#f7f0f4] bg-[#fff5f6] p-6 text-center'>
                  <p className='text-sm uppercase tracking-[0.25em] font-semibold text-[#9d2264]'>
                    Refund
                  </p>
                  <p className='mt-4 text-lg font-semibold text-[#2a1730]'>
                    Refund policy included
                  </p>
                </div>
              </div>
            </div>

            <div className='rounded-4xl border border-white/70 bg-white/90 p-8 shadow-[0_28px_70px_rgba(194,24,91,0.10)]'>
              <div className='flex flex-col gap-6'>
                <div className='rounded-[28px] bg-[#fff0f5] p-6 shadow-[0_16px_40px_rgba(194,24,91,0.08)]'>
                  <p className='text-sm uppercase tracking-[0.28em] text-[#ac0447] font-semibold'>
                    Secure Payment
                  </p>
                  <p className='mt-3 text-base leading-7 text-[#4f3a51]'>
                    Pay when your product arrives. No upfront fee and full
                    refund policy guaranteed.
                  </p>
                </div>
                <div className='rounded-[28px] bg-[#f9f0fb] p-6 shadow-[0_16px_40px_rgba(194,24,91,0.08)]'>
                  <p className='text-sm uppercase tracking-[0.28em] text-[#ac0447] font-semibold'>
                    Easy Ordering
                  </p>
                  <p className='mt-3 text-base leading-7 text-[#4f3a51]'>
                    Tap any WhatsApp button on this page. Our team will respond
                    to confirm your order and arrange delivery.
                  </p>
                </div>
                <div className='rounded-[28px] bg-[#fff5f7] p-6 shadow-[0_16px_40px_rgba(194,24,91,0.08)]'>
                  <p className='text-sm uppercase tracking-[0.28em] text-[#ac0447] font-semibold'>
                    Fast Processing
                  </p>
                  <p className='mt-3 text-base leading-7 text-[#4f3a51]'>
                    Your order is prepared quickly and sent discreetly, so you
                    can begin your cleanse sooner.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='rounded-5xl border border-white/75 bg-[#fff2f8] p-8 shadow-[0_30px_75px_rgba(194,24,91,0.14)]'>
            <div className='rounded-3xl bg-[#fdebfb] p-6'>
              <div className='flex items-center gap-4 text-sm uppercase tracking-[0.28em] font-semibold text-[#ac0447]'>
                <span className='inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/80 text-[#ac0447]'>
                  ⏳
                </span>
                7 days promo
              </div>
              <h3 className='mt-6 text-3xl font-bold text-[#38112f]'>
                Limited-time premium offer
              </h3>
            </div>

            <div className='mt-8 space-y-6'>
              <div className='rounded-[28px] border border-white/80 bg-white p-6'>
                <div className='mb-4 text-sm uppercase tracking-[0.28em] text-[#ac0447] font-semibold'>
                  Payment & delivery
                </div>
                <p className='text-base leading-7 text-[#4f3a51]'>
                  Pay when your product arrives. No upfront fee and full refund
                  policy guaranteed.
                </p>
                <p className='mt-4 text-base leading-7 text-[#4f3a51]'>
                  Free delivery is included for orders within the South Western
                  States.
                </p>
              </div>
              <div className='rounded-[28px] border border-[#f7f0f3] bg-[#fff4f7] p-6'>
                <div className='grid gap-4'>
                  <div className='flex items-start gap-4'>
                    <span className='mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#ffe3f2] text-[#ac0447]'>
                      1
                    </span>
                    <div>
                      <p className='font-semibold text-[#38112f]'>Order</p>
                      <p className='text-sm leading-6 text-[#5a3d5c]'>
                        Send your order request via WhatsApp and receive
                        confirmation quickly.
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start gap-4'>
                    <span className='mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#f5e2ff] text-[#ac0447]'>
                      2
                    </span>
                    <div>
                      <p className='font-semibold text-[#38112f]'>Processing</p>
                      <p className='text-sm leading-6 text-[#5a3d5c]'>
                        Your order is prepared carefully and packed for discreet
                        delivery.
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start gap-4'>
                    <span className='mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#ffe8f5] text-[#ac0447]'>
                      3
                    </span>
                    <div>
                      <p className='font-semibold text-[#38112f]'>Delivered</p>
                      <p className='text-sm leading-6 text-[#5a3d5c]'>
                        Receive free delivery within the South Western States
                        and enjoy discreet packaging.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-8 text-center'>
              <WhatsAppButton
                message='I want to buy'
                label='ORDER NOW!'
                className='mx-auto w-full max-w-sm'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
