class PresentationsController < ApplicationController
  def index
  end

  def show
  	@question = Question.new
  end
end
