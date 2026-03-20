import { Helmet } from 'react-helmet-async';

interface SeoHeadProps {
  title: string;
  description: string;
  type?: 'website' | 'article';
  url?: string;
  image?: string;
}

const SeoHead = ({ 
  title, 
  description, 
  type = 'website', 
  url, 
  image = '/logo.png' 
}: SeoHeadProps) => {
  const fullTitle = `${title} | RAD Morocco Travel & Tours`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SeoHead;
