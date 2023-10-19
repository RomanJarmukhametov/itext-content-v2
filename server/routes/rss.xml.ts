import { serverQueryContent } from '#content/server'
import RSS from 'rss'


const feed = new RSS({
  title: 'Michael Hoffmann',
  site_url: 'https://itext.agency',
  feed_url: `https://itext.agency/rss.xml`,
})

export default defineEventHandler(async (event) => {
  const docs = await serverQueryContent(event).sort({ date: -1 }).find()
  const blogPosts = docs.filter((doc) => doc?._path?.includes('/en/blog'))
    
    
for (const doc of blogPosts) {
  feed.item({
    title: doc.title ?? '-',
    url: `https://itext.agency${doc._path}`,
    date: doc.date,
    description: doc.description,
    enclosure: {
      url: `https://itext.agency/images/blog/${doc.image}`,
      type: 'image/jpeg' // Assuming it's a JPEG image; modify as needed
    }
  })
}


  const feedString = feed.xml({ indent: true })
  event.res.setHeader('content-type', 'text/xml')
  event.res.end(feedString)
})
