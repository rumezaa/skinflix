class FavouritesController < ApplicationController
    before_action :require_signin

    def show
        @user = User.find(params[:user_id])
        @fav_products = @user.favourite_products.with_attached_product_image 
        @fav_products =  @fav_products.map {|product|  product.as_json.merge({image: (rails_blob_path(product.product_image, only_path: true) if product.product_image.attached?)})}
        respond_to do |format|
            format.html  # index.html.erb
            format.json  { render :json => @fav_products.map {|product|  product.as_json.merge({image: (rails_blob_path(product.product_image, only_path: true) if product.product_image.attached?)})}}
        end
    end

    def create
        @product = Product.find(params[:product_id])
        @user = current_user
        @product.favourites.create!(user: @user )
        redirect_to @product
    end

    def destroy
        @product = Product.find(params[:product_id])
        @product.favourites.find_by(user: current_user).destroy
        redirect_to @product
      end

end
