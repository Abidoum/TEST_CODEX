export default function ArticleCard({ title, category, image }) {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow">
      <img src={image} alt="" className="w-full h-48 object-cover" />
      <div className="p-4 space-y-2">
        <span className="text-sm text-blue-600 font-medium">{category}</span>
        <h3 className="text-lg font-semibold leading-snug">{title}</h3>
      </div>
    </article>
  )
}
