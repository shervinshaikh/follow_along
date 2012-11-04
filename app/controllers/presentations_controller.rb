class PresentationsController < ApplicationController
  protect_from_forgery :except => :auth

  def index
    #
  end

  def show
    @question = Question.new
    @identity = session[:identity]
  end

  def create

  end



  # Authenticate a user into the correct url presentation
  # def auth
  #     if current_user
  #       response = Pusher[params[:channel_name]].authenticate(params[:socket_id])
  #       render :json => response
  #     else
  #       render :text => "Not authorized", :status => '403'
  #     end
  # end

end
