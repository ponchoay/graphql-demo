import {
  useCreateBookMutation,
  useDestroyBookMutation,
  useFetchBooksQuery,
  useUpdateBookMutation
} from '@/graphql/generated/graphql'
import { useState } from 'react'

export default function Home() {
  const { data, loading } = useFetchBooksQuery()
  const [createBook] = useCreateBookMutation({ refetchQueries: ['fetchBooks'] })
  const [destroyBook] = useDestroyBookMutation({ refetchQueries: ['fetchBooks'] })
  const [updateBook] = useUpdateBookMutation()
  const [title, setTitle] = useState('')

  return (
    <div>
      <h1>書籍一覧</h1>

      <div>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <button
          onClick={() => {
            createBook({ variables: { input: { title: title } } })
            setTitle('')
          }}
        >
          保存
        </button>
      </div>

      {loading && <div>読み込み中</div>}

      {!loading &&
        data &&
        data.books.map((book) => (
          <div key={book.id} className="flex">
            <input
              value={book.title || ''}
              onChange={(e) => {
                updateBook({ variables: { input: { id: book.id, title: e.target.value } } })
              }}
            />

            <button
              onClick={() => {
                destroyBook({ variables: { input: { id: book.id } } })
              }}
            >
              削除
            </button>
          </div>
        ))}
    </div>
  )
}
