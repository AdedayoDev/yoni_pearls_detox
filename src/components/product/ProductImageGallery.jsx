import {motion} from "framer-motion";
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
    <section className='bg-[#f8edf3]'>
      <div className='section-container py-16 md:py-20 lg:py-24'>
        <div className='mx-auto max-w-3xl text-center mb-12'>
          <p className='text-sm uppercase tracking-[0.24em] text-[#ac0447] font-semibold'>
            Behold
          </p>
          <h2 className='text-4xl md:text-5xl font-bold text-[#2D2D2D] mt-4'>
            The Amazing Yoni Pearls
          </h2>
        </div>

        <div className='grid gap-6 lg:grid-cols-[1.18fr_0.82fr]'>
          <div className='grid gap-6'>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className='gallery-card overflow-hidden rounded-4xl'
            >
              <img
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                className='h-96 w-full object-cover'
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className='gallery-card hidden overflow-hidden rounded-4xl md:block'
            >
              <img
                src={galleryImages[1].src}
                alt={galleryImages[1].alt}
                className='h-80 w-full object-cover'
              />
            </motion.div>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className='gallery-card overflow-hidden rounded-4xl'
          >
            <img
              src={galleryImages[2].src}
              alt={galleryImages[2].alt}
              className='h-full min-h-105 w-full object-cover'
            />
          </motion.div>
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
