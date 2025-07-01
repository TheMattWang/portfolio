const fs = require('fs')
const matter = require('gray-matter')
const medium = require('@medium/sdk')

const client = new medium.MediumClient({
  token: process.env.MEDIUM_TOKEN,
})

async function publishToMedium(filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContent)
  
  // Skip if already published to Medium
  if (data.canonicalUrl) {
    console.log(`Skipping ${filePath} - already published to Medium`)
    return
  }

  try {
    const post = await client.createPost({
      userId: process.env.MEDIUM_USER_ID,
      title: data.title,
      contentFormat: 'markdown',
      content,
      tags: data.tags,
      publishStatus: 'public',
      canonicalUrl: `https://mattwang.me${data.url}`, // TODO(Matt): Update with your domain
    })

    // Update the frontmatter with the Medium URL
    const updatedFrontmatter = {
      ...data,
      canonicalUrl: post.url,
    }

    const updatedContent = matter.stringify(content, updatedFrontmatter)
    fs.writeFileSync(filePath, updatedContent)

    console.log(`Published ${filePath} to Medium: ${post.url}`)
  } catch (error) {
    console.error(`Failed to publish ${filePath} to Medium:`, error)
    process.exit(1)
  }
}

const filePath = process.argv[2]
if (!filePath) {
  console.error('Please provide a file path')
  process.exit(1)
}

publishToMedium(filePath) 