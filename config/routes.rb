FollowAlong::Application.routes.draw do

  resources :presentations

  root :to => 'home#index'

end
