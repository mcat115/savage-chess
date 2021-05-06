class CreateBoardSaves < ActiveRecord::Migration[5.2]
  def change
    create_table :board_save do |t|
      t.json :board, null: false
      t.belongs_to :user, null: false
      t.timestamps
    end
  end
end
