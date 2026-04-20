import { useState } from 'react'
import Head from 'next/head'
import Layout from '@/components/layout'
import NotionBlockRenderer from '@/components/about-me/notion-block-renderer'
import { getPageBlocks } from '@/lib/notion'
import { RESUME_PAGE_ID, CAREER_PAGE_ID } from '@/config'

const TABS = [
  { key: 'resume', label: '자기소개서', icon: '👤' },
  { key: 'career', label: '경력기술서', icon: '💼' },
]

export default function AboutMe({ resumeBlocks, careerBlocks }) {
  const [activeTab, setActiveTab] = useState('resume')

  const blocks = activeTab === 'resume' ? resumeBlocks : careerBlocks

  return (
    <Layout>
      <Head>
        <title>전진영 | 자기소개</title>
        <meta name="description" content="자기소개서 및 경력기술서" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* 페이지 헤더 */}
      <div className="bg-gradient-to-br from-indigo-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-4xl mx-auto px-6 py-14">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold tracking-widest text-indigo-500 uppercase">About Me</span>
          </div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">전진영</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm">개발자 소개 및 경력 사항을 확인하세요.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10">
        {/* 탭 버튼 */}
        <div className="flex gap-2 mb-10">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === tab.key
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200 dark:shadow-indigo-900'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* 컨텐츠 영역 */}
        <div className="bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm p-8">
          {blocks.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-slate-400">
              <span className="text-4xl mb-3">📄</span>
              <p className="text-sm">콘텐츠를 불러올 수 없습니다.</p>
            </div>
          ) : (
            <NotionBlockRenderer blocks={blocks} />
          )}
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  const [resumeBlocks, careerBlocks] = await Promise.all([
    getPageBlocks(RESUME_PAGE_ID),
    getPageBlocks(CAREER_PAGE_ID),
  ])

  return {
    props: { resumeBlocks, careerBlocks },
  }
}
