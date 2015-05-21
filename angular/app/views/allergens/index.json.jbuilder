json.array!(@allergens) do |allergen|
  json.extract! allergen, :id, :name
  json.url allergen_url(allergen, format: :json)
end
