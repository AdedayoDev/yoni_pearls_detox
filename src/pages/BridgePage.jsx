function BridgePage() {
  const navigateToProduct = () => {
    window.location.href = "/product";
  };

  const painPoints = [
    {
      emoji: "🌸",
      title: "Unusual odor",
      description: "You've tried everything but it keeps coming back",
    },
    {
      emoji: "💧",
      title: "Irregular discharge",
      description: "Something feels off but you can't explain it",
    },
    {
      emoji: "🔥",
      title: "Itching or discomfort",
      description: "It disrupts your day and your confidence",
    },
    {
      emoji: "😔",
      title: "Low feminine confidence",
      description: "You just want to feel fresh and in control again",
    },
  ];

  const testimonials = [
    {
      quote:
        "I was skeptical at first, but after the first use I genuinely felt different. Lighter. Cleaner.",
      author: "Amara T., Lagos",
    },
    {
      quote:
        "I've struggled with recurring infections for years. This was the first thing that actually helped.",
      author: "Fatima K., Abuja",
    },
    {
      quote:
        "My confidence is back. I didn't even realise how much I had lost until I felt it return.",
      author: "Ngozi E., Port Harcourt",
    },
  ];

  return (
    <div className='page-wrapper'>
      <section className='w-full bg-primary text-light text-sm-global text-center py-2'>
        <p>🌿 Trusted by thousands of women across Africa & beyond</p>
      </section>

      <main className='space-y-14'>
        <section className='bg-bg'>
          <div className='section-container py-16 md:py-24'>
            <div className='max-w-3xl mx-auto text-center space-y-8'>
              <p className='text-script'>
                For every woman who deserves to feel her best...
              </p>
              <h1 className='heading-main text-3xl sm:text-4xl md:text-5xl font-bold'>
                Your Body Has Been Trying to Tell You Something.
              </h1>
              <div className='divider-gold mx-auto' />
              <p className='heading-sub mx-auto max-w-2xl text-lg sm:text-xl'>
                Thousands of women have discovered a quiet, natural secret — and
                it's changing the way they feel from the inside out.
              </p>
              <p className='text-body mx-auto max-w-2xl text-base sm:text-lg'>
                Bloating. Discomfort. That feeling of being 'off' — but not
                knowing why. If any of this sounds familiar, you are not alone.
                And more importantly, there is something you can do about it.
              </p>
              <button
                type='button'
                onClick={navigateToProduct}
                className='btn-primary w-full md:w-auto px-8 py-4 text-base sm:text-lg'
              >
                Show Me What They're Using →
              </button>
              <p className='text-body text-muted text-sm-global max-w-xl mx-auto'>
                No sign-up required. Just a moment that could change everything.
              </p>
            </div>
          </div>
        </section>

        <section className='bg-surface'>
          <div className='section-container py-16 md:py-24'>
            <div className='max-w-2xl mx-auto text-center mb-10'>
              <h2 className='heading-sub text-2xl md:text-3xl'>
                Does this sound like you?
              </h2>
            </div>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
              {painPoints.map((item) => (
                <div key={item.title} className='card text-center space-y-3'>
                  <div className='text-4xl'>{item.emoji}</div>
                  <p className='font-semibold text-lg'>{item.title}</p>
                  <p className='text-body text-muted'>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className='bg-primary-gradient text-light'>
          <div className='section-container py-16 md:py-24'>
            <div className='max-w-3xl mx-auto text-center space-y-8'>
              <p className='text-script text-light'>
                What if the answer was simpler than you thought?
              </p>
              <h2 className='heading-main text-3xl sm:text-4xl md:text-5xl text-light'>
                Women Are Quietly Solving This With One Ancient Herbal Secret.
              </h2>
              <p className='text-body text-light-soft text-base sm:text-lg'>
                It's not a pill. It's not a chemical cream. It's not a doctor's
                prescription. It's a centuries-old natural remedy — now
                available, discreet, and easy to use from the comfort of your
                home.
              </p>
              <button
                type='button'
                onClick={navigateToProduct}
                className='btn-secondary-ghost w-full md:w-auto px-8 py-4 text-base sm:text-lg'
              >
                I Want to Know What This Is →
              </button>
            </div>
          </div>
        </section>

        <section className='bg-bg'>
          <div className='section-container py-16 md:py-24'>
            <div className='grid grid-cols-1 gap-6 lg:grid-cols-3'>
              {testimonials.map((item) => (
                <div key={item.author} className='card space-y-4'>
                  <div className='text-4xl text-accent'>“</div>
                  <p className='text-body italic'>{item.quote}</p>
                  <p className='text-script text-sm-global'>{item.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className='bg-surface'>
          <div className='section-container py-16 md:py-24'>
            <div className='max-w-3xl mx-auto text-center space-y-8'>
              <p className='text-script'>You deserve to feel whole.</p>
              <h2 className='heading-main text-3xl sm:text-4xl md:text-5xl'>
                Take 30 Seconds and Discover What's Changing Women's Lives.
              </h2>
              <button
                type='button'
                onClick={navigateToProduct}
                className='btn-primary w-full md:w-auto px-8 py-4 text-base sm:text-lg'
              >
                Yes, Show Me the Secret →
              </button>
              <p className='text-xs-global text-muted max-w-xl mx-auto'>
                This product is not intended to diagnose, treat, cure, or
                prevent any disease. Please consult your healthcare provider
                before use.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default BridgePage;
