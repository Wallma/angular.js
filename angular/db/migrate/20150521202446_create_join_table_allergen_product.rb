class CreateJoinTableAllergenProduct < ActiveRecord::Migration
  def change
    create_join_table :allergens, :products do |t|
      # t.index [:allergen_id, :product_id]
      # t.index [:product_id, :allergen_id]
    end
  end
end
