import { Helmet } from 'react-helmet-async';

interface SeoHeadProps {
  title: string;
  description: string;
  type?: 'website' | 'article';
  url?: string;
  image?: string;
  keywords?: string;
  canonical?: string;
  structuredData?: object | object[];
  noindex?: boolean;
}

const SITE_NAME = 'RAD Morocco';
const SITE_URL = 'https://radmorocco.com';
const DEFAULT_IMAGE = `${SITE_URL}/logo.png`;

const SeoHead = ({ 
  title, 
  description, 
  type = 'website', 
  url,
  image,
  keywords,
  canonical,
  structuredData,
  noindex = false,
}: SeoHeadProps) => {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const resolvedUrl = canonical || url || SITE_URL;
  const resolvedImage = image || DEFAULT_IMAGE;
  
  // Ensure image is absolute URL
  const absoluteImage = resolvedImage.startsWith('http') 
    ? resolvedImage 
    : `${SITE_URL}${resolvedImage}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={resolvedUrl} />
      
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={resolvedUrl} />
      <meta property="og:image" content={absoluteImage} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImage} />
      
      {/* hreflang - primary language */}
      <link rel="alternate" hrefLang="en" href={resolvedUrl} />
      <link rel="alternate" hrefLang="x-default" href={resolvedUrl} />
      
      {/* Structured Data */}
      {structuredData && (
        Array.isArray(structuredData) 
          ? structuredData.map((data, i) => (
              <script key={i} type="application/ld+json">
                {JSON.stringify(data)}
              </script>
            ))
          : <script type="application/ld+json">
              {JSON.stringify(structuredData)}
            </script>
      )}
    </Helmet>
  );
};

export default SeoHead;
