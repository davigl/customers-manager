# frozen_string_literal: true

class User < ApplicationRecord
	has_many :clients
	has_many :tags

	has_secure_password

	validates :name, :password, :password_confirmation, presence: true
  validates :email, uniqueness: true, presence: true
	validates :password, length: { minimum: 6 }
end
