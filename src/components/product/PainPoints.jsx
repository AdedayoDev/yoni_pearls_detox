import { painPoints } from "../../data/productData";

export default function PainPoints() {
  return (
    <div className='bg-surface'>
      <div className='section-container py-16 md:py-20 lg:py-24'>
        <div className='mx-auto max-w-3xl text-center mb-12'>
          <h2 className='heading-sub text-3xl'>Common issues we help with</h2>
        </div>
        <div className='flex flex-wrap gap-4 justify-center'>
          {painPoints.map((item) => (
            <button
              key={item.title}
              className='px-6 py-3 rounded-full bg-white border-2 border-[#C2185B] text-[#C2185B] font-semibold hover:bg-[#C2185B] hover:text-white transition-all duration-300 flex items-center gap-2'
            >
              <span className='text-lg'>{item.emoji}</span>
              <span>{item.title}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
