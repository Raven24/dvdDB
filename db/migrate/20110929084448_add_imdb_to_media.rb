class AddImdbToMedia < ActiveRecord::Migration
  def change
    add_column :media, :imdb_id, :string
    add_column :media, :imdb_url, :string
  end
end
