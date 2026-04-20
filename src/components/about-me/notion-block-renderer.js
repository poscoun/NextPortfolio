function RichText({ richText }) {
  if (!richText || richText.length === 0) return null

  return richText.map((text, i) => {
    let node = text.plain_text

    if (text.href) {
      node = (
        <a
          key={i}
          href={text.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 dark:text-indigo-400 underline underline-offset-2 hover:text-indigo-800 dark:hover:text-indigo-200 transition-colors"
        >
          {node}
        </a>
      )
    } else {
      node = <span key={i}>{node}</span>
    }

    if (text.annotations?.bold) node = <strong key={i} className="font-semibold text-slate-800 dark:text-slate-100">{node}</strong>
    if (text.annotations?.italic) node = <em key={i}>{node}</em>
    if (text.annotations?.code) {
      node = (
        <code key={i} className="bg-slate-100 dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 px-1.5 py-0.5 rounded text-xs font-mono">
          {node}
        </code>
      )
    }

    return node
  })
}

function groupListItems(blocks) {
  const groups = []
  let i = 0

  while (i < blocks.length) {
    const block = blocks[i]

    if (
      block.type === 'bulleted_list_item' ||
      block.type === 'numbered_list_item'
    ) {
      const type = block.type
      const items = []
      while (i < blocks.length && blocks[i].type === type) {
        items.push(blocks[i])
        i++
      }
      groups.push({ type, items })
    } else {
      groups.push({ type: block.type, items: [block] })
      i++
    }
  }

  return groups
}

export default function NotionBlockRenderer({ blocks }) {
  if (!blocks || blocks.length === 0) return null

  const groups = groupListItems(blocks)

  return (
    <div className="space-y-2">
      {groups.map((group, gi) => {
        if (group.type === 'bulleted_list_item') {
          return (
            <ul key={gi} className="my-4 space-y-3 pl-5 list-disc marker:text-indigo-400">
              {group.items.map((block) => (
                <li key={block.id} className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-1">
                  <RichText richText={block.bulleted_list_item.rich_text} />
                </li>
              ))}
            </ul>
          )
        }

        if (group.type === 'numbered_list_item') {
          return (
            <ol key={gi} className="my-4 space-y-7 pl-5 list-decimal marker:text-indigo-500 marker:font-semibold marker:text-sm">
              {group.items.map((block) => (
                <li key={block.id} className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-1">
                  <RichText richText={block.numbered_list_item.rich_text} />
                </li>
              ))}
            </ol>
          )
        }

        const block = group.items[0]

        switch (block.type) {
          case 'paragraph':
            return (
              <p key={block.id} className="text-sm text-slate-600 dark:text-slate-300 leading-8 my-5">
                <RichText richText={block.paragraph.rich_text} />
              </p>
            )
          case 'heading_1':
            return (
              <div key={block.id} className="mt-12 mb-6">
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white pb-3 border-b-2 border-indigo-500">
                  <RichText richText={block.heading_1.rich_text} />
                </h1>
              </div>
            )
          case 'heading_2':
            return (
              <div key={block.id} className="mt-10 mb-5">
                <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                  <span className="w-1 h-5 rounded-full bg-indigo-500 inline-block" />
                  <RichText richText={block.heading_2.rich_text} />
                </h2>
              </div>
            )
          case 'heading_3':
            return (
              <h3 key={block.id} className="text-base font-medium text-slate-700 dark:text-slate-200 mt-7 mb-3">
                <RichText richText={block.heading_3.rich_text} />
              </h3>
            )
          case 'divider':
            return (
              <div key={block.id} className="my-8 flex items-center gap-3">
                <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700" />
                <span className="text-slate-300 dark:text-slate-600 text-xs">✦</span>
                <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700" />
              </div>
            )
          case 'callout':
            return (
              <div
                key={block.id}
                className="flex gap-3 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 px-5 py-4 rounded-xl my-4"
              >
                <span className="text-lg flex-shrink-0">{block.callout.icon?.emoji ?? '💡'}</span>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  <RichText richText={block.callout.rich_text} />
                </p>
              </div>
            )
          default:
            return null
        }
      })}
    </div>
  )
}
