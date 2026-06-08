import WhatsAppButton from "../ui/WhatsAppButton";

const ProductShowcase = () => {
  const products = [
    {
      id: 3,
      image: "/yp6.jpg.jpeg",
      alt: "Yoni Pearl 6",
      text: "Trusted by Thousands",
    },
    {
      id: 4,
      image: "/yp7.jpg.jpeg",
      alt: "Yoni Pearl 7",
      text: "Results You'll Feel",
    },
  ];

  return (
    <section className='bg-white py-20 md:py-24'>
      <div className='section-container'>
        {/* H1 Heading */}
        <div className='text-center mb-4'>
          <h1
            style={{ fontFamily: "'Bebas poppins', sans-serif", color: "#ac0447", fontWeight: 700 }}
            className='text-5xl md:text-6xl font-bold leading-tight'
          >
            Behold The Power
          </h1>
        </div>

        {/* One-Line Power Statement */}
        <div className='text-center mb-16'>
          <p
            style={{ fontFamily: "'Poppins', sans-serif", color: "#ac0447" }}
            className='text-lg md:text-xl  font-medium'
          >
            Introducing Original Yoni Pearls :
          </p>
        </div>

        {/* Product Grid */}
        <div className='grid gap-8 grid-cols-2 md:grid-cols-4 lg:gap-10 mb-16'>
          {/* All four products with text below */}
          {products.map((product) => (
            <div key={product.id} className='col-span-1'>
              <div className='group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 mb-4'>
                <img
                  src={product.image}
                  alt={product.alt}
                  className='w-full h-72 md:h-80 object-cover'
                />
                {/* Overlay effect on hover */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4'>
                  <span
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                    className='text-white text-sm font-semibold'
                  >
                    Premium Quality
                  </span>
                </div>
              </div>
              <p
                style={{ fontFamily: "'Poppins', sans-serif" }}
                className='text-center text-[#2D2D2D] font-semibold text-sm md:text-base'
              >
                {product.text}
              </p>
            </div>
          ))}
        </div>

        {/* What is Yoni Pearls Section */}
        <div className='mb-20'>
          <h2
            style={{ fontFamily: "'poppins', sans-serif" }}
            className='text-4xl md:text-5xl font-bold text-[#ac0447] text-center mb-12'
          >
            What is Yoni Pearls?
          </h2>

          <div className='grid gap-8 md:grid-cols-3'>
            {/* Card 1: Natural & Organic */}
            <div className='bg-gradient-to-br from-[#FFF8F0] to-[#FFE4E1] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300'>
              <div className='w-16 h-16 bg-[#ac0447] rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>🌿</span>
              </div>
              <h3 className='text-xl font-bold text-[#2D2D2D] text-center mb-4'>
                100% Natural & Organic
              </h3>
              <p className='text-[#666] text-center leading-relaxed'>
                Carefully selected natural and organic herbs chosen to encourage
                proper functioning of the reproductive organs and prevent the
                development of more serious gynecological illnesses.
              </p>
            </div>

            {/* Card 2: Ancient Wisdom */}
            <div className='bg-gradient-to-br from-[#FFF8F0] to-[#FFE4E1] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300'>
              <div className='w-16 h-16 bg-[#ac0447] rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>🏯</span>
              </div>
              <h3 className='text-xl font-bold text-[#2D2D2D] text-center mb-4'>
                5000+ Years of Tradition
              </h3>
              <p className='text-[#666] text-center leading-relaxed'>
                Made from natural ingredients that have been used in traditional
                Chinese medicine for more than 5000 years, proven and tested
                through centuries.
              </p>
            </div>

            {/* Card 3: Cleansing & Wellness */}
            <div className='bg-gradient-to-br from-[#FFF8F0] to-[#FFE4E1] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300'>
              <div className='w-16 h-16 bg-[#ac0447] rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>✨</span>
              </div>
              <h3 className='text-xl font-bold text-[#2D2D2D] text-center mb-4'>
                Deep Cleansing & Care
              </h3>
              <p className='text-[#666] text-center leading-relaxed'>
                Cleansing the vagina with Yoni Pearls helps eliminate toxins,
                restore balance, and promote overall reproductive health
                naturally.
              </p>
            </div>
          </div>

          {/* About Image */}
          <div className='mt-12 flex flex-col md:flex-row justify-center gap-6'>
            <img
              src='/about.jpeg'
              alt='About Yoni Pearls'
              className='px-6 w-full max-w-2xl rounded-2xl shadow-lg object-cover'
            />
            <img
              src='/about-2.jpeg'
              alt='About Yoni Pearls'
              className='w-full max-w-2xl rounded-2xl shadow-lg object-cover'
            />
          </div>
        </div>

        <div className='mt-12 text-center'>
          <WhatsAppButton
            href='https://wa.me/2348136621545'
            label='ORDER NOW!'
            className='mx-auto w-full max-w-xs'
          />
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
