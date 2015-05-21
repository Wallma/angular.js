json.array!(@earnings) do |earning|
  json.extract! earning, :id, :user_id, :ee_category_id, :name, :sum
  json.url earning_url(earning, format: :json)
end
