class DropStringFromReviews < ActiveRecord::Migration[6.0]
  def change
    remove_column :reviews, :string
  end
end
