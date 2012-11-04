FollowAlong::Application.routes.draw do

  resources :users
  resources :presentations

  match '/dashboard' => "users#dashboard", as: "dashboard"

  match 'signup'      => 'users#new',     as: 'signup'

  # Session management
  resources :sessions, :only => [:new, :create, :destroy]
  match 'login'  => 'sessions#new',     as: 'login'
  match 'logout' => 'sessions#destroy', as: 'logout'
  
  # Pusher POST data
  post 'pusher/auth'

  root :to => 'home#index'

end
