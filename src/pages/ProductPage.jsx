import { useEffect, useRef, useState } from "react";

const WHATSAPP_BASE = "https://wa.me/2348107006660?text=";
const WHATSAPP_LINKS = {
  default: "Hi%2C%20I%20want%20to%20order%20Yoni%20Pearls",
  starter: "Hi%2C%20I%20want%20to%20order%20the%201%20Pearl%20Starter%20Pack",
  popular: "Hi%2C%20I%20want%20to%20order%20the%203%20Pearl%20Popular%20Pack",
  value: "Hi%2C%20I%20want%20to%20order%20the%206%20Pearl%20Value%20Pack",
};

const heroImage =
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80";
const productImage =
  "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&q=80";
const galleryImages = [
  "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80",
  "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80",
  "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600&q=80",
];

const statsData = [
  { label: "Women Helped", value: 10000, suffix: "+" },
  { label: "Average Rating", value: 4.9, suffix: " ★" },
  { label: "Natural Ingredients", value: 100, suffix: "%" },
];

const painPoints = [
  {
    emoji: "🌸",
    title: "Unusual odor",
    description:
      "That persistent discomfort that affects your daily confidence",
  },
  {
    emoji: "💧",
    title: "Irregular discharge",
    description: "Something feels off but tests come back unclear",
  },
  {
    emoji: "🔥",
    title: "Itching & irritation",
    description: "Disrupts your day, your sleep, your intimacy",
  },
  {
    emoji: "😔",
    title: "Low feminine confidence",
    description: "You just want to feel fresh, clean, and in control again",
  },
];

const benefits = [
  "Draws out toxins and restores vaginal freshness",
  "Balances pH and eliminates odor naturally",
  "Soothes itching and vaginal dryness",
  "Supports relief from irregular discharge",
  "Tightens and rejuvenates vaginal walls",
  "Boosts feminine confidence from within",
];

const ingredients = [
  "Motherwort",
  "Angelica Root",
  "Borneol",
  "Rhizoma",
  "Osthol",
  "Rhubarb",
  "Kochia",
  "Stemona",
];

const pricingOptions = [
  {
    title: "Starter — 1 Pearl",
    price: "₦4,500",
    tag: "Try it first",
    message: WHATSAPP_LINKS.starter,
    features: [
      "Includes removal string",
      "Discreet packaging",
      "WhatsApp support included",
    ],
  },
  {
    title: "Popular — 3 Pearls",
    price: "₦11,500",
    tag: "Most popular ⭐",
    message: WHATSAPP_LINKS.popular,
    features: [
      "Best value for regular use",
      "Discreet delivery",
      "Trusted by many women",
    ],
    featured: true,
  },
  {
    title: "Value — 6 Pearls",
    price: "₦20,000",
    tag: "Best value 💎",
    message: WHATSAPP_LINKS.value,
    features: [
      "Lasts longer for monthly care",
      "Great for gift bundles",
      "Premium support included",
    ],
  },
];

const faqs = [
  {
    question: "Is it safe to use?",
    answer:
      "Yoni Pearls are made from 100% natural herbal ingredients and manufactured to GMP standards. However, we recommend consulting your doctor if you are pregnant, breastfeeding, or have a pre-existing condition.",
  },
  {
    question: "How long do I leave it in?",
    answer:
      "Leave one pearl inserted for 24-48 hours. Do not exceed 48 hours per pearl. Wait 24 hours before inserting the next one.",
  },
  {
    question: "Will I experience discharge?",
    answer:
      "Some women experience discharge during the cleanse process as part of the detox effect. This is normal and will pass within 2-3 days of removal.",
  },
  {
    question: "Can I use it during my period?",
    answer:
      "No. Do not use Yoni Pearls during your menstrual cycle. Wait until your period has fully ended.",
  },
  {
    question: "How do I order?",
    answer:
      "Simply tap any of the WhatsApp buttons on this page. Our team will respond within minutes to confirm your order and arrange delivery.",
  },
  {
    question: "Do you deliver across Nigeria?",
    answer:
      "Yes! We deliver to all states across Nigeria. Packaging is 100% discreet with no product branding visible on the outside.",
  },
];

const testimonialsWithAvatars = [
  {
    name: "Amara T.",
    city: "Lagos",
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop&crop=face&q=80",
    quote:
      "I was skeptical but after 3 days I felt genuinely different. Lighter, fresher, more confident. I have already ordered a second pack.",
  },
  {
    name: "Fatima K.",
    city: "Abuja",
    img: "https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?w=100&h=100&fit=crop&crop=face&q=80",
    quote:
      "I struggled with recurring infections for years. Yoni Pearls were the first natural thing that made a real difference.",
  },
  {
    name: "Ngozi E.",
    city: "Port Harcourt",
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop&crop=face&q=80",
    quote:
      "My confidence in the bedroom came back completely. My partner noticed the difference too.",
  },
  {
    name: "Chidinma O.",
    city: "Enugu",
    img: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=100&h=100&fit=crop&crop=face&q=80",
    quote:
      "Delivered fast and discreetly. Packaging was clean and professional. Very happy with my purchase.",
  },
  {
    name: "Blessing A.",
    city: "Ibadan",
    img: "https://images.unsplash.com/photo-1548142813-c348350df52b?w=100&h=100&fit=crop&crop=face&q=80",
    quote:
      "I told all my friends about this. Two of them have already ordered. This product is the real deal.",
  },
];

const nigerianNames = [
  "Adunola",
  "Folasade",
  "Omolola",
  "Titilayo",
  "Bukola",
  "Yetunde",
  "Ronke",
  "Abimbola",
  "Funmilayo",
  "Iyabo",
  "Oluwakemi",
  "Adaeze",
  "Chidinma",
  "Ngozi",
  "Amaka",
  "Obiageli",
  "Nneka",
  "Chinyere",
  "Uche",
  "Ifeoma",
  "Blessing",
  "Chioma",
  "Ebunoluwa",
  "Olamide",
  "Sola",
  "Temitope",
  "Oluwaseun",
  "Adaora",
  "Chiamaka",
  "Nkechi",
  "Hafsat",
  "Zainab",
  "Maryam",
  "Fatima",
  "Aisha",
  "Hauwa",
  "Ramatu",
  "Bilkisu",
  "Hadiza",
  "Sadiya",
  "Kemi",
  "Toyin",
  "Bimpe",
  "Shade",
  "Temi",
  "Lola",
  "Wunmi",
  "Bisi",
  "Yemi",
  "Adeola",
  "Chinwe",
  "Ogechukwu",
  "Oluchi",
  "Amarachi",
  "Precious",
  "Miracle",
  "Grace",
  "Joy",
  "Faith",
  "Tolulope",
  "Oluwafunmilayo",
  "Omotunde",
  "Aderonke",
  "Similoluwa",
  "Ify",
  "Chika",
  "Ebele",
  "Nnamdi",
  "Obioma",
  "Zinny",
  "Tochukwu",
  "Onyinye",
  "Mmachi",
  "Risikat",
  "Mutiat",
  "Simiat",
  "Taibat",
  "Kafayat",
  "Oluwatobiloba",
  "Oluwadamilola",
  "Oluwatimilehin",
  "Morenike",
  "Oluwatobi",
  "Ekanem",
  "Emem",
  "Afiong",
  "Mfon",
  "Eno",
  "Adanna",
  "Uloma",
  "Nonye",
  "Ogechi",
  "Amina",
  "Halima",
  "Rukayya",
  "Salma",
  "Jamila",
  "Saadiya",
  "Firdaus",
  "Lami",
  "Hajia",
  "Zainab",
  "Maryam",
  "Halima",
];

function ProductPage() {
  const pageRef = useRef(null);
  const statsRef = useRef(null);
  const usedNames = useRef(new Set());
  const [stats, setStats] = useState({ womenHelped: 0, rating: 0, natural: 0 });
  const [activeFaq, setActiveFaq] = useState(null);
  const [activePainPoint, setActivePainPoint] = useState(null);
  const [popupVisible, setPopupVisible] = useState(false);
  const [buyerPopup, setBuyerPopup] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.15 },
    );

    const elements = pageRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((element) => observer.observe(element));

    return () => {
      elements?.forEach((element) => observer.unobserve(element));
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!statsRef.current) return;

    let started = false;
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            started = true;
            const duration = 1500;
            const interval = 50;
            const steps = duration / interval;
            let currentStep = 0;
            const target = { womenHelped: 10000, rating: 4.9, natural: 100 };

            const timer = setInterval(() => {
              currentStep += 1;
              const progress = Math.min(currentStep / steps, 1);
              setStats({
                womenHelped: Math.floor(target.womenHelped * progress),
                rating: Math.round(target.rating * progress * 10) / 10,
                natural: Math.floor(target.natural * progress),
              });

              if (progress >= 1) {
                clearInterval(timer);
              }
            }, interval);
          }
        });
      },
      { threshold: 0.15 },
    );

    counterObserver.observe(statsRef.current);
    return () => counterObserver.disconnect();
  }, []);

  useEffect(() => {
    const cities = [
      "Lagos",
      "Abuja",
      "Port Harcourt",
      "Ibadan",
      "Enugu",
      "Kano",
      "Benin City",
      "Owerri",
      "Calabar",
      "Warri",
      "Abeokuta",
      "Kaduna",
    ];
    const quantities = [6, 7, 8, 9, 10, 12];
    let intervalId;

    const firePopup = () => {
      let pool = nigerianNames.filter((name) => !usedNames.current.has(name));
      if (!pool.length) {
        usedNames.current.clear();
        pool = [...nigerianNames];
      }

      const name = pool[Math.floor(Math.random() * pool.length)];
      const city = cities[Math.floor(Math.random() * cities.length)];
      const qty = quantities[Math.floor(Math.random() * quantities.length)];
      usedNames.current.add(name);

      setBuyerPopup({ name, city, qty });
      setPopupVisible(true);
      setTimeout(() => setPopupVisible(false), 6000);
    };

    const initialTimeout = setTimeout(() => {
      firePopup();
      intervalId = setInterval(firePopup, 60000);
    }, 5000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(intervalId);
    };
  }, []);

  const painPointDetails = [
    "This formula works gently to neutralize odor and leave you feeling cleaner all day.",
    "The blend helps restore balance and reduce discharge that doesn't feel normal.",
    "It calms irritation while supporting your body's natural cleansing process.",
    "It rebuilds feminine confidence with a fresh, private cleanse from within.",
  ];

  const setFaq = (index) => {
    setActiveFaq((current) => (current === index ? null : index));
  };

  return (
    <div className='page-wrapper overflow-x-hidden'>
      <main ref={pageRef} className='overflow-hidden'>
        <section className='relative overflow-hidden'>
          <div className='md:hidden relative min-h-[80vh]'>
            <img
              src={heroImage}
              alt='Confident woman'
              className='absolute inset-0 h-full w-full object-cover object-center'
            />
            <div className='absolute inset-0 bg-black/45' />
            <div className='relative z-10 flex min-h-[80vh] flex-col justify-end gap-6 px-6 py-12 text-light'>
              <p className='text-script-white animate-on-scroll'>
                Nature's secret for women who deserve the best
              </p>
              <h1 className='heading-white text-4xl sm:text-5xl animate-on-scroll'>
                Reclaim Your Feminine Confidence — Naturally.
              </h1>
              <div className='divider-gold animate-on-scroll' />
              <p className='heading-sub text-light-soft max-w-xl animate-on-scroll'>
                Yoni Pearls are an ancient herbal remedy now trusted by
                thousands of women to restore freshness, balance, and vitality
                from within.
              </p>
              <div className='flex flex-wrap gap-3 animate-on-scroll'>
                {[
                  "🌿 100% Herbal",
                  "✨ Fast-Acting",
                  "🔒 Discreet & Private",
                ].map((item) => (
                  <span
                    key={item}
                    className='pill-chip border border-(--color-primary) text-primary bg-white/10'
                  >
                    {item}
                  </span>
                ))}
              </div>
              <a
                href={`${WHATSAPP_BASE}${WHATSAPP_LINKS.default}`}
                target='_blank'
                rel='noopener noreferrer'
                className='btn-primary w-full py-4 text-base sm:text-lg inline-flex items-center justify-center animate-on-scroll'
              >
                📲 Order on WhatsApp Now
              </a>
              <div className='flex flex-wrap gap-4 text-sm-global text-light-soft animate-on-scroll'>
                <span>✅ Safe to use</span>
                <span>·</span>
                <span>🚚 Fast delivery</span>
                <span>·</span>
                <span>💬 24/7 support</span>
              </div>
            </div>
          </div>

          <div className='hidden md:grid min-h-screen md:grid-cols-[60%_40%]'>
            <div className='bg-bg flex flex-col justify-center px-8 py-16 lg:px-16 lg:py-24'>
              <div className='space-y-8'>
                <p className='text-script animate-on-scroll'>
                  Nature's secret for women who deserve the best
                </p>
                <h1 className='heading-main text-5xl lg:text-6xl animate-on-scroll'>
                  Reclaim Your Feminine Confidence — Naturally.
                </h1>
                <div className='divider-gold animate-on-scroll' />
                <p className='heading-sub max-w-2xl animate-on-scroll'>
                  Yoni Pearls are an ancient herbal remedy now trusted by
                  thousands of women to restore freshness, balance, and vitality
                  from within.
                </p>
                <div className='flex flex-wrap gap-3 animate-on-scroll'>
                  {[
                    "🌿 100% Herbal",
                    "✨ Fast-Acting",
                    "🔒 Discreet & Private",
                  ].map((item) => (
                    <span
                      key={item}
                      className='pill-chip border border-(--color-primary) text-primary'
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <a
                  href={`${WHATSAPP_BASE}${WHATSAPP_LINKS.default}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn-primary w-full md:w-auto py-4 text-base sm:text-lg inline-flex items-center justify-center animate-on-scroll'
                >
                  📲 Order on WhatsApp Now
                </a>
                <div className='flex flex-wrap gap-5 text-sm-global text-text-muted animate-on-scroll'>
                  <span>✅ Safe to use</span>
                  <span>·</span>
                  <span>🚚 Fast delivery</span>
                  <span>·</span>
                  <span>💬 24/7 support</span>
                </div>
              </div>
            </div>
            <div className='relative overflow-hidden'>
              <img
                src={heroImage}
                alt='Confident woman'
                className='absolute inset-0 h-full w-full object-cover object-center'
              />
            </div>
          </div>
        </section>

        <section className='bg-primary text-light'>
          <div ref={statsRef} className='section-container py-10'>
            <div className='grid gap-6 md:grid-cols-3'>
              {statsData.map((item, index) => (
                <div
                  key={item.label}
                  className={`animate-on-scroll delay-${(index + 1) * 100} rounded-3xl bg-white/10 p-8 text-center`}
                >
                  <p className='text-4xl md:text-5xl font-bold'>
                    {item.label === "Average Rating"
                      ? stats.rating.toFixed(1)
                      : item.label === "Women Helped"
                        ? stats.womenHelped.toLocaleString()
                        : stats.natural}
                    {item.suffix}
                  </p>
                  <p className='text-sm-global text-light-soft mt-3'>
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className='bg-surface'>
          <div className='section-container py-16 md:py-20 lg:py-24'>
            <div className='mx-auto max-w-3xl text-center mb-12'>
              <h2 className='heading-sub text-3xl'>
                Does this sound like you?
              </h2>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
              {painPoints.map((item, index) => {
                const expanded = activePainPoint === index;
                return (
                  <div
                    key={item.title}
                    onClick={() => setActivePainPoint(expanded ? null : index)}
                    className={`card animate-on-scroll delay-${(index + 1) * 100} cursor-pointer transition-all duration-300 ${expanded ? "bg-(--color-primary-light)" : "bg-white"}`}
                  >
                    <div className='text-4xl'>{item.emoji}</div>
                    <p className='font-semibold text-lg mt-3'>{item.title}</p>
                    <p className='text-body text-text-muted mt-2'>
                      {item.description}
                    </p>
                    <div className='mt-4 text-sm text-text-muted'>
                      {expanded
                        ? painPointDetails[index]
                        : "Tap to see how Yoni Pearls helps."}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className='bg-bg'>
          <div className='section-container py-16 md:py-20 lg:py-24'>
            <div className='grid gap-10 lg:grid-cols-2 items-center'>
              <div className='relative overflow-hidden rounded-4xl border-4 border-(--color-primary)'>
                <img
                  src={productImage}
                  alt='Yoni Pearls product placeholder'
                  className='w-full object-cover object-center md:h-130 h-90 rounded-3xl'
                />
                <div className='badge-gold absolute right-4 top-4'>
                  GMP Certified
                </div>
              </div>
              <div className='space-y-6'>
                <p className='text-script'>Why it works</p>
                <h2 className='heading-main text-3xl md:text-4xl lg:text-5xl'>
                  Ancient Herbs. Modern Confidence.
                </h2>
                <div className='space-y-4'>
                  {benefits.map((item, index) => (
                    <div
                      key={item}
                      className={`flex gap-3 animate-on-scroll delay-${(index + 1) * 100}`}
                    >
                      <span className='text-accent mt-1'>✅</span>
                      <p className='text-body'>{item}</p>
                    </div>
                  ))}
                </div>
                <div className='flex flex-wrap gap-3'>
                  {ingredients.map((item) => (
                    <span key={item} className='pill-chip-soft'>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='bg-primary text-light'>
          <div className='section-container py-16 md:py-20 lg:py-24'>
            <div className='text-center mb-12'>
              <h2 className='heading-main text-3xl md:text-4xl'>
                Simple. Natural. Effective.
              </h2>
            </div>
            <div className='relative'>
              <div className='hidden md:block absolute inset-x-12 top-1/2 h-px border-t border-white/40'></div>
              <div className='grid gap-6 md:grid-cols-3'>
                {[
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
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className={`animate-on-scroll delay-${(index + 1) * 100} rounded-3xl bg-white/10 p-8 text-center`}
                  >
                    <div className='mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white text-(--color-primary) text-2xl font-bold'>
                      {index + 1}
                    </div>
                    <h3 className='heading-sub text-white'>{item.title}</h3>
                    <p className='text-body text-[#333]  mt-4'>
                      {item.copy}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className='bg-bg'>
          <div className='section-container py-16 md:py-20 lg:py-24'>
            <div className='text-center mb-10'>
              <h2 className='heading-sub text-3xl'>What Women Are Saying</h2>
            </div>
            <div className='carousel-outer'>
              <div className='carousel-track gap-6'>
                {[...testimonialsWithAvatars, ...testimonialsWithAvatars].map(
                  (item, index) => (
                    <div
                      key={`${item.name}-${index}`}
                      className='card min-w-65 md:min-w-75 shrink-0'
                    >
                      <div className='flex items-center gap-4'>
                        <img
                          src={item.img}
                          alt={item.name}
                          className='h-14 w-14 rounded-full object-cover'
                        />
                        <div>
                          <p className='font-semibold'>{item.name}</p>
                          <p className='text-sm text-text-muted'>{item.city}</p>
                        </div>
                      </div>
                      <div className='mt-4 flex gap-1 text-accent'>
                        {"⭐".repeat(5)}
                      </div>
                      <div className='mt-6 text-body italic'>{item.quote}</div>
                      <div className='badge-gold mt-6 inline-block'>
                        Verified Purchase
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>

        <section className='bg-surface'>
          <div className='section-container py-16 md:py-20 lg:py-24'>
            <div className='text-center mb-10'>
              <h2 className='heading-sub text-3xl'>Wellness, Naturally</h2>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
              {galleryImages.map((src, index) => (
                <div
                  key={src}
                  className={`relative overflow-hidden rounded-2xl animate-on-scroll delay-${(index + 1) * 100} group`}
                >
                  <img
                    src={src}
                    alt={`Wellness scene ${index + 1}`}
                    className='w-full h-64 md:h-80 object-cover rounded-2xl float-hover'
                  />
                  <div className='absolute inset-0 bg-(--color-primary)/0 transition-opacity duration-300 group-hover:bg-(--color-primary)/20'></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className='bg-bg'>
          <div className='section-container py-16 md:py-20 lg:py-24'>
            <div className='text-center mb-8 space-y-4'>
              <h2 className='heading-main text-3xl md:text-4xl'>
                Choose Your Pack
              </h2>
              <p className='text-body text-text-muted max-w-2xl mx-auto'>
                Discreet packaging. Fast delivery across Nigeria.
              </p>
            </div>
            <div className='grid gap-6 md:grid-cols-3'>
              {pricingOptions.map((option) => (
                <div
                  key={option.title}
                  className={`card animate-on-scroll ${option.featured ? "border-2 border-(--color-primary)" : ""}`}
                >
                  <span className='text-script text-sm-global'>
                    {option.tag}
                  </span>
                  <h3 className='heading-main text-2xl mt-4'>{option.title}</h3>
                  <p className='text-4xl font-bold text-primary mt-3'>
                    {option.price}
                  </p>
                  <ul className='mt-6 space-y-3 text-body text-text-muted'>
                    {option.features.map((feature) => (
                      <li key={feature} className='flex gap-3'>
                        <span>✅</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`${WHATSAPP_BASE}${option.message}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn-primary mt-8 w-full py-4 text-base sm:text-lg inline-flex items-center justify-center'
                  >
                    Order {option.title.split(" — ")[0]}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className='bg-surface'>
          <div className='section-container py-16 md:py-20 lg:py-24'>
            <div className='mx-auto max-w-3xl text-center mb-10'>
              <h2 className='heading-main text-3xl md:text-4xl'>
                Common Questions
              </h2>
            </div>
            <div className='space-y-4'>
              {faqs.map((item, index) => {
                const open = activeFaq === index;
                return (
                  <div
                    key={item.question}
                    className='card border-b border-(--color-border-tertiary) pb-4'
                  >
                    <button
                      type='button'
                      onClick={() => setFaq(index)}
                      className='faq-question flex w-full items-center justify-between gap-4 text-left'
                    >
                      <span className='font-semibold'>{item.question}</span>
                      <span className='text-2xl'>{open ? "×" : "+"}</span>
                    </button>
                    <div
                      className={`faq-answer mt-4 overflow-hidden ${open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
                    >
                      <p className='text-body text-text-muted'>{item.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className='bg-primary text-light'>
          <div className='section-container py-20 md:py-24 lg:py-28'>
            <div className='mx-auto max-w-3xl text-center space-y-6'>
              <p className='text-script text-light'>
                Your body. Your confidence. Your choice.
              </p>
              <h2 className='heading-main text-4xl md:text-5xl'>
                Ready to Feel Like Yourself Again?
              </h2>
              <p className='text-body text-light-soft'>
                Join thousands of women who have already discovered the natural
                secret to feminine wellness.
              </p>
              <a
                href={`${WHATSAPP_BASE}${WHATSAPP_LINKS.default}`}
                target='_blank'
                rel='noopener noreferrer'
                className='btn-primary-reverse mx-auto inline-flex w-full md:w-auto items-center justify-center gap-3 py-4 text-base sm:text-lg'
              >
                <span className='pulse'>📲</span>
                Order on WhatsApp — It's Quick & Private
              </a>
              <p className='text-xs-global text-light-soft max-w-2xl mx-auto'>
                ⚠️ This product is not intended to diagnose, treat, cure, or
                prevent any disease. Results may vary. Consult your healthcare
                provider before use. Not for use during pregnancy or
                breastfeeding.
              </p>
            </div>
          </div>
        </section>
      </main>

      {popupVisible && buyerPopup ? (
        <div className='buyer-popup'>
          <div className='buyer-popup-avatar'>🌸</div>
          <div>
            <div className='buyer-popup-text'>
              <strong>{buyerPopup.name}</strong> from {buyerPopup.city} just
              ordered <strong>{buyerPopup.qty} Yoni Pearls</strong>
            </div>
            <div className='buyer-popup-time'>Just now · Verified purchase</div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ProductPage;
