import { useState } from "react";
import { faqs } from "../../data/productData";

export default function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <section className='bg-[#fdf0f6]'>
      <div className='section-container py-16 md:py-20 lg:py-24'>
        <div className='mx-auto max-w-3xl text-center mb-10'>
          <h2 className='heading-main text-3xl md:text-4xl'>
            Common Questions
          </h2>
        </div>
        <div className='space-y-4'>
          {faqs.map((item, index) => {
            const isOpen = index === activeIndex;
            return (
              <div
                key={item.question}
                className='overflow-hidden rounded-[28px] border border-white/80 bg-white/95 shadow-[0_20px_60px_rgba(194,24,91,0.1)]'
              >
                <button
                  type='button'
                  onClick={() => toggleItem(index)}
                  className='w-full px-6 py-5 text-left flex items-center justify-between gap-4 transition-colors duration-200 hover:bg-[#fff2f6]'
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${index}`}
                >
                  <span className='font-semibold text-lg text-[#2d1630]'>
                    {item.question}
                  </span>
                  <span className='text-2xl font-bold text-[#ac0447]'>
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div
                  id={`faq-content-${index}`}
                  className={`faq-answer px-6 pb-6 ${isOpen ? "pt-4 max-h-72" : "max-h-0"}`}
                >
                  <p className='text-body text-[#5a3d5c] leading-7'>
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
