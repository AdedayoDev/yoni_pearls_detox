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
  const usedProfiles = useRef(new Set());
  const [popupVisible, setPopupVisible] = useState(false);
  const [buyerPopup, setBuyerPopup] = useState(null);

  const buyerProfiles = [
    { name: "Sade", city: "Lagos" },
    { name: "Amina", city: "Abuja" },
    { name: "Chioma", city: "Port Harcourt" },
    { name: "Tosin", city: "Ibadan" },
    { name: "Ngozi", city: "Enugu" },
    { name: "Aisha", city: "Kano" },
    { name: "Efe", city: "Benin City" },
    { name: "Ife", city: "Owerri" },
    { name: "Ini", city: "Calabar" },
    { name: "Bukola", city: "Warri" },
    { name: "Funke", city: "Abeokuta" },
    { name: "Hafsat", city: "Kaduna" },
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
    const quantities = [6, 7, 8, 9, 10, 12];
    let intervalId;

    const firePopup = () => {
      let pool = buyerProfiles.filter(
        (profile) => !usedProfiles.current.has(profile.name),
      );
      if (!pool.length) {
        usedProfiles.current.clear();
        pool = [...buyerProfiles];
      }

      const profile = pool[Math.floor(Math.random() * pool.length)];
      const qty = quantities[Math.floor(Math.random() * quantities.length)];
      usedProfiles.current.add(profile.name);

      setBuyerPopup({ ...profile, qty });
      setPopupVisible(true);
      setTimeout(() => setPopupVisible(false), 10000);
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
