export default function Hero() {
  return (
    <section className="pt-20 bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center py-12">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">Breaking News Headline Goes Here</h1>
        <p className="text-lg sm:text-xl mb-6 max-w-3xl">A short description of the featured article that captures attention and encourages users to read more.</p>
        <a href="#" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded transition-colors">Read More</a>
      </div>
    </section>
  )
}
