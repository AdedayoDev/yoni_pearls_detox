import WhatsAppButton from "../ui/WhatsAppButton";

export default function Pricing() {
  return (
    <section className='bg-surface'>
      <div className='section-container py-16 md:py-20 lg:py-24'>
        <div className='mb-8 overflow-hidden rounded-[32px]'>
          <div className='bg-slide-animation relative overflow-hidden rounded-[32px] px-6 py-8'>
            <div className='absolute inset-0 opacity-80'></div>
            <p
              style={{ fontFamily: "'Poppins', sans-serif" }}
              className='relative text-center text-3xl md:text-4xl font-extrabold text-[#111827]'
            >
              Struggling With Persistent Feminine Health Issues?
            </p>
          </div>
        </div>

        <div className='mx-auto max-w-5xl rounded-[40px] border border-[#E5E7EB] bg-white p-8 shadow-[0_32px_100px_rgba(15,23,42,0.08)]'>
          <div className='grid gap-10 lg:grid-cols-[1.4fr_0.9fr]'>
            <div className='space-y-8'>
              <div className='rounded-3xl border border-[#E0E7FF] bg-[#EFF6FF] p-8'>
                <div className='flex flex-col gap-6'>
                  <div className='inline-flex items-center gap-3 rounded-full border border-[#C7D2FE] bg-[#EFF6FF] px-4 py-2'>
                    <span className='inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#C7D2FE]'>
                      <svg
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5'
                      >
                        <path d='M5 11.5L3 12.5V11.5L5 11.5Z' fill='#FBBF24' />
                        <path
                          d='M3 12.5V11.5C3 10.8431 3.59784 10.35 4.24705 10.53L8.5 11.78V7.5C8.5 6.67157 9.17157 6 10 6H11.5C12.3284 6 13 6.67157 13 7.5V16.5C13 17.3284 12.3284 18 11.5 18H10C9.17157 18 8.5 17.3284 8.5 16.5V12.22L4.24705 13.47C3.59784 13.65 3 13.1569 3 12.5Z'
                          fill='#F59E0B'
                        />
                        <path
                          d='M13 8.5C14 8.5 14.9 8.64 15.7 8.88V15.12C14.9 15.36 14 15.5 13 15.5V8.5Z'
                          fill='#FBBF24'
                        />
                      </svg>
                    </span>
                    <p
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                      className='text-sm font-semibold uppercase tracking-[0.24em] text-[#4338CA]'
                    >
                      7 days promo
                    </p>
                  </div>

                  <div className='space-y-4'>
                    <h2
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                      className='text-4xl font-extrabold text-[#111827]'
                    >
                      1 Cleanse — 3 Pairs
                    </h2>
                    <p
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                      className='text-lg leading-8 text-[#475569]'
                    >
                      3 pairs is #4500, but due to the 7-day promo we&apos;re
                      running, you can get it for just #3000 when you order
                      between now and 7 days.
                    </p>
                  </div>
                </div>
              </div>

              <div className='grid gap-4 sm:grid-cols-3'>
                <div className='rounded-3xl border border-[#D1FAE5] bg-[#ECFDF5] p-6 text-center'>
                  <p
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                    className='text-sm uppercase tracking-[0.24em] text-[#059669] font-semibold'
                  >
                    Payment
                  </p>
                  <p
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                    className='mt-4 text-lg font-semibold text-[#111827]'
                  >
                    Payment on delivery
                  </p>
                </div>
                <div className='rounded-3xl border border-[#DBEAFE] bg-[#EFF6FF] p-6 text-center'>
                  <p
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                    className='text-sm uppercase tracking-[0.24em] text-[#2563EB] font-semibold'
                  >
                    Delivery
                  </p>
                  <p
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                    className='mt-4 text-lg font-semibold text-[#111827]'
                  >
                    Free delivery across South Western States
                  </p>
                </div>
                <div className='rounded-3xl border border-[#FEE2E2] bg-[#FEF2F2] p-6 text-center'>
                  <p
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                    className='text-sm uppercase tracking-[0.24em] text-[#B91C1C] font-semibold'
                  >
                    Refund
                  </p>
                  <p
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                    className='mt-4 text-lg font-semibold text-[#111827]'
                  >
                    Refund policy included
                  </p>
                </div>
              </div>
            </div>

            <div className='rounded-[32px] border border-[#E5E7EB] bg-[#F8FAFC] p-8 shadow-sm'>
              <div className='space-y-6'>
                <div className='rounded-3xl border border-[#FBBF24] bg-[#FFFBEB] p-6 flex items-start gap-4'>
                  <div className='text-3xl leading-none'>📣</div>
                  <div>
                    <p
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                      className='text-sm uppercase tracking-[0.24em] text-[#B45309] font-semibold'
                    >
                      Announcement
                    </p>
                    <p
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                      className='text-base leading-7 text-[#44403C] font-semibold'
                    >
                      Beware of fake yoni pearls. Number of pairs depends on
                      what you are treating.
                    </p>
                  </div>
                </div>

                <div className='space-y-4 rounded-3xl border border-[#E5E7EB] bg-white p-6'>
                  <p
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                    className='text-sm uppercase tracking-[0.24em] text-[#6B7280] font-semibold'
                  >
                    Payment & delivery
                  </p>
                  <p
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                    className='text-base leading-7 text-[#334155]'
                  >
                    Pay when your product arrives. No upfront fee and full
                    refund policy guaranteed.
                  </p>
                  <p
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                    className='text-base leading-7 text-[#334155]'
                  >
                    Free delivery is included for orders within the South
                    Western States.
                  </p>
                </div>

                <div className='text-center'>
                  <WhatsAppButton
                    message='I want to order 1 cleanse - 3 pairs at the 7-day promo price of #3000'
                    label='ORDER NOW!'
                    className='mx-auto w-full max-w-sm'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
