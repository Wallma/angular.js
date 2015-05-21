class CreatePurchases < ActiveRecord::Migration
  def change
    create_table :purchases do |t|
      t.references :user, index: true
      t.date :date
      t.float :sum

      t.timestamps null: false
    end
    add_foreign_key :purchases, :users
  end
end
