class Hospital < ApplicationRecord
  has_many :reviews, dependent: :destroy
  before_save :slugify
  validates :name, presence: true, uniqueness: true
  validates :slug, uniqueness: true
  

  def slugify
    self.slug = name.parameterize
  end

  def avg_score
    reviews.average(:score)
  end
end
