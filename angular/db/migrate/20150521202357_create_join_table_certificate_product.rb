class CreateJoinTableCertificateProduct < ActiveRecord::Migration
  def change
    create_join_table :certificates, :products do |t|
      # t.index [:certificate_id, :product_id]
      # t.index [:product_id, :certificate_id]
    end
  end
end
