Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  get '/', to: "homes#index"
  get '/play', to: "homes#index"

  namespace :api do 
    namespace :v1 do
      resources :board_saves, only: [:index, :create]
      resources :current_users, only: [:index]
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
