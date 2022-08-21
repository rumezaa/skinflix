class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name
      t.decimal :price
      t.text :description
      t.string :product_type
      t.integer :availability
      t.string :brand
      t.string :image_file_name
      t.string :url

      t.timestamps
    end
  end
end
