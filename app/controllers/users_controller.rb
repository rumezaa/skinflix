class UsersController < ApplicationController
    before_action :require_signin, except: [:new, :create]
    before_action :require_correct_user, only: [:edit, :update, :destroy]
    before_action :find_user, only: [ :show, :edit ]


    def index
        @users = User.all
        respond_to do |format|
            format.html 
            format.json  { render json: {data: @users, status: 200, message: 'success'} }
                
        end
        
    end

    def show
        @reviews = @user.reviews
        @products = Product.all
        @favs = @user.favourite_products
    end

    def new
        if session[:user_id]
            redirect_to products_url, notice: "please logout to create a new account"
        end
        @user = User.new
    end

    def create
        @user = User.new(user_params)

        if @user.save
            session[:user_id] = @user.id
            session[:intended_url] = request.url
            redirect_to @user, notice: "Thanks for signing up!"
            session[:intended_url] = nil
        else
            render :new, status: :unprocessable_entity

        end
    end

    def edit
        @reviews = @user.reviews
        @products = Product.all
    end

    def update
        if @user.update(user_params)

            redirect_to @user, notice: "Account successfully updated"
        else
            render :edit, status: :unprocessable_entity
        end

    end

    def destroy

        @user.destroy
        session[:user_id] = nil
        redirect_to users_url, alert: "Your account has been deleted successfully."


    end
        


    private

    def user_params
        params.require(:user).permit(:name, :email, :password, :username)
    end

    def require_correct_user
        @user = User.find(params[:id])
        redirect_to root_url unless current_user?(@user)       
    end

    def find_user
        @user = User.find(params[:id])
    end
end
