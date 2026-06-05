import WhatsAppButton from "../ui/WhatsAppButton";
import { WHATSAPP_MESSAGES } from "../../data/siteConfig";

export default function FinalCta() {
  return (
    <div className='bg-primary '>
      <div className='section-container py-20 md:py-24 lg:py-28'>
        <div className='mx-auto max-w-3xl text-center space-y-6'>
          <p
            className='text-script'
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}
          >
            Your body. Your confidence. Your choice.
          </p>
          <h2 className='heading-main text-4xl md:text-5xl'>
            Ready to Feel Like Yourself Again?
          </h2>
          <p
            className='text-body text-white'
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Join thousands of women who have already discovered the natural
            secret to feminine wellness.
          </p>
          <WhatsAppButton
            message={WHATSAPP_MESSAGES.default}
            label='ORDER NOW!'
            className='mx-auto inline-flex w-full md:w-auto items-center justify-center gap-3 py-4 text-base sm:text-lg'
          />
        </div>
      </div>
    </div>
  );
}
