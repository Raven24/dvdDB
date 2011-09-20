class CreateMedia < ActiveRecord::Migration
  def change
    create_table :media do |t|
      t.string :title
      t.text :plot
      t.integer :year
      t.integer :runtime
      t.text :comment

      t.timestamps
    end
  end
end
