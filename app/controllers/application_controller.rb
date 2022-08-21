class ApplicationController < ActionController::Base

    private

    def require_admin
        redirect_to root_url, alert: "Unauthorized Access" unless current_user_admin?
    end

    def current_user_admin?
        current_user && current_user.admin?
    end

    def require_signin
        redirect_to signin_path, alert: "Please Sign in" unless current_user
    end

    def current_user?(user)
        current_user == user
    end

    def current_user
        @current_user ||= User.find(session[:user_id]) if session[:user_id]
     end





    helper_method :current_user
    helper_method :current_user?
    helper_method :current_user_admin?

end
