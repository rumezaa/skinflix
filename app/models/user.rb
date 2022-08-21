class User < ApplicationRecord
  has_many :reviews, dependent: :destroy
  has_many :favourites, dependent: :destroy
  has_many :favourite_products, through: :favourites, source: :product

  has_secure_password

  validates :name, presence: true
  validates :email, presence: true,
                  format: { with: /\S+@\S+/ }
                  
  validates :password, length: {minimum: 10, allow_blank: true}
  validates :username, presence: true,
                     format: { with: /\A[A-Z0-9]+\z/i },
                     uniqueness: { case_sensitive: false }
end
