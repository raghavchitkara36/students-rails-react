class CreateMystudents < ActiveRecord::Migration[6.0]
  def change
    create_table :mystudents do |t|
      t.integer :roll_number
      t.string :name
      t.string :email
      t.string :phone

      t.timestamps
    end
  end
end
