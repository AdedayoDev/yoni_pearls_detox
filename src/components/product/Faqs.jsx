import { useState } from "react";
import { faqs } from "../../data/productData";

export default function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <div className='bg-surface'>
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
                className='card overflow-hidden rounded-3xl border border-(--color-border-tertiary) bg-white shadow-sm'
              >
                <button
                  type='button'
                  onClick={() => toggleItem(index)}
                  className='w-full px-6 py-5 text-left flex items-center justify-between gap-4 transition-colors duration-200 hover:bg-surface'
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${index}`}
                >
                  <span className='font-semibold text-lg'>{item.question}</span>
                  <span className='text-xl font-bold'>
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div
                  id={`faq-content-${index}`}
                  className={`px-6 pb-6 transition-all duration-300 ${
                    isOpen ? "pt-0 max-h-96" : "max-h-0 overflow-hidden"
                  }`}
                >
                  <p className='text-body text-text-muted leading-7'>
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
