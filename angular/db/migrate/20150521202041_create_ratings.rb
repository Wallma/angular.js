class CreateRatings < ActiveRecord::Migration
  def change
    create_table :ratings do |t|
      t.references :user, index: true
      t.string :product_references
      t.float :points
      t.text :text

      t.timestamps null: false
    end
    add_foreign_key :ratings, :users
  end
end
