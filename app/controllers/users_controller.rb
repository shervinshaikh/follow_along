class UsersController < ApplicationController

  before_filter :must_be_logged_in,              except: [:new, :create]

  def new
    @user = User.new
  end

  def create
    @user = User.new(params[:user])

    if @user.save
      cookies[:auth_token] = @user.auth_token
      return redirect_to welcome_path
    else
      flash.now[:error] = "Error - please check your fields and try again."
      return render :new
    end
  end

  def show
  end

  def edit
  end

  def update
    if @user.update_attributes(params[:user])
      flash[:success] = "Profile successfully updated."
      return redirect_to expenses_path
    else
      flash.now[:error] = "Error - please check your fields and try again."
      return render :edit
    end
  end

  def dashboard

  end

end
