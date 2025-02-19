function CommentsCard({ children, customerName }) {
  return (
    <article className="w-96 bg-smoke-gray p-4">
      <blockquote className="py-4">{children}</blockquote>
      <cite className="font-semibold">- {customerName}</cite>
    </article>
  )
}

export default CommentsCard
