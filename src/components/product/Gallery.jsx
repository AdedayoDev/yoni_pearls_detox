
import { galleryImages } from "../../data/productData";

export default function Gallery() {
  return (
    <div className='bg-surface'>
      <div className='section-container py-16 md:py-20 lg:py-24'>
        <div className='text-center mb-10'>
          <h2 className='heading-sub text-3xl'>Wellness, Naturally</h2>
        </div>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {galleryImages.map((src, index) => (
            <div
              key={src}
              className='relative overflow-hidden rounded-2xl group'
            >
              <img
                src={src}
                alt={`Wellness scene ${index + 1}`}
                className='w-full h-64 md:h-80 object-cover rounded-2xl'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
