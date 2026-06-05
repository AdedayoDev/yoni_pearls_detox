import React from "react";
import { statsData } from "../../data/productData";

export default function Stats() {
  return (
    <div className='bg-primary text-light'>
      <div className='section-container py-10'>
        <div className='grid text-primary gap-6 md:grid-cols-3'>
          {statsData.map((item) => (
            <div
              key={item.label}
              className='rounded-3xl bg-white/10 p-8 text-center'
            >
              <p className='text-4xl md:text-5xl font-bold'>
                {item.value ?? item.default}
              </p>
              <p className='text-sm-global text-primary text-light-soft mt-3'>
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
