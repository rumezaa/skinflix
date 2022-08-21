Rails.application.routes.draw do
  resources :tags


  root 'products#index'
  resources :users do
    resource :favourites
  end
  get "signup" => "users#new"

  

  resource :session, only: [:new, :create, :destroy]
  get "signin" => "sessions#new"

  resources :products do 
    resource :favourites, only: [:create, :destroy, :show]
    resources :reviews

  end


end