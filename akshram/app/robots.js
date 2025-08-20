export default function robots() {
  return {
    rules: [
      {
        userAgent: '*', 
        allow: '/',    
      },
    ],
    sitemap: 'https://akhsharam-playschool.vercel.app/sitemap.xml', 
  } 
}