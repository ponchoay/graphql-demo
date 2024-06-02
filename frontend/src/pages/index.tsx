import { useFetchBooksQuery } from '@/graphql/generated/graphql'

export default function Home() {
  const { data, loading } = useFetchBooksQuery()

  return (
    <div>
      <h1>GraphQL demo</h1>
      {loading && <div>読み込み中</div>}
      {!loading && data && data.books.map((book) => <p key={book.id}>{book.title}</p>)}
    </div>
  )
}
