import { TOKEN } from '@/config'

export async function getPageBlocks(pageId) {
  if (!pageId) return []

  try {
    const res = await fetch(
      `https://api.notion.com/v1/blocks/${pageId}/children?page_size=100`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          'Notion-Version': '2022-02-22',
        },
      }
    )

    if (!res.ok) {
      console.error(`Notion API error: ${res.status} ${res.statusText}`)
      return []
    }

    const data = await res.json()
    return data.results ?? []
  } catch (err) {
    console.error('getPageBlocks failed:', err)
    return []
  }
}
