class PresentationsController < ApplicationController
  protect_from_forgery :except => :auth
  
  def index
    #
  end

  def show
<<<<<<< HEAD
    Pusher['test_channel'].trigger('greet', {
      :greeting => "Hello there!"
    })
=======
  	@question = Question.new
>>>>>>> 72cd3cff9a8a38e2ef70ece67dc8734c59664279
  end
  
  
  # Authenticate a user into the correct url presentation
  def auth
      if current_user
        response = Pusher[params[:channel_name]].authenticate(params[:socket_id])
        render :json => response
      else
        render :text => "Not authorized", :status => '403'
      end
    end
  
end
