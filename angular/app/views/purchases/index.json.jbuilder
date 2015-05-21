json.array!(@purchases) do |purchase|
  json.extract! purchase, :id, :user_id, :date, :sum
  json.url purchase_url(purchase, format: :json)
end
