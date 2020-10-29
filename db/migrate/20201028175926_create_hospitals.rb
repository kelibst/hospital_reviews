class CreateHospitals < ActiveRecord::Migration[6.0]
  def change
    create_table :hospitals do |t|
      t.string :name
      t.string :country
      t.string :address
      t.string :image
      t.string :slug

      t.timestamps
    end
  end
end
