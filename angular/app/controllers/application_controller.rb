class ApplicationController < ActionController::Base
    respond_to :html, :json

    # Prevent CSRF attacks by raising an exception.
    # For APIs, you may want to use :null_session instead.
    protect_from_forgery with: :null_session
    
    skip_before_action :verify_authenticity_token
    
    before_action :authenticate_user!
    
    before_filter :configure_devise_params, if: :devise_controller?
      def configure_devise_params
        devise_parameter_sanitizer.for(:sign_up) do |u|
              u.permit(
                :email,
                :password,
                :password_confirmation,
                :firstname, 
                :lastname, 
                :street, 
                :zip, 
                :city, 
                :job, 
                :tel, 
                :modil,
                :gender,
                :birthday,
                :birthcity,
                :scene,
                :sexual,
                :vegan,
                :encrypted_password
            )
        end
    end
end
