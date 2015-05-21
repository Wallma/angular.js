class CreateScenes < ActiveRecord::Migration
  def change
    create_table :scenes do |t|
      t.text :name
      t.references :language, index: true

      t.timestamps null: false
    end
    add_foreign_key :scenes, :languages
  end
end
