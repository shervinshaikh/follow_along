class HomeController < ApplicationController
  def index
  	Pusher['test_channel'].trigger('greet', {
  		:greeting => "Hello there!"
	})
  end

  def pricing
  end
end
