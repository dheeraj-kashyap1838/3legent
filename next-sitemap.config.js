/** @type {import('next-sitemap').IConfig} */

import fetch from 'node-fetch'
import * as Prismic from '@prismicio/client'

const PRISMIC_REPOSITORY_NAME = '3legent'

const client = Prismic.createClient(PRISMIC_REPOSITORY_NAME, { fetch })

function customLimitedField(path) {
  return path === "/blog"
}

export default {
  siteUrl: "http://localhost:3000",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  exclude: [],
  transform: async (config, path) => {
    const customTypes = ["page", "homepage", "blog", "blogs"]

    let allDocs = []

    for (const type of customTypes) {
      const docs = await client.getAllByType(type)
      allDocs = [...allDocs, ...docs]
    }

    const matchedDoc = allDocs.find((doc) => {
      let docPath = ""

      switch (doc.type) {
        case "blog":
          docPath = `/blog/${doc.uid}`
          break
        case "blogs":
          docPath = `/blogs/${doc.uid}`
          break
        case "contact":
          docPath = `/contact/${doc.uid}`
          break
        default:
          docPath = `/${doc.uid === "homepage" ? "" : doc.uid}`
          break
      }

      return docPath === path
    })

    if (matchedDoc?.data?.no_sitemap === true) {
      return null
    }

    if (customLimitedField(path)) {
      return {
        loc: path,
        changefreq: "daily",
      }
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
}
