class CreateNutritions < ActiveRecord::Migration
  def change
    create_table :nutritions do |t|
      t.string :name

      t.timestamps null: false
    end
  end
end
