module Mutations
  class UpdateBook < BaseMutation
    field :book, Types::BookType, null: false

    argument :id, ID, required: true
    argument :title, String, required: true

    def resolve(id:, title:)
      book = Book.find(id)
      book.update!(title: title)
      {
        book: book
      }
    end
  end
end
