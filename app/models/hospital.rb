class Hospital < ApplicationRecord
  has_many :reviews, dependent: :destroy

  validates :name, presence: true, uniqueness: true

  before_create :slugify

  def slugify
    self.slug = name.parameterize
  end

  def avg_score
    reviews.average(:score)
  end
end
