import ArticleCard from './ArticleCard'

export default function ArticleSection({ id, title, articles }) {
  return (
    <section id={id} className="py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-6">{title}</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a, i) => (
            <ArticleCard key={i} {...a} />
          ))}
        </div>
      </div>
    </section>
  )
}
