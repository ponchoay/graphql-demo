import { gql, useQuery } from '@apollo/client'

type Book = {
  id: number
  title: string
}

export default function Home() {
  const FETCH_BOOKS = gql(`
    query {
        books {
          id
          title
        }
    }
  `)

  const { data, loading } = useQuery(FETCH_BOOKS)

  return (
    <div>
      <h1>GraphQL demo</h1>
      {loading && <div>読み込み中</div>}
      {!loading && data.books.map((book: Book) => <p key={book.id}>{book.title}</p>)}
    </div>
  )
}
