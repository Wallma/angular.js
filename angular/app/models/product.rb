class Product < ActiveRecord::Base
  belongs_to :user
  belongs_to :manufacturer
  belongs_to :reseller
end
