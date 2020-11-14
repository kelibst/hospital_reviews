class AddCityToHospitals < ActiveRecord::Migration[6.0]
  def change
    add_column :hospitals, :city, :string
  end
end
