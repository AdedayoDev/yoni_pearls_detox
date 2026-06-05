import WhatsAppButton from "../ui/WhatsAppButton";

export default function SolutionBanner() {
  return (
    <section className='bg-[#C2185B] text-white'>
      <div className='section-container py-16 md:py-20 lg:py-24'>
        <div className='mx-auto max-w-4xl text-center'>
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight'>
            Your Search Ends Here
          </h2>
          <div className='mt-10'>
            <WhatsAppButton
              href='https://wa.me/2348136621545'
              label='ORDER NOW!'
              className='mx-auto w-full max-w-xs'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
