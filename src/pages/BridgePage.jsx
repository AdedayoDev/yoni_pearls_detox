import { useNavigate } from "react-router-dom";

function BridgePage() {
  const navigate = useNavigate();

  return (
    <div className='page-wrapper hero-gradient relative overflow-hidden'>
      <div className='hero-blob hero-blob-1' />
      <div className='hero-blob hero-blob-2' />
      <div className='hero-blob hero-blob-3' />

      <main className='relative z-10 flex min-h-screen items-center justify-center px-6 py-12 text-center'>
        <div className='max-w-3xl'>
          <p className='text-script-white mb-6'>For every woman who deserves to feel her best...</p>
          <h1 className='heading-white text-[clamp(2.75rem,6vw,4.5rem)] leading-tight'>
            Stop wondering and start feeling fresh again.
          </h1>
          <div className='divider-gold-center mx-auto my-8' />
          <p className='text-light-soft text-lg md:text-xl max-w-2xl mx-auto mb-10'>
            One simple ancient herbal ritual is quietly restoring the confidence of women across Nigeria.
          </p>
          <button
            type='button'
            onClick={() => navigate('/product')}
            className='btn-primary btn-hero w-full md:w-auto text-lg md:text-xl py-5 px-10'
          >
            🌿 Show Me The Secret Now
          </button>
          <div className='mt-8 flex flex-wrap justify-center gap-5 text-sm text-light-soft'>
            <span>✅ 100% discreet</span>
            <span>·</span>
            <span>🚚 Fast delivery</span>
            <span>·</span>
            <span>📲 WhatsApp support</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default BridgePage;
