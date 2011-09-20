class CreateLanguagesMedia < ActiveRecord::Migration
  def change
  	create_table :languages_media, :id => false do |t|
	  t.integer :language_id 
	  t.integer :medium_id
	end 
  end
end
