class CreateVegans < ActiveRecord::Migration
  def change
    create_table :vegans do |t|
      t.text :name
      t.references :language, index: true

      t.timestamps null: false
    end
    add_foreign_key :vegans, :languages
  end
end
