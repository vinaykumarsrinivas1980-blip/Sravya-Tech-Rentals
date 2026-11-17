import { EQUIPMENT_CATALOG } from '../data/equipment'

const SITE_URL = 'https://sravya-tech-rentals.vinaykumarsrinivas1980.workers.dev'

function generateSiteMap() {
  const currentDate = new Date().toISOString()
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${SITE_URL}/</loc>
       <lastmod>${currentDate}</lastmod>
       <changefreq>daily</changefreq>
       <priority>1.0</priority>
     </url>
     ${EQUIPMENT_CATALOG
       .map((product) => {
         return `
       <url>
           <loc>${SITE_URL}/products/${product.id}</loc>
           <lastmod>${currentDate}</lastmod>
           <changefreq>weekly</changefreq>
           <priority>0.8</priority>
       </url>
     `
       })
       .join('')}
   </urlset>
 `
}

export async function getServerSideProps({ res }) {
  const sitemap = generateSiteMap()
  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {}
  }
}

export default function SiteMap() {
  return null
}
