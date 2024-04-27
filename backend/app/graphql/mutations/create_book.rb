# frozen_string_literal: true

module Mutations
  class CreateBook < BaseMutation
    # TODO: define return fields
    # field :post, Types::PostType, null: false

    # TODO: define arguments
    # argument :name, String, required: true

    # TODO: define resolve method
    # def resolve(name:)
    #   { post: ... }
    # end

    field :book, Types::BookType, null: false

    argument :title, String, required: true

    def resolve(**args)
      book = Book.create!(args)
      {
        book: book
      }
    end
  end
end
