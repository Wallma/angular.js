json.array!(@vegans) do |vegan|
  json.extract! vegan, :id, :name, :language_id
  json.url vegan_url(vegan, format: :json)
end
