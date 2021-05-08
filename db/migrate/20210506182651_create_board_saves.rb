class CreateBoardSaves < ActiveRecord::Migration[5.2]
  def change
    create_table :board_saves do |t|
      t.json :position, null: false
      t.string :title
      t.belongs_to :user, null: false
      t.timestamps
    end
  end
end
