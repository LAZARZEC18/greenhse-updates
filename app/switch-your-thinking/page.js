import SwitchYourThinkingPage from '../../site/pages/SwitchYourThinkingPage';

/* /switch-your-thinking/ - the Switch Your Thinking partner page from the
   Magento site, rebuilt in the current design. See
   site/pages/SwitchYourThinkingPage.jsx. The old address
   /products/lighting-perth/switch-your-thinking-wa.html 301s here from
   public/_redirects. */

const title = 'Switch Your Thinking discounts | Greenhse Technologies';
const description =
  'Greenhse is a Switch Your Thinking affiliate: 10% off LED lighting and smart plugs and switches, 5% off DC ceiling fans for residents and businesses in the 16 participating Perth councils.';

export const metadata = {
  title,
  description,
  keywords:
    'Switch Your Thinking, SYT discount, Perth council LED discount, Rewards for Residents, Rewards for Business, energy efficient lighting Perth',
  alternates: { canonical: '/switch-your-thinking/' },
  openGraph: {
    title,
    description,
    url: '/switch-your-thinking/',
    siteName: 'Greenhse Technologies',
    type: 'website',
    images: [{ url: '/images/syt/affiliate-banner.webp', alt: 'Switch Your Thinking affiliate business' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/images/syt/affiliate-banner.webp'],
  },
};

export default function Page() {
  return (
    <>
      <SwitchYourThinkingPage />
    </>
  );
}
