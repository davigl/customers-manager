class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: [:show]

  def create
    user = User.new(user_params)

    render_created(user) if user.save!
  end

  def show
    render_ok(user) if @user
  end

  private

  def set_user
    @user = User.find_by_id(params[:id])
  end

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end
end