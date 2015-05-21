json.array!(@ee_categories) do |ee_category|
  json.extract! ee_category, :id, :ee_category_id, :name
  json.url ee_category_url(ee_category, format: :json)
end
