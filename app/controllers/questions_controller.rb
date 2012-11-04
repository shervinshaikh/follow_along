class QuestionsController < ApplicationController

  def new
    @question = Question.new(params[:content])
  end

  def create
    @question = Question.new(params[:content])
  end

end