class CreateGenres < ActiveRecord::Migration
  def change
    create_table :genres do |t|
      t.string :name
      t.timestamps
    end

    Genre.create :name=>"Action"
    Genre.create :name=>"Adventure"
    Genre.create :name=>"Horror"
    Genre.create :name=>"SciFi"
    Genre.create :name=>"Comedy"
    Genre.create :name=>"Animation"
    Genre.create :name=>"Fantasy"
    Genre.create :name=>"Thriller"
    Genre.create :name=>"Drama"
    Genre.create :name=>"Western"
  end
end
