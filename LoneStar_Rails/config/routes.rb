Rails.application.routes.draw do
  get 'pages' => 'pages#index'
  root 'pages#index'
end
