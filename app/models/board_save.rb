class BoardSave < ApplicationRecord
  belongs_to :user

  validates :board, presence: true
end