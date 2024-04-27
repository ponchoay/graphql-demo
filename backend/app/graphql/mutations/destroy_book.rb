module Mutations
  class DestroyBook < BaseMutation
    field :book, Types::BookType, null: false

    argument :id, ID, required: true

    def resolve(id:)
      book = Book.find(id)
      book.destroy!
      {
        book: book
      }
    end
  end
end
