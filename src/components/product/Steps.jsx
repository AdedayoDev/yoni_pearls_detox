export default function Steps() {
  const steps = [
    {
      title: "Prepare",
      copy: "Wash hands thoroughly. Carefully unwrap your Yoni Pearl and locate the removal string.",
    },
    {
      title: "Insert",
      copy: "Gently insert the pearl using the applicator. Leave in for 24-48 hours as directed.",
    },
    {
      title: "Feel the Difference",
      copy: "Remove naturally. Allow your body to complete the cleanse over 2-3 days.",
    },
  ];

  return (
    <div className='bg-primary text-light'>
      <div className='section-container py-16 md:py-20 lg:py-24'>
        <div className='text-center mb-12'>
          <h2 className='heading-main text-3xl md:text-4xl'>
            Simple. Natural. Effective.
          </h2>
        </div>
        <div className='relative'>
          <div className='grid gap-6 md:grid-cols-3'>
            {steps.map((item, index) => (
              <div
                key={item.title}
                className='rounded-3xl bg-white/10 p-8 text-center'
              >
                <div className='mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white text-(--color-primary) text-2xl font-bold'>
                  {index + 1}
                </div>
                <h3 className='heading-sub text-white'>{item.title}</h3>
                <p className='text-body text-[#333] mt-4'>{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
