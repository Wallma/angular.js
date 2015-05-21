class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.references :user, index: true
      t.references :manufacturer, index: true
      t.references :reseller, index: true
      t.string :name
      t.string :image
      t.float :sum
      t.text :description
      t.float :weight

      t.timestamps null: false
    end
    add_foreign_key :products, :users
    add_foreign_key :products, :manufacturers
    add_foreign_key :products, :resellers
  end
end
