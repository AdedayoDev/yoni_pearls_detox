import WhatsAppButton from "../ui/WhatsAppButton";

export default function ProductImageGallery() {
  const galleryImages = [
    {
      src: "/WhatsApp Image 2026-05-29 at 19.11.35.jpeg",
      alt: "Yoni Pearl customer image 1",
    },
    {
      src: "/111881b0-f4ef-46ef-8340-0d5c44bbc60c.jpg.jpeg",
      alt: "Yoni Pearl customer image 2",
    },
    {
      src: "/yp8.jpg.jpeg",
      alt: "Yoni Pearl customer image 2",
    },
  ];

  return (
    <section className='bg-white'>
      <div className='section-container py-16 md:py-20'>
        <div className='mx-auto max-w-3xl text-center mb-12'>
          <p
            style={{ fontFamily: "'Poppins', sans-serif" }}
            className='text-sm uppercase tracking-[0.24em] text-[#ac0447] font-semibold'
          >
           Behold
          </p>
          <h2
            style={{ fontFamily: "'Poppins', sans-serif" }}
            className='text-4xl md:text-5xl font-bold text-[#2D2D2D] mt-4'
          >
            The Amazing Yoni Pearls
          </h2>
        </div>

        <div className='grid gap-6 md:grid-cols-2'>
          {galleryImages.map((image) => (
            <div
              key={image.src}
              className='overflow-hidden rounded-4xl border border-[#E5E7EB] shadow-sm'
            >
              <img
                src={image.src}
                alt={image.alt}
                className='h-96 w-full object-cover'
              />
            </div>
          ))}
        </div>

        <div className='mt-10 text-center'>
          <WhatsAppButton
            href='https://wa.me/2347050704719'
            label='Order now'
            className='w-full max-w-sm mx-auto'
          />
        </div>
      </div>
    </section>
  );
}
