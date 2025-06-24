import { usePathname } from 'next/navigation';
import Head from 'next/head';

export default function CanonicalUrl() {
  const pathname = usePathname();
  const baseUrl = 'https://aiponatime.com';
  const canonicalUrl = `${baseUrl}${pathname === '/' ? '' : pathname}`.split('?')[0];

  return (
    <Head>
      <link rel="canonical" href={canonicalUrl} key="canonical" />
      <meta property="og:url" content={canonicalUrl} key="og:url" />
    </Head>
  );
}
