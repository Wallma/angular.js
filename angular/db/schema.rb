# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150521202446) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "allergens", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "allergens_products", id: false, force: :cascade do |t|
    t.integer "allergen_id", null: false
    t.integer "product_id",  null: false
  end

  create_table "certificates", force: :cascade do |t|
    t.string   "name"
    t.string   "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "certificates_products", id: false, force: :cascade do |t|
    t.integer "certificate_id", null: false
    t.integer "product_id",     null: false
  end

  create_table "earnings", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "ee_category_id"
    t.string   "name"
    t.float    "sum"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "earnings", ["ee_category_id"], name: "index_earnings_on_ee_category_id", using: :btree
  add_index "earnings", ["user_id"], name: "index_earnings_on_user_id", using: :btree

  create_table "ee_categories", force: :cascade do |t|
    t.integer  "ee_category_id"
    t.text     "name"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "ee_categories", ["ee_category_id"], name: "index_ee_categories_on_ee_category_id", using: :btree

  create_table "expenses", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "ee_category_id"
    t.string   "name"
    t.float    "sum"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "expenses", ["ee_category_id"], name: "index_expenses_on_ee_category_id", using: :btree
  add_index "expenses", ["user_id"], name: "index_expenses_on_user_id", using: :btree

  create_table "genders", force: :cascade do |t|
    t.text     "name"
    t.integer  "language_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "genders", ["language_id"], name: "index_genders_on_language_id", using: :btree

  create_table "ingredients", force: :cascade do |t|
    t.string   "name"
    t.string   "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "ingredients_products", id: false, force: :cascade do |t|
    t.integer "ingredient_id", null: false
    t.integer "product_id",    null: false
  end

  create_table "languages", force: :cascade do |t|
    t.text     "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "manufacturers", force: :cascade do |t|
    t.string   "name"
    t.string   "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "nutritions", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "nutritions_products", id: false, force: :cascade do |t|
    t.integer "nutrition_id", null: false
    t.integer "product_id",   null: false
  end

  create_table "products", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "manufacturer_id"
    t.integer  "reseller_id"
    t.string   "name"
    t.string   "image"
    t.float    "sum"
    t.text     "description"
    t.float    "weight"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "products", ["manufacturer_id"], name: "index_products_on_manufacturer_id", using: :btree
  add_index "products", ["reseller_id"], name: "index_products_on_reseller_id", using: :btree
  add_index "products", ["user_id"], name: "index_products_on_user_id", using: :btree

  create_table "products_purchases", id: false, force: :cascade do |t|
    t.integer "product_id",  null: false
    t.integer "purchase_id", null: false
  end

  create_table "purchases", force: :cascade do |t|
    t.integer  "user_id"
    t.date     "date"
    t.float    "sum"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "purchases", ["user_id"], name: "index_purchases_on_user_id", using: :btree

  create_table "ratings", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "product_references"
    t.float    "points"
    t.text     "text"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
  end

  add_index "ratings", ["user_id"], name: "index_ratings_on_user_id", using: :btree

  create_table "resellers", force: :cascade do |t|
    t.string   "name"
    t.string   "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "scenes", force: :cascade do |t|
    t.text     "name"
    t.integer  "language_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "scenes", ["language_id"], name: "index_scenes_on_language_id", using: :btree

  create_table "sexuals", force: :cascade do |t|
    t.text     "name"
    t.integer  "language_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "sexuals", ["language_id"], name: "index_sexuals_on_language_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "firstname"
    t.string   "lastname"
    t.string   "street"
    t.string   "zip"
    t.string   "city"
    t.string   "job"
    t.string   "tel"
    t.string   "modil"
    t.integer  "gender_id"
    t.date     "birthday"
    t.string   "birthcity"
    t.integer  "scene_id"
    t.integer  "sexual_id"
    t.integer  "vegan_id"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["gender_id"], name: "index_users_on_gender_id", using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  add_index "users", ["scene_id"], name: "index_users_on_scene_id", using: :btree
  add_index "users", ["sexual_id"], name: "index_users_on_sexual_id", using: :btree
  add_index "users", ["vegan_id"], name: "index_users_on_vegan_id", using: :btree

  create_table "vegans", force: :cascade do |t|
    t.text     "name"
    t.integer  "language_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "vegans", ["language_id"], name: "index_vegans_on_language_id", using: :btree

  add_foreign_key "earnings", "ee_categories"
  add_foreign_key "earnings", "users"
  add_foreign_key "ee_categories", "ee_categories"
  add_foreign_key "expenses", "ee_categories"
  add_foreign_key "expenses", "users"
  add_foreign_key "products", "manufacturers"
  add_foreign_key "products", "resellers"
  add_foreign_key "products", "users"
  add_foreign_key "purchases", "users"
  add_foreign_key "ratings", "users"
  add_foreign_key "scenes", "languages"
  add_foreign_key "sexuals", "languages"
  add_foreign_key "users", "genders"
  add_foreign_key "users", "scenes"
  add_foreign_key "users", "sexuals"
  add_foreign_key "users", "vegans"
  add_foreign_key "vegans", "languages"
end
