
import { Link } from "react-router-dom";

const quoteCards = [
  {
    quote:
      "Your product really work perfectly no more pains duing my cirlce..... Thanks a lot.",
    label: "Verified user",
  },
  {
    quote: "I feel better now thank you.",
    label: "Grateful customer",
  },
  {
    quote: "I still washed out some after disposing this ones.",
    label: "Real result",
  },
  {
    quote: "My fibroids have fallen out o",
    label: "Life-changing",
  },
];

export default function Testimonials() {
  return (
    <div className='bg-bg'>
      <div className='section-container py-16 md:py-20'>
        <div className='text-center mb-10'>
          <h2  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}  className='heading-sub text-4xl font'>What Women Are Saying</h2>
        </div>

        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          {quoteCards.map((item, index) => (
            <div
              key={index}
              className='card rounded-3xl border border-(--color-border-tertiary) bg-white p-8 text-left shadow-sm'
            >
              <p className='text-lg leading-8 text-[#2D2D2D] italic'>
                “{item.quote}”
              </p>
              <p className='mt-6 font-semibold text-sm text-text-muted'>
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <div className='mt-12 text-center'>
          <Link
            to='/testimonials'
            className='btn-primary inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg'
          >
            Read More Testimonials
          </Link>
        </div>
      </div>
    </div>
  );
}
