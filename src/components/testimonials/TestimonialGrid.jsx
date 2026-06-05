import React, { useState } from "react";
import { testimonials } from "../../data/productData";
import { Link } from "react-router-dom";

export default function TestimonialGrid() {
  const [active, setActive] = useState(null);

  return (
    <main className='section-container py-8'>
      <div className='grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4'>
        {testimonials.map((t, i) => (
          <button
            key={t.name + i}
            onClick={() => setActive(i)}
            className='rounded-lg overflow-hidden bg-white shadow-sm'
          >
            <img
              src={t.img}
              alt={t.name}
              className='w-full h-40 object-cover'
            />
            <div className='p-3 text-left'>
              <p className='font-semibold'>{t.name}</p>
              <p className='text-sm text-text-muted'>{t.city}</p>
            </div>
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          className='lightbox fixed inset-0 z-50 flex items-center justify-center bg-black/60'
          onClick={() => setActive(null)}
        >
          <div
            className='bg-white rounded-lg max-w-xl w-full overflow-hidden'
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={testimonials[active].img}
              alt={testimonials[active].name}
              className='w-full h-80 object-cover'
            />
            <div className='p-6'>
              <h3 className='font-semibold text-xl'>
                {testimonials[active].name}
              </h3>
              <p className='text-sm text-text-muted'>
                {testimonials[active].city}
              </p>
              <p className='mt-4 text-body'>{testimonials[active].quote}</p>
              <div className='mt-6 text-right'>
                <button onClick={() => setActive(null)} className='btn-primary'>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className='mt-12 text-center'>
        <h2 className='heading-sub text-2xl'>Satisfied Customers</h2>
        <p className='text-text-muted max-w-xl mx-auto mt-3'>
          Thousands of women have regained confidence and comfort — read their
          stories and see the results for yourself.
        </p>
      </section>

      <section className='mt-12 text-center'>
        <h3 className='heading-main text-3xl'>
          Ready To Experience The Difference?
        </h3>
        <Link to='/' className='btn-primary mt-6 inline-block'>
          View Product
        </Link>
      </section>
    </main>
  );
}
