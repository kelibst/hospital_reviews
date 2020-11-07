class Hospital < ApplicationRecord
  has_many :reviews

  validates :name, presence: true, uniqueness: true

  before_create :slugify

  def slugify
    self.slug = name.parameterize
  end

  def avg_score
    reviews.average(:score)
  end
  # .round(2).to_f
end
