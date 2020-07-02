class Api::V1::ClientsController < ApplicationController
  before_action :authenticate_request
  before_action :set_client, only: [:edit, :show, :update, :destroy]

  def index
    clients = current_user.clients
    clients = clients.page page_param if page_param

    render_ok(clients)
  end

  def create
    tags = params[:tags]
    client = Client.new(client_params)
    client.set_tags(tags, current_user)
    client.set_user(current_user)

    render_created(client) if client.save!
  end

  def update
    render_ok(@cliente) if @client.update(client_params)
  end

  def destroy
    render_destroyed if @client.destroy
  end

  def clients_info
    clients = current_user.clients.count
    tags = current_user.tags.count

    infos = { quantityClients: clients, quantityTags: tags, 
              quantityPages: (clients / 10) + 1 }

    render_ok(infos)
  end

  private

  def set_client
    @client = current_user.clients.find(params[:id])
  end

  def client_params
    params.require(:client).permit(:name, :email)
  end

  def page_param
    params.require(:page) if params[:page]
  end
end
