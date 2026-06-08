const testimonyImages = [
  "/Testimony-1.png",
  "/Testimony-2.png",
  "/Testimony-3.png",
  "/Testimony-4.png",
  "/Testimony-5.png",
];

export default function Testimonials() {
  return (
    <div className='bg-bg'>
      <div className='section-container py-16 md:py-20'>
        <div className='text-center mb-10'>
          <h2
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: '2.5rem', color: "#ac0447"  }}
            className='heading-sub text-4xl '
          >
            Read some testimonies from some women that has used our product
          </h2>
        </div>

        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          {testimonyImages.map((src, index) => (
            <div key={index} className='rounded-3xl bg-white shadow-sm'>
              <img
                src={src}
                alt={`Testimony ${index + 1}`}
                className='h-72 w-full rounded-3xl object-cover'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
