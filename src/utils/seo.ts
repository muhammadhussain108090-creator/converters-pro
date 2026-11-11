import { PageSeoMetadata, SITE_BASE_URL } from '../config/seo';

/**
 * Dynamically updates document <title>, meta description, keywords, canonical link,
 * OpenGraph, Twitter tags, and Schema.org structured data (JSON-LD) in real time.
 */
export const applyPageSEO = (seo: PageSeoMetadata): void => {
  if (typeof document === 'undefined') return;

  // 1. Page Title
  document.title = seo.title;

  // Helper to get or create a meta tag
  const setMeta = (nameAttr: 'name' | 'property', attrValue: string, content: string) => {
    let el = document.querySelector(`meta[${nameAttr}="${attrValue}"]`) as HTMLMetaElement | null;
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(nameAttr, attrValue);
      document.head.appendChild(el);
    }
    el.content = content;
  };

  // 2. Standard Meta Tags
  setMeta('name', 'description', seo.description);
  setMeta('name', 'keywords', seo.keywords.join(', '));

  // 3. Canonical URL
  const fullCanonicalUrl = `${SITE_BASE_URL}${seo.canonicalPath === '/' ? '' : seo.canonicalPath}`;
  let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!linkCanonical) {
    linkCanonical = document.createElement('link');
    linkCanonical.rel = 'canonical';
    document.head.appendChild(linkCanonical);
  }
  linkCanonical.href = fullCanonicalUrl;

  // 4. OpenGraph Tags
  setMeta('property', 'og:title', seo.title);
  setMeta('property', 'og:description', seo.description);
  setMeta('property', 'og:url', fullCanonicalUrl);
  setMeta('property', 'og:type', 'website');
  setMeta('property', 'og:site_name', 'ConvertPro');

  // 5. Twitter Card Tags
  setMeta('name', 'twitter:card', 'summary_large_image');
  setMeta('name', 'twitter:title', seo.title);
  setMeta('name', 'twitter:description', seo.description);

  // 6. Schema.org JSON-LD Structured Data
  let ldJsonEl = document.getElementById('convertpro-jsonld') as HTMLScriptElement | null;
  if (!ldJsonEl) {
    ldJsonEl = document.createElement('script');
    ldJsonEl.id = 'convertpro-jsonld';
    ldJsonEl.type = 'application/ld+json';
    document.head.appendChild(ldJsonEl);
  }

  const structuredData: any = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        '@id': `${SITE_BASE_URL}/#app`,
        'name': 'ConvertPro',
        'url': fullCanonicalUrl,
        'description': seo.description,
        'applicationCategory': 'MultimediaApplication',
        'operatingSystem': 'All',
        'browserRequirements': 'Requires HTML5 compatible web browser with WebAssembly support',
        'offers': {
          '@type': 'Offer',
          'price': '0',
          'priceCurrency': 'USD'
        },
        'featureList': [
          'Client-Side WebAssembly File Processing',
          'Zero File Uploads for 100% Privacy',
          'PDF Merge, Split, Rotate, Extract, Delete & Metadata',
          'Image Compression, Resizing, Crop & Format Conversion',
          'Audio Transcoding (MP3, WAV, AAC, FLAC, OGG, M4A, WMA)',
          'Video Transcoding (MP4, MOV, MKV, AVI, WebM)',
          'Video to Audio Soundtrack Extraction'
        ]
      }
    ]
  };

  if (seo.faqs && seo.faqs.length > 0) {
    structuredData['@graph'].push({
      '@type': 'FAQPage',
      '@id': `${fullCanonicalUrl}#faq`,
      'mainEntity': seo.faqs.map((faq) => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer
        }
      }))
    });
  }

  ldJsonEl.textContent = JSON.stringify(structuredData, null, 2);
};
