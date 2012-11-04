class PusherController < ApplicationController
  protect_from_forgery :except => :auth
  
  # def auth
  #     if current_user
  #       response = channel.authenticate(params[:socket_id], {
  #               :user_id => session[:user_id],
  #               :user_info => {}
  #             })
  #             render :json => response
  #     else
  #       render :text => "Not authorized", :status => '403'
  #     end
  # end
  
end
