class CreateGenders < ActiveRecord::Migration
  def change
    create_table :genders do |t|
      t.text :name
      t.references :language, index: true

      t.timestamps null: false
    end
    add_foreign_key :genders, :languages
  end
end
