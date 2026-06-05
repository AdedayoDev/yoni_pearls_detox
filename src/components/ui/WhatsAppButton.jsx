import { makeWhatsAppLink } from "../../data/siteConfig";

export default function WhatsAppButton({
  label = "ORDER NOW!",
  href,
  message,
  className = "",
  iconSrc = "/whatsapp-color-svgrepo-com.svg",
  ...props
}) {
  const url = href ?? makeWhatsAppLink(message);

  return (
    <a
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      className={`inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] text-white border border-transparent px-8 py-4 font-semibold transition-all duration-300 transform hover:bg-[#1DA851] active:scale-95 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#25D366]/30 ${className}`}
      {...props}
    >
      <img
        src={iconSrc}
        alt='WhatsApp icon'
        className='h-6 w-6 object-contain'
      />
      <span>{label}</span>
    </a>
  );
}
