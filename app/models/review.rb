class Review < ApplicationRecord
  belongs_to :hospital
  scope :ordered_by_most_recent, -> { order(created_at: :desc) }
end
