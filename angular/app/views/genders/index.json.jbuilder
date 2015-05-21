json.array!(@genders) do |gender|
  json.extract! gender, :id, :name, :language_id
  json.url gender_url(gender, format: :json)
end
