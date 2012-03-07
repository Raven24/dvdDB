# encoding: utf-8

class CreateLanguages < ActiveRecord::Migration
  def change
    create_table :languages do |t|
      t.text :name
      t.timestamps
    end

    Language.create :name=>"English"
    Language.create :name=>"Español"
    Language.create :name=>"Deutsch"
    Language.create :name=>"Français"
    Language.create :name=>"Italiano"
  end
end
