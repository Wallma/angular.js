json.array!(@expenses) do |expense|
  json.extract! expense, :id, :user_id, :ee_category_id, :name, :sum
  json.url expense_url(expense, format: :json)
end
