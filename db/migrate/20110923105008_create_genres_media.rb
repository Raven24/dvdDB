class CreateGenresMedia < ActiveRecord::Migration
  def change
	create_table :genres_media, :id => false do |t|
	  t.integer :genre_id
	  t.integer :medium_id
	end  
  end
end
