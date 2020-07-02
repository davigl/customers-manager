# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api do
		namespace :v1 do
			# Users Routes
			resources :users, only: %i[create show]
			# Authenticate Route
			post 'authenticate', to: 'authentication#authenticate'
			# Clients Routes
			resources :clients
			get 'clients-info', to: 'clients#clients_info'
    end
  end
end
