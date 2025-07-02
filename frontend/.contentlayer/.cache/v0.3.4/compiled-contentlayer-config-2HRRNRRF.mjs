// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";

// src/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function calculateReadTime(content) {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const readTime = Math.ceil(words / wordsPerMinute);
  return readTime;
}

// contentlayer.config.ts
var Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `blog/*.md`,
  contentType: "markdown",
  fields: {
    title: {
      type: "string",
      required: true
    },
    date: {
      type: "date",
      required: true
    },
    description: {
      type: "string",
      required: true
    },
    tags: {
      type: "list",
      of: { type: "string" },
      default: []
    },
    published: {
      type: "boolean",
      default: true
    },
    image: {
      type: "string",
      required: false
    },
    // For Medium cross-posting
    canonicalUrl: {
      type: "string",
      required: false
    },
    timeToComplete: {
      type: "string",
      required: false
    },
    category: {
      type: "string",
      required: true,
      options: ["Project", "Paper", "Life", "Tutorial", "Thoughts"]
    }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.md$/, "")
    },
    url: {
      type: "string",
      resolve: (doc) => `/blog/${doc._raw.sourceFileName.replace(/\.md$/, "")}`
    },
    readingTime: {
      type: "number",
      resolve: (doc) => calculateReadTime(doc.body.raw)
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "src/content",
  documentTypes: [Blog],
  disableImportAliasWarning: true
});
export {
  Blog,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-2HRRNRRF.mjs.map
