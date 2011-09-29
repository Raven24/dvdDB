class CreateImagesTable < ActiveRecord::Migration

  # put an empty model class here, to avoid validation errors
  class Medium < ActiveRecord::Base
  end

  class Image < ActiveRecord::Base
  end
  
  def up
    create_table :images do |t|
      t.references :medium
      t.string :file
      t.string :description
      t.timestamps
    end

    Medium.reset_column_information
    Image.reset_column_information

    Medium.all.each do |f|
      img = Image.new
      img.medium_id = f.id
      img.file = f.cover
      img.description = 'poster'
      img.save
    end

    remove_column :media, :cover
    
  end

  def down
  end
end
