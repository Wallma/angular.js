json.array!(@products) do |product|
  json.extract! product, :id, :user_id, :manufacturer_id, :reseller_id, :name, :image, :sum, :description, :weight
  json.url product_url(product, format: :json)
end
