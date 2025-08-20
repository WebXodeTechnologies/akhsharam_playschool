export default function sitemap() {
  const now = new Date()

  return [
    {
      url: 'https://akhsharam-playschool.vercel.app/',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: 'https://akhsharam-playschool.vercel.app/about',
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: 'https://akhsharam-playschool.vercel.app/gallery',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://akhsharam-playschool.vercel.app/contact',
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
  ]
}
