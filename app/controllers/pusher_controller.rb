class PusherController < ApplicationController
  def auth
    raise "Unknown channel" unless params[:channel_name] == 'presence-test'
    
    channel = Pusher['presence-test']
    session[:user_id] ||= rand(1000000)

    if identity = session[:identity]
      response = channel.authenticate(params[:socket_id], {
        :user_id => session[:user_id],
        :user_info => {
          :gravatar => identity[:gravatar]
        }
      })
      render :json => response
    else
      # We're allowing anonymous users
      response = channel.authenticate(params[:socket_id], {
        :user_id => session[:user_id],
        :user_info => {}
      })
      render :json => response
       
    end
  end
end

  # TODO - Specify channel name based off sanitized URL requst
  # channel_name = nil
  # 
  # if( !request.referer )
  #   status 400
  #   body 'channel name could not be determined from request.referer'
  # end
  # 
  # channel_name = get_channel_name(request.referer)
  #
  # def get_channel_name(http_referer)
  #   pattern = /(\W)+/
  #   channel_name = http_referer.gsub pattern, '-'
  #   return channel_name
  # end
  
