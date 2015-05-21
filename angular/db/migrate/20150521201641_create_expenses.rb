class CreateExpenses < ActiveRecord::Migration
  def change
    create_table :expenses do |t|
      t.references :user, index: true
      t.references :ee_category, index: true
      t.string :name
      t.float :sum

      t.timestamps null: false
    end
    add_foreign_key :expenses, :users
    add_foreign_key :expenses, :ee_categories
  end
end
