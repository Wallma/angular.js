class CreateEeCategories < ActiveRecord::Migration
  def change
    create_table :ee_categories do |t|
      t.references :ee_category, index: true
      t.text :name

      t.timestamps null: false
    end
    add_foreign_key :ee_categories, :ee_categories
  end
end
