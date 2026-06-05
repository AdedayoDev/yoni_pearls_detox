import { Link } from "react-router-dom";

const testimonialEntries = [
  {
    type: "text",
    quote:
      "Your product really work perfectly no more pains duing my cirlce..... Thanks a lot.",
    caption: "Verified user",
  },
  {
    type: "image",
    src: "/WhatsApp%20Image%202026-05-30%20at%2000.09.08.jpeg",
    caption: "Real feedback",
  },
  {
    type: "text",
    quote: "I feel better now thank you.",
    caption: "Grateful customer",
  },
  {
    type: "image",
    src: "/WhatsApp%20Image%202026-05-30%20at%2000.09.09.jpeg",
    caption: "Trusted by women",
  },
  {
    type: "image",
    src: "/yp%203.jpg.jpeg",
    caption: "Natural support",
  },
  {
    type: "text",
    quote: "My fibroids have fallen out o",
    caption: "Life-changing",
  },
];

function TestimonialPage() {
  return (
    <div className='page-wrapper'>
      <section className='section-container py-16 text-center'>
        <p className='text-script text-accent'>Real women. Real change.</p>
        <h1 className='heading-main text-4xl md:text-5xl mt-4'>
          More testimonials, photos and honest stories
        </h1>
        <p className='text-body text-text-muted max-w-3xl mx-auto mt-4'>
          Browse a beautiful mix of testimonial cards, real customer reactions
          and image highlights from women who have tried it.
        </p>
      </section>

      <section className='bg-surface py-16'>
        <div className='section-container grid gap-6 md:grid-cols-3'>
          {testimonialEntries.map((item, index) => (
            <div
              key={index}
              className='rounded-3xl overflow-hidden bg-white shadow-sm'
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.caption}
                  className='h-72 w-full object-cover'
                />
              ) : (
                <div className='p-8'>
                  <p className='text-lg leading-8 text-[#2D2D2D] italic'>
                    “{item.quote}”
                  </p>
                </div>
              )}
              <div className='border-t border-(--color-border-tertiary) px-6 py-4'>
                <p className='text-sm font-semibold text-text-muted'>
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='section-container py-16 text-center'>
        <h2 className='heading-sub text-3xl'>
          See more real results from women like you
        </h2>
        <p className='text-body text-text-muted max-w-2xl mx-auto mt-4'>
          Each story is built around real experience, natural relief and
          regained confidence.
        </p>
        <div className='mt-10'>
          <Link
            to='/'
            className='btn-secondary-ghost inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg'
          >
            Back to Product
          </Link>
        </div>
      </section>
    </div>
  );
}

export default TestimonialPage;
