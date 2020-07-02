class CreateClientsAndTags < ActiveRecord::Migration[5.2]
  def change
    create_table :clients_tags, id: false do |t|
      t.belongs_to :client
      t.belongs_to :tag
    end
  end
end
