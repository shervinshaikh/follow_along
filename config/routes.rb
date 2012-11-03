FollowAlong::Application.routes.draw do

  resources :presentations

  # The priority is based upon order of creation:
  # first created -> highest priority.

  root :to => 'home#index'

end
