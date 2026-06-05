import React from "react";
import { productImage, benefits, ingredients } from "../../data/productData";

export default function Showcase() {
  return (
    <div className='bg-bg'>
      <div className='section-container py-16 md:py-20 lg:py-24'>
        <div className='grid gap-10 lg:grid-cols-2 items-center'>
          <div className='relative overflow-hidden rounded-4xl border-4 border-(--color-primary)'>
            <img
              src={productImage}
              alt='product'
              className='w-full object-cover object-center md:h-130 h-90 rounded-3xl'
            />
            <div className='badge-gold absolute right-4 top-4'>
              GMP Certified
            </div>
          </div>
          <div className='space-y-6'>
            <p className='text-script'>Why it works</p>
            <h2 className='heading-main text-3xl md:text-4xl lg:text-5xl'>
              Ancient Herbs. Modern Confidence.
            </h2>
            <div className='space-y-4'>
              {benefits.map((item, index) => (
                <div key={item} className='flex gap-3'>
                  <span className='text-accent mt-1'>✅</span>
                  <p className='text-body'>{item}</p>
                </div>
              ))}
            </div>
            <div className='flex flex-wrap gap-3'>
              {ingredients.map((item) => (
                <span key={item} className='pill-chip-soft'>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
