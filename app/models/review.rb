class Review < ApplicationRecord
  belongs_to :product
  belongs_to :user 
  after_create :update_product_rating
  after_update :update_product_rating
  after_destroy :update_product_rating



  
  
  
  STARS = [1, 2, 3, 4, 5]
  validates :comment, length: {minimum: 10}
  

  validates :stars, inclusion: {
    in: STARS,
    message: "must be between 1 and 5"
  }

  def stars_as_percent
    (stars / 5.0) * 100.0
  end

  def update_product_rating
    product.update_average_rating
  end

end
