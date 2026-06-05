import WhatsAppButton from "../ui/WhatsAppButton";

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      image: "/yp1.jpg.jpeg",
      alt: "Yoni Pearl 1",
      text: "Pure & Natural",
    },
    {
      id: 2,
      image: "/yp2.jpg.jpeg",
      alt: "Yoni Pearl 2",
      text: "Clinically Tested",
    },
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
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            className='text-5xl md:text-6xl font-bold text-[#2D2D2D] mb-6 leading-tight'
          >
            Behold The Power
          </h1>
        </div>

        {/* One-Line Power Statement */}
        <div className='text-center mb-16'>
          <p
            style={{ fontFamily: "'Poppins', sans-serif" }}
            className='text-lg md:text-xl text-[#666] font-medium'
          >
            Authentic Yoni Pearls crafted to restore wellness, confidence, and
            vitality
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
