import { defineDocumentType, makeSource } from "contentlayer/source-files";
import { DocumentTypes } from "contentlayer/generated";
import { calculateReadTime } from "./src/lib/utils";

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `blog/**/*.{md,mdx}`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    date: {
      type: "date",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    tags: {
      type: "list",
      of: { type: "string" },
      default: [],
    },
    published: {
      type: "boolean",
      default: true,
    },
    image: {
      type: "string",
      required: false,
    },
    // For Medium cross-posting
    canonicalUrl: {
      type: "string",
      required: false,
    },
    timeToComplete: {
      type: "string",
      required: false,
    },
    category: {
      type: "string",
      required: true,
      options: ["Project", "Paper", "Life", "Tutorial", "Thoughts"],
    },
    isComplete: {
      type: "boolean",
      default: false,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc: DocumentTypes) => doc._raw.sourceFileName.replace(/\.(md|mdx)$/, ""),
    },
    url: {
      type: "string",
      resolve: (doc: DocumentTypes) => `/blog/${doc._raw.sourceFileName.replace(/\.(md|mdx)$/, "")}`,
    },
    readingTime: {
      type: "number",
      resolve: (doc: DocumentTypes) => calculateReadTime(doc.body.raw),
    },
  },
}));

export default makeSource({
  contentDirPath: "src/content",
  documentTypes: [Blog],
  disableImportAliasWarning: true,
}); 