json.array!(@certificates) do |certificate|
  json.extract! certificate, :id, :name, :image
  json.url certificate_url(certificate, format: :json)
end
