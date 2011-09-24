class AddCoverToMedia < ActiveRecord::Migration
  def change
    add_column :media, :cover, :string
  end
end
