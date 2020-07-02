class Client < ApplicationRecord
  belongs_to :user
  has_and_belongs_to_many :tags
  paginates_per 10

  validates :email, uniqueness: true, presence: true

  def set_tags(tags_input, current_user)
		tags_input.each do |tag|
      name = tag['name']
      current_user_tags = current_user.tags
      unless self.tags.exists? ({ name: name })
        if current_user_tags.exists? ({ name: name })
          tag = current_user_tags.where(name: name)
        else
          tag = Tag.new(name: name, user_id: current_user.id)
        end
        self.tags << tag
      end
		end
  end

  def set_user(current_user)
    self.user = current_user
  end
end