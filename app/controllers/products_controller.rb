class ProductsController < ApplicationController
    before_action :require_signin, except: [:index, :show,]
    before_action :require_admin, except: [:index, :show]
    include Rails.application.routes.url_helpers


    def index
        @products = Product.all.with_attached_product_image
  
        respond_to do |format|
            format.html 
            format.json  { render :json => @products.map {|product|  product.as_json.merge({image: (rails_blob_path(product.product_image, only_path: true) if product.product_image.attached?)})}}
                
        end
    end

    def show
        @product = Product.find(params[:id])
        @tags = @product.tags.order(:name)
        @image = rails_blob_path(@product.product_image, only_path: true) if @product.product_image.attached?

        if current_user
            @favourite = current_user.favourites.find_by(product_id: @product.id)
        end

       
    end

    def edit
        @product = Product.find(params[:id])
        @tags = @product.tags.order(:name)
        @image = rails_blob_path(@product.product_image, only_path: true) if @product.product_image.attached?

        if current_user
            @favourite = current_user.favourites.find_by(product_id: @product.id)
        end
    end

    def update
        @product = Product.find(params[:id])
        
        if @product.update(product_params)

            redirect_to @product, notice: "Product successfully updated"
        else
            render :edit, status: :unprocessable_entity
        end
    
    end

    def new
        @product = Product.new
    end

    def create
        @product = Product.new(product_params)
        
        if @product.save

        redirect_to @product, notice: "Product successfully created"
        else
            render :new, status: :unprocessable_entity
        end
    end

    def destroy
        @product = Product.find(params[:id])
        @product.destroy

        redirect_to products_url, alert: "Your post has been deleted successfully."

    end

   

    private
    def product_params
        params.require(:product).permit(:name, :description, :product_type, :price, :url, :product_image, tag_ids: [])
    end

end
