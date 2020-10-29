Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :hospitals, params: :slug
      resources :reviews
    end
  end
  get '#path', to: 'pages#index', via: :all
end
