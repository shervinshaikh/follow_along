FollowAlong::Application.routes.draw do

  resources :users
  resources :presentations
  resources :questions
  resources :messages
  resource  :identity

  match '/dashboard' => "users#dashboard", as: "dashboard"
  match '/pricing' => "home#pricing", as: "pricing"

  match 'signup'      => 'users#new',     as: 'signup'

  # Session management
  resources :sessions, :only => [:new, :create, :destroy]
  match 'login'  => 'sessions#new',     as: 'login'
  match 'logout' => 'sessions#destroy', as: 'logout'
  match '/pusher/auth' => 'pusher#auth'

  # Pusher POST data
  post 'pusher/auth'


  match '/swsb' => redirect('/presentations/1?student=1')


  root :to => 'home#index'

end
