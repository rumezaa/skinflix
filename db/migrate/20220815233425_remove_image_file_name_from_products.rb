class RemoveImageFileNameFromProducts < ActiveRecord::Migration[7.0]
  def change
    remove_column :products, :image_file_name, :string
  end
end
