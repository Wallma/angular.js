json.array!(@nutritions) do |nutrition|
  json.extract! nutrition, :id, :name
  json.url nutrition_url(nutrition, format: :json)
end
