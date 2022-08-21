class ReviewsController < ApplicationController
    before_action :require_signin, only: [:create, :new]
    before_action :find_product
    before_action :find_reviews
    
    def index
    end

    def show
    end

    def new
        @review = @reviews.new
    end

    def create
        @review = @reviews.new(review_params)
        @review.user = current_user
        @review.username = @review.user.username
        if @review.save
            redirect_to product_reviews_path(@product), notice: "Review successfully created"
        else
            render :new, status: :unprocessable_entity
        end
    end

    def edit
        @review = Review.find(params[:id])
    end



    def update
        @review = Review.find(params[:id])
        
        if @review.update(review_params)

            redirect_to product_reviews_path(@product), notice: "Review successfully updated"
        else
            render :edit, status: :unprocessable_entity
        end
    end

    def destroy
        @review = Review.find(params[:id])
        @review.destroy

        redirect_to product_reviews_path(@product), alert: "Review has been deleted successfully."
    end


    private
    
    def review_params
        params.require(:review).permit(:comment, :stars)
    end

    def find_product
        @product = Product.find(params[:product_id])
    end

    def find_reviews
        @reviews = @product.reviews
    end
end
