class CreateJoinTableNutritionProduct < ActiveRecord::Migration
  def change
    create_join_table :nutritions, :products do |t|
      # t.index [:nutrition_id, :product_id]
      # t.index [:product_id, :nutrition_id]
    end
  end
end
