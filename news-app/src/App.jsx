import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ArticleSection from './components/ArticleSection'

const sampleArticles = Array.from({ length: 6 }).map((_, i) => ({
  title: `Sample Article Title ${i + 1}`,
  category: 'World',
  image: `https://picsum.photos/seed/${i}/600/400`,
}))

function App() {
  const [dark, setDark] = useState(false)

  return (
    <div className={dark ? 'dark' : ''}>
      <Navbar />
      <button
        onClick={() => setDark(!dark)}
        className="fixed bottom-4 right-4 z-50 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 p-2 rounded-full shadow-md focus:outline-none focus:ring"
        aria-label="Toggle Theme"
      >
        {dark ? '🌞' : '🌙'}
      </button>
      <main className="pt-16">
        <Hero />
        <ArticleSection id="latest" title="Latest" articles={sampleArticles} />
        <ArticleSection id="popular" title="Popular" articles={sampleArticles} />
        <ArticleSection id="editors" title="Editor\'s Picks" articles={sampleArticles} />
      </main>
    </div>
  )
}

export default App
