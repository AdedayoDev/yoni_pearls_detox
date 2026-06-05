import { useEffect, useRef, useState } from "react";
import Hero from "../components/product/Hero";
import SolutionBanner from "../components/product/SolutionBanner";
import ProductShowcase from "../components/product/ProductShowcase";
import Testimonials from "../components/product/Testimonials";
import Pricing from "../components/product/Pricing";
import Faqs from "../components/product/Faqs";
import FinalCta from "../components/product/FinalCta";

function ProductPage() {
  const pageRef = useRef(null);
  const usedNames = useRef(new Set());
  const [popupVisible, setPopupVisible] = useState(false);
  const [buyerPopup, setBuyerPopup] = useState(null);

  const nigerianNames = [
    "Ada",
    "Ngozi",
    "Chioma",
    "Aisha",
    "Ife",
    "Funke",
    "Temi",
    "Bimpe",
    "Uche",
    "Sade",
  ];

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

  return (
    <div className='page-wrapper overflow-x-hidden'>
      <main ref={pageRef} className='overflow-hidden'>
        <Hero />

        <SolutionBanner />

        <ProductShowcase />

        <Testimonials />

        <Pricing />

        <Faqs />

        <FinalCta />
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
