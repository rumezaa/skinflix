class Product < ApplicationRecord
  has_many :reviews, dependent: :destroy
  has_many :favourites, dependent: :destroy
  has_many :user_favourites, through: :favourites, source: :user
  has_many :product_tags, dependent: :destroy
  has_many :tags, through: :product_tags

  has_one_attached :product_image


  PRODUCT_TYPE = %w(cleanser serum sunscreen moisturizer)
  validates :name, presence: true
  validates :description, length: {minimum: 25}
  validates :price, numericality: { greater_than: 0 }
  validates :product_type, inclusion: { in: PRODUCT_TYPE }
  
  def update_average_rating
    @value = 0
    self.reviews.each do |review|
      @value = @value + review.stars.to_s.to_d
    end
    @total = self.reviews.size == 0 ? "1" : self.reviews.size
    update!(average_rating: @value.to_i / @total.to_i)
  end



end
