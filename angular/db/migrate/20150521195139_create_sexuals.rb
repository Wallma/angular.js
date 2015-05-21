class CreateSexuals < ActiveRecord::Migration
  def change
    create_table :sexuals do |t|
      t.text :name
      t.references :language, index: true

      t.timestamps null: false
    end
    add_foreign_key :sexuals, :languages
  end
end
