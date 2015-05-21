class AddColumnsToUsers < ActiveRecord::Migration
  def change
    add_column :users, :firstname, :string
    add_column :users, :lastname, :string
    add_column :users, :street, :string
    add_column :users, :zip, :string
    add_column :users, :city, :string
    add_column :users, :job, :string
    add_column :users, :tel, :string
    add_column :users, :modil, :string
    add_reference :users, :gender, index: true
    add_foreign_key :users, :genders
    add_column :users, :birthday, :date
    add_column :users, :birthcity, :string
    add_reference :users, :scene, index: true
    add_foreign_key :users, :scenes
    add_reference :users, :sexual, index: true
    add_foreign_key :users, :sexuals
    add_reference :users, :vegan, index: true
    add_foreign_key :users, :vegans
  end
end
