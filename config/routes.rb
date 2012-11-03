FollowAlong::Application.routes.draw do

  resources :presentations
  
  # Needs to be in own controller - TODO
  match '/slideshow',  to: 'home#slideshow'

  # The priority is based upon order of creation:
  # first created -> highest priority.

  root :to => 'home#index'

end
