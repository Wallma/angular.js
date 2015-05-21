json.array!(@resellers) do |reseller|
  json.extract! reseller, :id, :name, :image
  json.url reseller_url(reseller, format: :json)
end
