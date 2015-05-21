class CreateEarnings < ActiveRecord::Migration
  def change
    create_table :earnings do |t|
      t.references :user, index: true
      t.references :ee_category, index: true
      t.string :name
      t.float :sum

      t.timestamps null: false
    end
    add_foreign_key :earnings, :users
    add_foreign_key :earnings, :ee_categories
  end
end
