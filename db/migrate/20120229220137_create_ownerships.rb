class CreateOwnerships < ActiveRecord::Migration
  def change
    create_table :formats do |t|
      t.string :name
      t.timestamps
    end
    
    create_table :ownerships do |t|
      t.references :medium
      t.references :user
      t.string :location
      t.boolean :private
      t.references :format
      
      t.timestamps
    end

    add_index :ownerships, [:medium_id, :user_id], :unique => true

    create_table :languages_ownerships, :id => false do |t|
      t.references :language
      t.references :ownership
    end

  end
end
