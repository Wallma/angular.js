json.array!(@manufacturers) do |manufacturer|
  json.extract! manufacturer, :id, :name, :image
  json.url manufacturer_url(manufacturer, format: :json)
end
