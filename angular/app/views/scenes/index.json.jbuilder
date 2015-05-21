json.array!(@scenes) do |scene|
  json.extract! scene, :id, :name, :language_id
  json.url scene_url(scene, format: :json)
end
