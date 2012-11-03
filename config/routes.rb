FollowAlong::Application.routes.draw do

  resources :users
  resources :presentations

  # Needs to be in own controller - TODO
  match '/slideshow',  to: 'home#slideshow'

  match '/dashboard' => "users#dashboard", as: "dashboard"

  match 'signup'      => 'users#new',     as: 'signup'

  # Session management
  resources :sessions, :only => [:new, :create, :destroy]
  match 'login'  => 'sessions#new',     as: 'login'
  match 'logout' => 'sessions#destroy', as: 'logout'

  root :to => 'home#index'

end
