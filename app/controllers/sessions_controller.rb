class SessionsController < ApplicationController
    def new
        if session[:user_id]
            redirect_to products_url, notice: "Your already Signed in!"
        end
    end

    def create

        user = User.find_by(email: params[:email_or_username]) ||
          User.find_by(username: params[:email_or_username])
        
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            redirect_to user, notice: "Welcome back, #{user.name}!"
        else
            flash.now[:alert] = "Invalid email/password combination"
            render :new, status: :unprocessable_entity
        end
    end

    def destroy
        session[:user_id] = nil
        redirect_to products_url, notice: "You're now signed out"
    end

end
