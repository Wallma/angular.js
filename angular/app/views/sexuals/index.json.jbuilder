json.array!(@sexuals) do |sexual|
  json.extract! sexual, :id, :name, :language_id
  json.url sexual_url(sexual, format: :json)
end
