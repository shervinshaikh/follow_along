class SessionsController < ApplicationController

  def new
    redirect_to dashboard_path if signed_in?
  end

  def create
    user = User.find_by_email(params[:email])

    if user && user.authenticate(params[:password])
      cookies[:auth_token] = user.auth_token
      return redirect_to dashboard_path
    else
      flash.now[:error] = "Invalid email or password"
      return render :new
    end

  end

  def destroy
    cookies.delete(:auth_token)
    return redirect_to root_url
  end

end
